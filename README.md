# Clikkle

Clikkle is a static Next.js marketing frontend inspired by the structure and polish of appwrite.io, reworked as an original brand and content system.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Pages

- `/`
- `/products`
- `/pricing`
- `/features`
- `/docs`
- `/about`
- `/contact`

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

The app is configured with `output: "export"` in `next.config.ts`, so the build is ready for static hosting.

## Structure

- `app/` route pages and global styles
- `components/` shared layout, section, and animation components
- `lib/site-data.ts` centralized navigation, feature, pricing, and content data
- `reference/` original PDF brief from the project request

## Notes

- The visual language mirrors Appwrite's layout rhythm: sticky header, glass cards, gradients, metrics, product showcases, pricing, docs, and CTA sections.
- Content is original and branded as Clikkle so it can be swapped later without rewriting the component system.
