# Personal content source

## 2026-10-27 About and Experience refresh

The owner requested that About and Experience reflect the newer Home and Projects content. Their current-role introductions and About biography use existing profile facts. Both routes now render compact project summaries directly from `content/projects.ts`, including the exact personal/learning context and Prototype, In progress, or Evaluation lab status. This adds no new project execution, deployment, repair, or benchmark claim.

Home and Experience share the 30% API-latency and 35% token/cloud-cost highlights from `impactHighlights`, retaining employer/role attribution. About's evaluation skills distinguish professional RAGAS golden-dataset contributions from DeepEval metrics and pytest feedback in independent work. Terraform and GitHub Actions come from Twin's already reviewed infrastructure and workflow descriptions. No role dates, employer outcomes, credentials, or client details were added. Implementation is awaiting owner-requested testing.

## Original resume import

Imported on 2026-10-26 from the owner-supplied root `Hari_Prakash_K_Resume.docx`. The website is a resume-backed presentation; metrics and career facts are taken from that document, not independently audited results.

Source SHA-256: `ceb987b66c1460e1f882df8cd6684d4bd9b8c8cadfff07de983483f9cc8b8411`.

## Imported content

| Resume section | Website destination |
|---|---|
| Name, headline, location, summary | Shared brand, Home, About, Resume, page metadata |
| Skills | About skill groups and Home focus areas |
| Professional experience | Three Odessa roles, exact month/year periods, responsibilities, and supplied achievements |
| Education | About: B.E. Mechanical Engineering and MBA Financial Management |
| Email, GitHub, LinkedIn | Contact links using the resume's addresses |
| Supplied PDF | Current download from `/resume/Hari_Prakash_K_Resume.pdf` |

The original root DOCX is preserved; its SHA-256 above describes that original import. The owner subsequently supplied Hari_Prakash_K_Resume.pdf. That PDF is now copied unchanged to public assets and selected for download; it has not been rendered or tested in this update. The old public DOCX copy is removed. Root resume originals are ignored by Git while the published PDF remains trackable.

## Owner decisions from this session

- The owner subsequently selected Twin, BugFixer (in progress), and DeepEval (to showcase evaluation) on 2026-10-26. This supersedes the earlier empty-Projects instruction. Entries use reviewed public source material, with prototype/learning status and limitations; the original placeholder case study remains removed.
- Contact shows email, GitHub, and LinkedIn only. The phone number is omitted from web contact content. The resume download now uses the supplied PDF.
- The custom domain is `hariprakash.in`. Metadata uses the HTTPS apex URL; DNS, certificates, hosting, and alternate-host redirects have not been configured or verified.
- The owner subsequently approved a homepage CLI-style name animation. Other animations remain deferred.

## Homepage impact highlights

The homepage selects two existing resume-backed achievements: 30% lower API response latency from the Senior Software Engineer role, and 35% lower token/cloud compute costs from the Staff Engineer role. The shared data retains employer and role attribution. These are professional-work results, not personal-project results, new measurements, or independently audited claims.

## Wording boundaries

- AWS deployment experience from personal work is kept separate from Odessa employment.
- The approximately 80% delivery improvement is individual, not a team/company metric.
- The resume's approximate user count, throughput, percentages, role periods, and experience descriptions are preserved without adding new baselines or current-live-service claims.
- System design, HLD, and LLD are listed as skills without expert/advanced proficiency ratings.
- Public name capitalization is normalized to “Hari Prakash K”; education and role wording preserve the source's meaning.

## Later inputs

### Courses and certifications

On 2026-10-26 the owner reported completion of five Udemy AI courses, the IBM RAG and Agentic AI Professional Certificate program on Coursera, and two Udemy web development courses. The owner also reported current study of Decoding DevOps, Docker Mastery, and AWS courses on Udemy. Completion/progress comes from the owner's statement; public provider pages establish course titles, not independent completion verification.

Edit `apps/web/src/data/learning.ts` when details are ready:

- Completed courses in `courses` have title, provider, category, a clean public `courseUrl`, and optional completedOn/summary/certificateUrl. AI engineering and web development are rendered separately.
- `currentStudies` lists current DevOps/Docker/AWS study with In progress labels. The AWS entry stays generic and has no link because the supplied `https://www.udemy.com/home/my-courses/lists/` redirects to login. No course title or exam is inferred from it.
- Add earned certifications to `certifications` with `title`, `issuer`, `issuedOn`, optional `expiresOn`, and optional `credentialUrl`.
- Use readable date labels such as month and year. Omit unavailable links instead of inserting placeholder URLs.
- Keep future intentions in `certificationPlan`, separate from completed learning and earned credentials. The IBM entry records completion of the professional certificate program, without inventing an award date, badge, or verification link. `certifications` stays empty; its panel is omitted until real entries are supplied.

Public course titles were checked on the owner's supplied Udemy/Coursera pages. The stored links omit coupon parameters and lecture/player fragments. The JavaScript course's edition year is omitted because the owner did not specify the edition completed. Course catalog links are labeled by their course titles and are not presented as personal completion certificates.

### Problem-solving practice

The owner initially reported 500+ LeetCode problems solved and recent NeetCode 150 practice, then requested a brief About pointer instead. The biography retains the brief practice sentence, without counts or a standalone practice section. On 2026-10-26 the owner supplied https://leetcode.com/u/HariprakashKhp/ and https://neetcode.io/user/UncannyJonin210; those names now link to the supplied profiles. `profile.problemSolving` in `apps/web/src/data/portfolio.ts` owns the introduction and links. The public LeetCode page was readable; the web reader could not access NeetCode. No rankings, streaks, counts, or completion percentages were imported from either profile.

### Personal routine and client ownership

On 2026-10-26 the owner supplied daily gym attendance, independent leadership of client calls/interactions, decision-making, ownership/responsibility, and travel to client locations for FDE work. About includes a short gym sentence and the client narrative; the existing Staff Engineer client-call highlight is strengthened and a client-travel point is added. FDE is expanded as forward-deployed engineering. No client identity, destination, date, outcome, team-management claim, or additional metric is inferred.

### Odessa customer-portal architecture

The owner supplied root `architecture.html` as context for work at Odessa and requested a high-level Experience summary with identifying organization information omitted. The source mixes design concepts with explicit assumptions, proposed Azure services, sizing, security settings, performance targets, and open decisions. The public `professionalArchitecture` data uses generalized concepts supported by both this file and the existing resume-backed portal work: FastAPI behind CDN/gateway/WAF, reads/reports using a CDC-fed SQL Server read database, writes through core leasing/payment APIs, time/change-driven cache refresh with account balances bypassing cache, and agents reusing business APIs.

The detailed HTML remains unchanged as a local, Git-ignored reference; no public copy, download, embed, or source link is added. The public summary omits client identities, internal endpoints, credentials, deployment topology, proposed capacity/SLO figures, and unconfirmed cloud/security choices. No source assumptions are promoted to implemented employer achievements. The summary appears only on Experience, separate from personal/learning Projects.

### Professional development

The owner reports learning system design and architecture through Hello Interview's YouTube channel and successfully clearing system-design and problem-solving interview rounds. `profile.professionalDevelopment` records this under Professional development on Experience, separate from the Odessa roles. At the owner's request, it now renders as ordinary paragraphs using the section width, replacing the narrow list presentation. No interview count, date, employer, offer, certification, or advanced/expert skill rating is inferred. This is owner-supplied experience, not a resume import or an independently verified interview result.

### Selected projects

The owner approved these three entries after a review of public repositories created in 2026:

| Entry | Public source | Content boundary |
|---|---|---|
| Twin | https://github.com/HariprakashKhp/twin | Personal prototype: FastAPI/Bedrock, profile context, conversation storage, and AWS infrastructure code. No current-live-service or answer-quality claim. |
| BugFixer | https://github.com/HariprakashKhp/BugFixer | In progress: LangGraph, MCP filesystem tools, and pytest execution. Reproducible repair evidence remains planned. |
| DeepEval | https://github.com/HariprakashKhp/deepeval_proj | Learning exercise showcasing tracing and agent/RAG/conversation evaluation. Small example datasets; no benchmark score or improvement claim. |

Repository inspection is source evidence, not execution evidence or proof of original authorship. No projects were run during this review. Project descriptions, sections, statuses, and links are maintained in `apps/web/src/content/projects.ts`. No project metrics have been imported from professional experience.

Detailed maps in `apps/web/src/content/project-architectures.ts` replace the initial three-node sketches. Additional inspected sources include Twin's Lambda/Mangum adapter and deployment workflow; BugFixer's message state and filesystem MCP client; and DeepEval's instrumented agent, RAG agent, and multi-turn chatbot. DeepEval retrieval uses nine built-in policy texts, OpenAI embeddings, and InMemoryVectorStore top-three search. Maps distinguish application flow, deployment configuration, feedback, and unverified outcomes without adding production services, completed automatic repair, or benchmark claims.

The PDF has been supplied. Hosting/registrar details and preferences for further animations are later inputs. The canonical work checklist remains in `spec.md`.
