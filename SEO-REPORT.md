# SEO & Personal Brand Optimization Report

**Site:** https://awadhesh.in/  
**Entity:** Awadhesh Chaurasia  
**Date:** 2026-09-12  
**Stack:** Static HTML + Vanilla JS (Vite) on GitHub Pages

---

## A. Current SEO problems found (audit)

| Area | Finding |
|------|---------|
| HTML integrity | `index.html` was ~2.6MB due to Wordtune/Grammarly extension markup after `</body>` |
| DOCTYPE | Missing `<!DOCTYPE html>` |
| robots.txt | Missing (live URL returned 404) |
| Canonical | Missing on homepage and project pages |
| JSON-LD | None |
| Titles | Weak (`Awadhesh Chaurasia [Engineer]`); project pages generic |
| Meta descriptions | Thin / outdated (still “Technical Lead” framing without Champo / Varanasi) |
| Open Graph | Partial; wrong image dimensions (claimed 1200×630 for 1024×1024 asset); no `og:site_name` / locale |
| About content | Outdated (“I lead” at Compliance Innovation) while resume shows Champo Carpets as current |
| Education entities | Incomplete official names / locations (Agra missing) |
| Sitemap | Missing `qurb.html`, `sitein2days.html`, `instaclean.html` |
| Internal linking | Almost none between About ↔ Resume ↔ Projects |
| Deep links | No `#about` / `#resume` / `#portfolio` / `#contact` support |
| Favicon on projects | Broken `logo.ico` references |
| Scripts | Duplicate `script.js` + triple ionicons loads |
| Images | Large PNGs (project-1 ~1.2MB); OG size mismatch |
| Policy page | Weak connection to personal brand |

---

## B. Changes implemented

1. Removed ~2.5MB browser-extension pollution; restored valid HTML document.
2. Added DOCTYPE, canonical, robots, author, geo, theme-color, apple-touch-icon.
3. Rewrote homepage title + meta description for name + role + location intent.
4. Strengthened Open Graph + Twitter cards (correct image URL/dimensions).
5. Added Schema.org `@graph`: `WebSite` + `ProfilePage` + `Person` (verified `sameAs`, `worksFor`, `alumniOf`, `knowsAbout`).
6. Rewrote About for entity clarity (who / what / where / companies / projects / education / contact).
7. Normalized education institution names and locations.
8. Linked experience ↔ project case studies; improved Skills copy + image alts/dimensions.
9. Added Contact identity blurb; map iframe `title`; `rel="me"` on LinkedIn/GitHub.
10. Hash routing (`#resume`, etc.) + section `id`s for crawlable deep links.
11. Created `robots.txt`; expanded `sitemap.xml`.
12. SEO’d all project pages (title, description, canonical, OG/Twitter, JSON-LD, author credit, back-links).
13. Deduplicated JS/ionicon script tags; fixed navbar tests for hash navigation.

---

## C. New / updated keywords (evidence-based)

**Primary branded:** Awadhesh Chaurasia; Awadhesh Chaurasia software developer; Awadhesh Chaurasia Technical Lead  

**Role / skill:** React Native developer; full-stack / frontend engineer; AI integration; CI/CD  

**Location:** software developer Varanasi; software developer India; Uttar Pradesh  

**Company / project:** Champo Carpets Awadhesh Chaurasia; Liquidity.io; Simplici.io; Qurb; sitein2days; Compliance Innovation; Instaclean  

**Education:** Dr. Bhimrao Ambedkar University Agra; AKTU Lucknow; Awadhesh Chaurasia education  

---

## D. Pages optimized

| URL | Status |
|-----|--------|
| `/` | Fully optimized |
| `/components/liquidity.html` | Optimized |
| `/components/simplici.html` | Optimized |
| `/components/qurb.html` | Optimized |
| `/components/sitein2days.html` | Optimized |
| `/components/instaclean.html` | Optimized |
| `/components/playstore.html` | Optimized |
| `/components/decorating-varanasi.html` | Optimized |
| `/policy/linkedin-jobseekers-privacy-policy.html` | Meta + canonical |

---

## E. Structured data added

- Homepage: `WebSite`, `ProfilePage`, `Person` (`sameAs`, `worksFor` Champo Carpets, `alumniOf`, `knowsAbout`, Varanasi address).
- Project pages: `WebPage` + nested `about` CreativeWork/SoftwareApplication with `creator` Person.
- No fake ratings, reviews, or invented employers.

---

## F. Technical SEO improvements

- `robots.txt` → Allow `/` + Sitemap reference  
- Sitemap updated with all indexable portfolio URLs  
- Canonicals on all important pages  
- HTTPS non-www `https://awadhesh.in/` as canonical host  
- HTML size: ~2.6MB → ~64KB (major crawl/LCP win)  
- Script dedupe  

---

## G. Internal linking improvements

- About → Resume / Portfolio / Contact (hash)  
- About / Experience → Liquidity, Simplici, Qurb, Instaclean, sitein2days case studies  
- Project pages → homepage author, `#resume`, `#about`, `#portfolio`  
- Social `rel="me"` identity links  

---

## H. Performance improvements

- Removed 2.5MB dead HTML/CSS from extensions (largest win)  
- Lazy-loading retained on portfolio images; width/height on skill icons  
- Remaining: compress large project PNGs; consider WebP/AVIF; defer particles.js  

---

## I–K. Entity SEO (Person / companies / education)

- Consistent name “Awadhesh Chaurasia” in titles, H1, About, schema, projects  
- Current employer: Champo Carpets (linked + schema `worksFor`)  
- Past: Compliance Innovation, freelance/Qurb, Nixet, Sparrow Chart, Medi Assist, Vumonic  
- Education: AKTU Lucknow (M.Tech CSE); Dr. Bhimrao Ambedkar University / Agra University (BE CSE, 2015–2019)  

---

## L. Remaining SEO opportunities

1. Compress/convert large portfolio screenshots (project-1.png ~1.2MB).  
2. Create a true 1200×630 OG banner (current is 1024×1024).  
3. After deploy: submit sitemap in Google Search Console + Bing Webmaster.  
4. Request indexing for homepage + top project pages.  
5. Optional blog posts (case studies) for long-tail — only with real content.  
6. Ensure LinkedIn/GitHub profiles list `https://awadhesh.in/` as website.  
7. Fix pre-existing Jest ESM fake-timers issue in `experienceCalculator.test.js`.  

---

## M. Future content opportunities

- Deep Champo Carpets ERP/AI case study (when publishable)  
- Technical write-ups: React Native CI/CD, biometric onboarding, Fastlane  
- “Projects” index page if the portfolio grows beyond one-page sections  

---

## Keyword / Search Intent → Target Page → Why → Status

| Keyword / Intent | Target Page | Why Relevant | Status |
|------------------|-------------|--------------|--------|
| Awadhesh Chaurasia | `/` | Primary name / entity | Done |
| Awadhesh Chaurasia software developer | `/` | Core professional identity | Done |
| Awadhesh Chaurasia Technical Lead | `/` | Current job title | Done |
| Awadhesh Chaurasia AI engineer / AI developer | `/` | Supported by AI integration work | Done (natural) |
| software developer Varanasi / India | `/` | Public location on site | Done |
| Champo Carpets Awadhesh Chaurasia | `/#resume` | Current employer | Done |
| Compliance Innovation Awadhesh Chaurasia | `/#resume` | Prior Technical Lead / SDE3 | Done |
| Liquidity.io Awadhesh Chaurasia | `/components/liquidity.html` | Built mobile apps | Done |
| Simplici.io Awadhesh Chaurasia | `/components/simplici.html` | Led product engineering | Done |
| Qurb Awadhesh Chaurasia | `/components/qurb.html` | Freelance engineer | Done |
| sitein2days Awadhesh Chaurasia | `/components/sitein2days.html` | Own studio | Done |
| Instaclean Awadhesh Chaurasia | `/components/instaclean.html` | Vumonic internship work | Done |
| Awadhesh Labs Play Store | `/components/playstore.html` | Developer channel | Done |
| Decorating Varanasi Awadhesh | `/components/decorating-varanasi.html` | Local web project | Done |
| Dr. Bhimrao Ambedkar University Awadhesh | `/#resume` | BE Computer Science | Done |
| AKTU Lucknow Awadhesh Chaurasia | `/#resume` | M.Tech CSE | Done |

---

## Verification notes

- JSON-LD parses successfully on homepage + project pages.  
- `npm test`: Navbar + Sidebar pass; ExperienceCalculator has a pre-existing ESM/`jest.useFakeTimers` issue.  
- `vite build` succeeds (site deploys from repo root via GitHub Pages, not necessarily `dist/`).  
- **Deploy required** for `robots.txt` and SEO changes to go live on https://awadhesh.in/.
