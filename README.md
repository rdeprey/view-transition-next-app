# View Transition API + React 19 + Next.js 16

This app is a small lab that shows four ways to use the View Transition API:

1. **Route-level transitions** using the Next.js app router.
2. **Shared element transitions** between a gallery page and a photo detail page.
3. **Manual `document.startViewTransition()`** wrapped around a React state update.
4. **Cross-document (MPA) transitions** using `@view-transition { navigation: auto }` in CSS.

It uses React 19.0.0 and Next.js 16.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`:

- `/` — overview
- `/gallery` — route-level + shared element transitions
- `/photo/[id]` — detail page for a given photo
- `/manual` — manual View Transition API example
- `/mpa` — cross-document view transitions (MPA style with regular links)
