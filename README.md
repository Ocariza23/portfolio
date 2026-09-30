# Mary Jane Ocariza — Portfolio

A single-page developer portfolio built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Editing your content

Almost everything on the page — name, tagline, skills, experience, projects,
stats, and contact links — lives in one file:

```
src/data/config.js
```

Edit that file and the whole site updates. You shouldn't need to touch
anything inside `src/components/` unless you want to change layout or
behavior.

### Swapping in real projects

The `projects` array in `config.js` has 3 placeholder entries clearly marked
— replace `name`, `description`, `tags`, `github`, and `demo` with your own.
Leave `github`/`demo` as an empty string `''` to hide that link on the card.

### Wiring up the contact form

The contact form in `src/components/Contact.jsx` currently just shows a
confirmation message on submit. To actually receive messages, connect it to
a form backend such as Formspree, Resend, or your own API endpoint inside
the `handleSubmit` function.

## Structure

```
src/
  data/config.js       ← all editable content
  components/          ← one component per section
  index.css            ← design tokens + all styling
  App.jsx              ← assembles the page
```
