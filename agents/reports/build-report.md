# Build Report

**Status:** ❌ FAILED  
**Duration:** 32.91s  
**Timestamp:** 2026-04-18T16:18:00.343Z

## Summary
- Errors: 2
- Build Status: Failed


## Errors
- ⚠️ ESLint: Command failed: npm run lint
- ⚠️ TypeScript Compilation: Command failed: tsc --noEmit
'tsc' is not recognized as an internal or external command,
operable program or batch file.


### ESLint (FAILED)
```
Command failed: npm run lint
```

### TypeScript Compilation (FAILED)
```
Command failed: tsc --noEmit
'tsc' is not recognized as an internal or external command,
operable program or batch file.

```

### Next.js Build
```

> nextjs-app@0.1.0 build
> next build

▲ Next.js 16.2.4 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 6.8s
  Running TypeScript ...
  Finished TypeScript in 5.2s ...
  Collecting page data using 7 workers ...
  Generating static pages using 7 workers (0/8) ...
  Generating static pages using 7 workers (2/8) 
  Generating static pages using 7 workers (4/8) 
  Generating static pages using 7 workers (6/8) 
✓ Generating static pages using 7 workers (8/8) in 592ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /contact
├ ○ /gallery
└ ○ /packages


○  (Static)  prerendered as static content


```

### Dependencies
```
nextjs-app@0.1.0 C:\Users\Lenovo\Desktop\safari makarska\nextjs-app
├── @emnapi/core@1.10.0 extraneous
├── @emnapi/runtime@1.10.0 extraneous
├── @emnapi/wasi-threads@1.2.1 extraneous
├── @napi-rs/wasm-runtime@0.2.12 extraneous
├── @tailwindcss/postcss@4.2.2
├── @tybys/wasm-util@0.10.1 extraneous
├── @types/node@20.19.39
├── @types/react-dom@19.2.3
├── @types/react@19.2.14
├── eslint-config-next@16.2.4
├── eslint@9.39.4
├── framer-motion@12.38.0
├── next@16.2.4
├── react-dom@19.2.4
├── react-hook-form@7.72.1
├── react@19.2.4
├── tailwindcss@4.2.2
└── typescript@5.9.3


```