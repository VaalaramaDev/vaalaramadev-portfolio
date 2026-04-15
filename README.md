# vaalaramadev-portfolio

Minimalist bilingual portfolio built with Next.js 14 App Router, TypeScript, Tailwind CSS, `next-intl`, and Framer Motion.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl
- Framer Motion
- Heroicons

## Project Structure

```text
app/
  [locale]/
    layout.tsx
    page.tsx
    projects/[slug]/page.tsx
  globals.css
components/
  About.tsx
  Contact.tsx
  Hero.tsx
  Nav.tsx
  ProjectCard.tsx
  Projects.tsx
  Skills.tsx
data/
  projects.ts
messages/
  en.json
  ru.json
public/
  og-image.png
i18n.ts
middleware.ts
next.config.js
tailwind.config.ts
```

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The middleware redirects `/` to `/en`.

## Adding a New Project

Edit [data/projects.ts](/D:/dev/VaalaramaDev/vaalaramadev-portfolio/data/projects.ts) and add a new object to the `projects` array.

Each project should include:

- `slug`
- `title`
- `category`
- `githubUrl`
- `stack`
- `description.en` and `description.ru`
- `longDescription.en` and `longDescription.ru`

Project pages are statically generated through `generateStaticParams`.

## i18n

Translations live in:

- [messages/en.json](/D:/dev/VaalaramaDev/vaalaramadev-portfolio/messages/en.json)
- [messages/ru.json](/D:/dev/VaalaramaDev/vaalaramadev-portfolio/messages/ru.json)

To add more translated UI copy, extend both files with matching keys and read them via `useTranslations` or `getTranslations`.

## Deployment

### Vercel

- Import the repository into Vercel
- Run the default `npm install` and `npm run build`
- Deploy

### VPS

- Install Node.js 18.17+ or newer
- Run `npm install`
- Run `npm run build`
- Start with `npm run start`
- Put Nginx or Caddy in front as a reverse proxy
