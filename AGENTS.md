# AGENTS.md - Óptica Figún Development Guide

## Project Overview

A Vite + React 18 + TypeScript optical shop website with Tailwind CSS, shadcn/ui components, and React Router.

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production |
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

### Routing

- Use `react-router-dom` with `BrowserRouter`
- Define routes in `App.tsx`
- Use `useEffect` in page components to set document title

### ESLint Rules

- Extends: ESLint recommended + TypeScript ESLint recommended
- React hooks rules enabled
- `react-refresh/only-export-components`: warn (allow constant exports)
- `@typescript-eslint/no-unused-vars`: off

## Project Structure

```
src/
├── components/
│   ├── forms/        # Form components (ContactForm, etc.)
│   ├── home/         # Home page specific components
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── ui/           # shadcn/ui components
├── hooks/            # Custom React hooks
├── lib/              # Utilities (utils.ts, api clients)
├── pages/            # Route pages (Index, About, Contact, NotFound)
├── App.tsx           # Main app with routes
├── main.tsx          # Entry point
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

1. Create `src/pages/PageName.tsx`
2. Import in `App.tsx` and add Route
3. Use `useEffect` to set document title

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