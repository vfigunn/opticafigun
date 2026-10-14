# AGENTS.md - Óptica Figún Development Guide

## Project Overview

A Vite + React 18 + TypeScript optical shop website with Tailwind CSS, shadcn/ui components, and React Router.

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production + prerender every route to static HTML + generate `sitemap.xml` |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint on entire codebase |
| `npm run preview` | Preview production build |

**Note**: This project has no test suite configured.

## Code Style Guidelines

### TypeScript

- Use explicit types for function parameters and return values when not obvious
- Use `interface` for object shapes, `type` for unions/intersections
- Disable strict checks in tsconfig (noImplicitAny, strictNullChecks disabled)

### Imports

- Use path alias `@/` for src-relative imports (e.g., `@/components/ui/button`)
- Order: external libs → internal components → local files
- Group imports: React imports, UI components, hooks, utilities

```tsx
import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
```

### Components

- Use PascalCase for component names (e.g., `ContactForm`, `ServiceCard`)
- Use functional components with arrow functions or `function` declarations
- Use `React.forwardRef` for components that need ref forwarding
- DisplayName required for forwarded ref components

```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <Comp className={cn(buttonVariants({ variant, size }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

### Styling (Tailwind + shadcn/ui)

- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes
- Use CVA (class-variance-authority) for component variants
- Follow shadcn/ui patterns: define variants, use `defaultVariants`

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center justify-center...', {
  variants: {
    variant: { default: '...', destructive: '...' },
    size: { default: '...', sm: '...' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});
```

### Naming Conventions

- Files: `PascalCase.tsx` for components, `camelCase.ts` for utilities
- Variables/functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- React components: `PascalCase`

### Error Handling

- Use try/catch for async operations
- Display errors via toast notifications (use Sonner or custom toast)
- Handle form validation with Zod + react-hook-form

### State Management

- Use React `useState` for local state
- Use TanStack Query (`@tanstack/react-query`) for server state
- Use React Router for navigation

### Form Handling

- Use `react-hook-form` with Zod resolvers
- Follow patterns from `@/components/forms/`
- The contact form does not post to a server: it builds a message and opens WhatsApp

### Routing

- Use `react-router-dom` with `BrowserRouter`
- Define routes in `AppContent` (`App.tsx`); it is shared with the prerender (`src/entry-server.tsx`, `StaticRouter`)
- Every page wraps its content in `<Layout>` (Navbar, Footer, floating WhatsApp button, scroll-to-top)
- Every page renders `<Seo title description path jsonLd? />` (`@/components/seo/Seo`). Do not set `document.title` manually

### SEO & prerendering

- `npm run build` runs `vite build`, then `vite build --ssr src/entry-server.tsx`, then `scripts/prerender.mjs`, which writes one HTML file per route in `PRERENDER_ROUTES` (plus `404.html`) and `dist/sitemap.xml`
- `index.html` must keep the `<!--seo-head-->...<!--/seo-head-->` block and `<div id="root"></div>`
- Code that runs during render must work in Node (no `window`/`document` outside `useEffect`) and must render the same on server and client (hydration)
- JSON-LD builders live in `@/lib/seo` (`breadcrumbSchema`, `faqSchema`, `serviceSchema`); the `Optician` schema is added to every page automatically
- Vercel serves the static files with `cleanUrls`; unknown URLs return `404.html` with a real 404 status

### Business data & WhatsApp

- Name, address, phone, hours and social links live only in `@/lib/business` (`BUSINESS`). Never hardcode them: Google compares them with the Business Profile
- WhatsApp links: `<WhatsAppButton message={...} />` (`@/components/ui/WhatsAppButton`) or `buildWhatsAppUrl(message)`. Default message: `WHATSAPP_DEFAULT_MESSAGE`; per-topic: `buildWhatsAppMessage('lentes de sol')`
- Service pages are generated from `SERVICES` in `@/data/services` (`/servicios/:slug`); adding an entry there adds the page, the card, the footer link and the sitemap URL

### ESLint Rules

- Extends: ESLint recommended + TypeScript ESLint recommended
- React hooks rules enabled
- `react-refresh/only-export-components`: warn (allow constant exports)
- `@typescript-eslint/no-unused-vars`: off

## Project Structure

```
scripts/
└── prerender.mjs     # Post-build: static HTML per route + sitemap.xml
src/
├── components/
│   ├── contact/      # ContactDetails, MapEmbed
│   ├── forms/        # Form components (ContactForm, etc.)
│   ├── home/         # Home page sections (also reused by other pages)
│   ├── layout/       # Layout, Navbar, Footer, PageHeader, FloatingWhatsApp
│   ├── seo/          # Seo component
│   └── ui/           # shadcn/ui components + WhatsAppButton, FaqList, ServiceCard
├── data/             # Content: services.ts (service pages), faqs.ts
├── hooks/            # Custom React hooks
├── lib/              # utils.ts, business.ts (NAP + WhatsApp), seo.ts (head + JSON-LD)
├── pages/            # Route pages (Index, Services, ServiceDetail, About, Contact, NotFound)
├── App.tsx           # Routes (AppContent) + BrowserRouter
├── entry-server.tsx  # Prerender entry: render(url) + PRERENDER_ROUTES
├── main.tsx          # Entry point (hydrates prerendered HTML)
└── index.css         # Global styles + Tailwind
```

## Key Dependencies

- React 18 + React Router DOM 6
- Tailwind CSS 3 + shadcn/ui components
- TanStack React Query v5
- React Hook Form + Zod
- Lucide React (icons)
- Recharts (charts)

## Common Patterns

### Adding a new page

1. Create `src/pages/PageName.tsx`, wrap it in `<Layout>` and render `<Seo ... />` with a unique title/description
2. Import in `App.tsx` and add the `Route` inside `AppContent`
3. Add the path to `PRERENDER_ROUTES` in `src/entry-server.tsx` (this also adds it to the sitemap)

### Adding a new UI component

1. Create in `src/components/ui/ComponentName.tsx`
2. Use CVA for variants, export component + variants
3. Import using `@/components/ui/ComponentName`

### Using the cn utility

```tsx
import { cn } from '@/lib/utils';

// In component render:
<div className={cn('base-classes', condition && 'conditional-class', className)} />
```