import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const routes = [
  "/",
  "/about/",
  "/experience/",
  "/projects/",
  "/resume/",
  "/contact/",
];

for (const route of routes) {
  test(`static route, links, and accessibility: ${route}`, async ({
    page,
    request,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page
        .getByRole("navigation", { name: "Main navigation" })
        .locator('[aria-current="page"]'),
    ).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://hariprakash.in${route}`,
    );

    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) => [
        ...new Set(links.map((link) => link.getAttribute("href")!)),
      ]);
    for (const href of hrefs) {
      const linked = await request.head(href);
      expect(linked.status(), `Broken static link: ${href}`).toBe(200);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("mobile menu supports keyboard, Escape, and route changes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await expect(menu).toBeVisible();
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("button", { name: "Close", exact: true }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects\/$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Projects", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});

test("all static routes reflow at phone and tablet widths", async ({
  page,
}) => {
  for (const width of [360, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} overflows at ${width}px`,
      ).toBe(true);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  }
});

test("static content and navigation remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: "no-preference",
    viewport: { width: 360, height: 800 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("checkbox", { name: "Pause text animation" }).check();
  await expect(
    page.getByRole("checkbox", { name: "Pause text animation" }),
  ).toBeChecked();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "The person behind the systems.",
  );
  await context.close();
});

test("missing routes return the custom static 404", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "doesn’t lead anywhere",
  );
  await page.getByRole("link", { name: "Back to home" }).click();
  await expect(page).toHaveURL("/");
});

test("resume download matches the published PDF", async ({ page }) => {
  await page.goto("/resume/");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download resume (PDF)" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("Hari_Prakash_K_Resume.pdf");
  expect(await download.failure()).toBeNull();
  const downloaded = await readFile((await download.path())!);
  const supplied = await readFile(
    resolve(process.cwd(), "public/resume/Hari_Prakash_K_Resume.pdf"),
  );
  expect(downloaded.equals(supplied)).toBe(true);
});

test("contact details use resume links and omit phone contact", async ({
  page,
}) => {
  await page.goto("/contact/");
  const main = page.getByRole("main");
  await expect(main.getByRole("link", { name: /^Email/ })).toHaveAttribute(
    "href",
    "mailto:hariprakash.khp@gmail.com",
  );
  await expect(main.getByRole("link", { name: /^GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/HariprakashKhp",
  );
  await expect(main.getByRole("link", { name: /^LinkedIn/ })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/hariprakash-k/",
  );
  await expect(main.locator('a[href^="tel:"]')).toHaveCount(0);
  await expect(main).not.toContainText("81898");
});

test("projects stay empty until the owner adds their new work", async ({
  page,
  request,
}) => {
  await page.goto("/projects/");
  await expect(
    page.getByRole("heading", { name: "New projects are on the way." }),
  ).toBeVisible();
  await expect(page.getByRole("main").getByRole("article")).toHaveCount(0);
  await expect(page.locator('main a[href^="/projects/"]')).toHaveCount(0);
  const oldPreview = await request.get("/projects/case-study-preview/");
  expect(oldPreview.status()).toBe(404);
});

test("homepage CLI cycles through name, role, location, and back without shifting", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const width of [1440, 360]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.getByRole("checkbox", { name: "Pause text animation" }).check();
    const seek = (time: number) =>
      page.locator(".cli-name").evaluate((element, time) => {
        const animations = element.getAnimations({ subtree: true });
        const typing = animations.filter(
          (animation) =>
            animation instanceof CSSAnimation &&
            animation.animationName === "cli-type-cycle",
        );
        if (typing.length !== 3)
          throw new Error("Expected three cycling phrases");
        animations.forEach((animation) => {
          animation.currentTime = time;
        });
        const phrases = Array.from(
          element.querySelectorAll<HTMLElement>(".cli-phrase"),
        );
        return {
          visible: phrases
            .filter(
              (phrase) =>
                getComputedStyle(phrase).visibility === "visible" &&
                phrase.getBoundingClientRect().width > 2,
            )
            .map((phrase) => phrase.textContent),
          widths: phrases.map((phrase) => phrase.getBoundingClientRect().width),
          reservedWidth: element.getBoundingClientRect().width,
          headingTop: document
            .querySelector("#hero-title")!
            .getBoundingClientRect().top,
          looping: animations.every(
            (animation) =>
              animation.effect!.getTiming().iterations === Infinity,
          ),
        };
      }, time);
    const name = await seek(2400);
    expect(name.visible).toEqual(["Hari Prakash K"]);
    expect(name.looping).toBe(true);
    const deleting = await seek(4800);
    expect(deleting.widths[0]).toBeGreaterThan(2);
    expect(deleting.widths[0]).toBeLessThan(name.widths[0]);
    const erased = await seek(5600);
    expect(erased.visible).toEqual([]);
    const role = await seek(8400);
    expect(role.visible).toEqual(["Staff Engineer"]);
    await page.screenshot({ path: testInfo.outputPath(`role-${width}.png`) });
    const location = await seek(14400);
    expect(location.visible).toEqual(["Bengaluru, India"]);
    const repeated = await seek(20400);
    expect(repeated.visible).toEqual(["Hari Prakash K"]);
    for (const frame of [deleting, erased, role, location, repeated]) {
      expect(frame.reservedWidth).toBe(name.reservedWidth);
      expect(frame.headingTop).toBe(name.headingTop);
    }
    await page.screenshot({ path: testInfo.outputPath(`name-${width}.png`) });
  }
  await page.goto("/about/");
  await expect(page.locator(".cli-intro")).toHaveCount(0);
});

test("CLI pause control stops typing and cursor and supports keyboard resume", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const pause = page.getByRole("checkbox", { name: "Pause text animation" });
  await expect(page.locator(".cli-pause-icon")).toBeVisible();
  await expect(page.locator(".cli-play-icon")).not.toBeVisible();
  await pause.focus();
  await page.keyboard.press("Space");
  await expect(pause).toBeChecked();
  await expect(page.locator(".cli-pause-icon")).not.toBeVisible();
  await expect(page.locator(".cli-play-icon")).toBeVisible();
  const frozen = await page.locator(".cli-name").evaluate(async (element) => {
    const animations = element.getAnimations({ subtree: true });
    const before = animations.map((animation) => animation.currentTime);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );
    return {
      before,
      after: animations.map((animation) => animation.currentTime),
      states: animations.map((animation) => animation.playState),
    };
  });
  expect(frozen.states).toEqual(Array(6).fill("paused"));
  expect(frozen.after).toEqual(frozen.before);
  await page.keyboard.press("Space");
  await expect(pause).not.toBeChecked();
  await expect(page.locator(".cli-pause-icon")).toBeVisible();
  await expect(page.locator(".cli-play-icon")).not.toBeVisible();
  expect(
    await page
      .locator(".cli-name")
      .evaluate((element) =>
        element
          .getAnimations({ subtree: true })
          .every((animation) => animation.playState === "running"),
      ),
  ).toBe(true);
});

test("CLI loop shows a complete static name under reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const name = page.locator(".cli-phrase").first();
  await expect(name).toHaveText("Hari Prakash K");
  await expect(name).toBeVisible();
  await expect(
    page.getByRole("checkbox", { name: "Pause text animation" }),
  ).not.toBeVisible();
  expect(
    await page
      .locator(".cli-name")
      .evaluate((element) => element.getAnimations({ subtree: true }).length),
  ).toBe(0);
  expect(
    await name.evaluate(
      (element) => element.getBoundingClientRect().width >= element.scrollWidth,
    ),
  ).toBe(true);
  await expect(page.locator(".cli-intro .sr-only")).toHaveText(
    "Hari Prakash K. Staff Engineer. Bengaluru, India.",
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await name.evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  await expect(name).toBeVisible();
});

test("reduced motion and screenshots", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 360]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
    ).toBe("auto");
    await page.screenshot({
      path: testInfo.outputPath(`home-${width}.png`),
      fullPage: true,
    });
  }
  for (const route of ["about", "experience", "contact", "resume"]) {
    for (const width of [1440, 360]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`/${route}/`);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: testInfo.outputPath(`${route}-${width}.png`),
        fullPage: true,
      });
    }
  }
});
