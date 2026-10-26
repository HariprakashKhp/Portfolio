"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/portfolio";
import { BrandMark } from "./icon";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header container">
      <Link
        className="brand"
        href="/"
        aria-label="Portfolio home"
        onClick={() => setOpen(false)}
      >
        <span className="brand-mark">
          <BrandMark />
        </span>
        <span>
          {profile.name ?? "Engineering"}
          <span className="brand-subtitle">Portfolio</span>
        </span>
      </Link>
      <div className="navigation" data-open={open}>
        <button
          ref={trigger}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav id="primary-navigation" aria-label="Main navigation">
          {navigation.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href.replace(/\/$/, ""));
            return (
              <Link
                href={href}
                key={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
