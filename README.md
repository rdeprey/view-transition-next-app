# View Transition API + React 19 RC + Next.js 15

This app is a small lab that shows three ways to use the View Transition API:

1. **Route-level transitions** using the Next.js app router.
2. **Shared element transitions** between a gallery page and a photo detail page.
3. **Manual `document.startViewTransition()`** wrapped around a React state update.

It uses React 19.0.0-rc-de68d2f4-20241204 and Next.js 15 with the
`experimental.viewTransition` flag enabled.

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
```
