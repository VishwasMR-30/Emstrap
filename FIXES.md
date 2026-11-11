# EMSTRAP Rebuild: Errors Found and Fixed

Original site: https://emstrap-delta.vercel.app
Rebuilt with React (Vite) + Tailwind CSS, Node/Express backend, MongoDB-ready storage.
Content kept the same, errors fixed.

| # | Error found in the original | Status | Fix |
|---|---|---|---|
| 1 | "Educational Institutions" in the dropdown vs "Educational Campuses" in the card and footer | Fixed | One name used everywhere, from a single data file |
| 2 | Mobile menu listed fewer solutions than the desktop menu | Fixed | Both menus use the same list |
| 3 | "Industrial & Manufacturing" card linked to the Corporate page | Fixed | It now has its own page, /solutions/industrial-manufacturing |
| 4 | "Explore Platform Demo" button went nowhere | Fixed | Opens the working /demo page |
| 5 | Phone number written two different ways | Fixed | Always +91 9880882476 |
| 6 | Stray bullet as its own item in the footer Legal links | Fixed | Removed |
| 7 | Demo said "Real Working Platform" and "No real data"; raw [ACTIVE] / [TRANSMIT] labels | Fixed | One clear label: "Simulation, demo data only"; clean button names |
| 8 | Document viewer: Download PDF / Open in New Tab were dead links | Fixed | Dead viewer removed; no link points to nothing |
| 9 | Same images reused; files split between root and /images folders; blurry images | Fixed | The rebuild uses sharp icons and vector graphics, with no reused or blurry photos |
| 10 | "Service Profile" link opened product-brochure.pdf (name mismatch) | Fixed | Link removed; the product pages now hold that information |
| 11 | Services and Solutions had identical intro text | Fixed | Solutions has its own intro |
| 12 | Careers page navbar had no Solutions dropdown | Fixed | One shared navbar on every page |
| 13 | Careers role dropdown names did not match the job titles | Fixed | Dropdown is built from the same roles list as the job cards |
| 14 | Careers apply popup showed placeholder text ("Role Title", "...") and empty sections | Fixed | Popup shows the real title, about, responsibilities, requirements, tools and perks |
| 15 | Careers "Role" label had a double asterisk (* *) | Fixed | One shared Field component, single asterisk |
| 16 | Instagram link carried a tracking parameter (?stkn=...) | Fixed | Clean link used |
| 17 | Demo map used tiles that now need an API key ("API KEY REQUIRED" shown) | Fixed | Free OpenStreetMap tiles, darkened with a CSS filter |
| 18 | Corporate page repeated the heading "A connected safety cycle." as its own subtitle | Fixed | Duplicate line removed |
| 19 | Police page: first challenge description repeated the section intro text | Fixed | Unique description written |
| 20 | Footer on several pages listed only 6 of the 8 solutions | Fixed | Footer and dropdown use the same full list |
| 21 | Solution cards used unrelated or repeated photos (e.g. an ambulance call-taker photo on two different cards) | Fixed | Icons instead of reused photos |
| 22 | Forms did not save anything | Fixed | Contact, careers, bookings, SOS and briefing requests are validated and saved by the Express backend |
| 23 | Privacy / Terms links pointed to PDFs on the home page and to different places on other pages | Fixed | One /privacy page and one /terms page, linked from the footer |
| 24 | "KNOW MORE" buttons on the Services cards; product pages needed rebuilding | Fixed | Connect, Ride, Shield and Command pages built at /products/... |
| 25 | Ride page repeated its "Who can use" cards twice; Command page repeated its ten touchpoints twice | Fixed | Each item appears once |
| 26 | Shield page "The Problem" heading was copied from the Ride page ("Finding an ambulance shouldn't become another emergency") | Fixed | Heading written for the workplace context |
| 27 | Shield Diamond plan said "Covers 4 family members (including the employee)" but the Family Protection section said up to four registered family members per employee | Fixed | One consistent wording: up to 4 family members per employee |
| 28 | Shield plan buttons were inconsistent ("Learn More", "Request Demo", "Learn More") | Fixed | All three say "Request a Demo" |
| 29 | Connect page reused the Police home photo for the incident preview | Fixed | No reused photo |
| 30 | Contact links on product pages went to different places (contact.html vs index.html#page-contact) | Fixed | One Contact section on the home page |
| 31 | Ride booking and partner forms had no way to be saved | Fixed | Both forms post to the backend and are stored |

## Notes
- The original About page could not be read when rebuilding, so the About page is built from the About, Mission, Vision, How It Works and Services content found on the home page.
- The Privacy and Terms pages were written for this rebuild, because the originals are PDF files.
- The "Corporate Materials" PDF list in the original footer (company profile, brochure, government proposal) was left out, since the PDFs could not be rebuilt.
- The Industrial & Manufacturing page is new, written from that card's own text, because the original had no page for it.

Add any further errors you find (Console and Network tabs in DevTools) to this table.
