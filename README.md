# Nitin Kumar Rajvanshi — Portfolio

A single-page developer portfolio: Home / About / Projects / Contact.
Plain HTML, CSS, and JavaScript — **no build step, no framework required.**

```
portfolio/
├── index.html      ← page structure & content
├── style.css        ← all styling (colors, fonts, layout — edit tokens at top)
├── script.js         ← mobile menu, footer year, contact form
└── resume.pdf         ← add your own resume here (referenced by the "Download résumé" button)
```

---

## 1. Preview it locally

You don't need Node.js or any tooling for this — it's static HTML.

**Easiest way:** double-click `index.html` and it opens in your browser.

**Better way (avoids some browser quirks):** run a tiny local server.

```bash
# if you have Python 3 installed
cd portfolio
python3 -m http.server 5500
# then open http://localhost:5500
```

Or, in VS Code, install the **Live Server** extension, right-click `index.html` → "Open with Live Server".

---

## 2. Customize your content

Everything is in plain HTML/CSS, so you can search-and-replace directly. Your name, email, phone, location, GitHub/LinkedIn links, and the three project write-ups
(Web Vulnerability Scanner, FedSecure-IoT, LiverGuard) are already filled in from your résumé.
Still worth checking:

| Item | Where | Note |
|---|---|---|
| `https://github.com/NitinRajvanshi` on the two project cards | `index.html`, Projects section | Point each link at the **specific repo**, not just your profile |
| `resume.pdf` | project root | Add your actual résumé PDF with this filename (or update the `href` in the hero's "Download résumé" button) |
| Project descriptions | `index.html`, Projects section | Trim/adjust if you want a shorter blurb than the résumé bullet points |
| Certifications card | `index.html`, About section | Add the Jan 2024 IIT (BHU) Quantum Communication & ML course if you'd like both certifications listed |

**Colors / fonts:** open `style.css` and edit the `:root` block at the top — every color and font in the site is driven from those variables, so changing `--accent-2` (currently violet) changes it everywhere at once.

**Add a real photo:** drop an image (e.g. `avatar.jpg`) into the folder and add an `<img>` tag wherever you'd like it — e.g. inside `.hero-copy` or `.about-text`.

---

## 3. Make the contact form actually send email

Right now, submitting the form opens the visitor's email app with a pre-filled message (works everywhere, zero setup, but relies on them having an email client configured).

To receive submissions directly without a mail client, use a free form backend — no server code needed:

1. Go to [formspree.io](https://formspree.io) and create a free account + new form. You'll get an endpoint like `https://formspree.io/f/xxxxxxx`.
2. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xxxxxxx" method="POST">
   ```
3. In `script.js`, delete the `form.addEventListener('submit', ...)` block entirely — Formspree handles the submission natively once the `action`/`method` are set.

---

## 4. Put it on GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
gh repo create your-username/portfolio --public --source=. --push
```

(No GitHub CLI? Create an empty repo at github.com/new, then:)
```bash
git remote add origin https://github.com/your-username/portfolio.git
git branch -M main
git push -u origin main
```

---

## 5. Deploy — Vercel (recommended, matches the `yourname.vercel.app` style)

**Option A — via website (no CLI):**
1. Go to [vercel.com](https://vercel.com) → sign up/log in with GitHub.
2. Click **Add New → Project**.
3. Select your `portfolio` repo → since this is plain HTML/CSS/JS, leave the framework preset as **Other** and click **Deploy**.
4. You'll get a live URL like `portfolio-yourname.vercel.app` in under a minute. You can rename the project (and the subdomain) in the Vercel project settings.

**Option B — via CLI:**
```bash
npm install -g vercel
cd portfolio
vercel login
vercel --prod
```

## Alternative deploy targets (all free, all work with this exact folder)

- **Netlify:** drag-and-drop the `portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) — instant live URL.
- **GitHub Pages:** in your repo, go to Settings → Pages → Source: `main` branch, root folder → Save. Live at `your-username.github.io/portfolio`.
- **Cloudflare Pages:** connect the GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com), no build command needed.

---

## 6. Custom domain (optional)

Once deployed on Vercel/Netlify, go to the project's **Domains** settings, add your domain (e.g. `yourname.dev`, buyable on Namecheap/Google Domains/Porkbun), and follow the DNS instructions shown — usually a CNAME record pointing at the host.

---

## Notes
- The hero and skills panels are styled as a "code editor" / "terminal" — this is the site's own visual signature, not copied from any other site.
- Fully responsive down to mobile, with visible keyboard focus states and `prefers-reduced-motion` respected.
- No tracking, no analytics, no external JS beyond Google Fonts + Font Awesome icons (both loaded from CDN).
