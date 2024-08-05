# Turborepo Nextjs Tailwind CSS Storybook starter

## What's inside?

This Turborepo includes the following

### Apps and Packages

- `storybook`: a [Storybook](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `storybook` applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Shared UI

The UI library uses a styling solution similar to [shadcn](https://ui.shadcn.com/docs/installation/manual). To configure it
Please checkout the following files.

- `packages/themes`: css theme
- `packages/ui`: read me
- `web`: `tailwind.config.ts`, `package.json`, `globals.css`, `next.config.js`

#### Shadcn

If you want to add components from [shadcn](https://ui.shadcn.com/). Go to their manual install [page](https://ui.shadcn.com/docs/installation/manual).

1. Add Tailwind CSS

   Already installated can skip this step.

2. Add dependencies

   Add tailwind dependencies to our tailwind config. The rest are already installed

   ```sh
   pnpm add tailwindcss-animate -D --filter=config-tailwind
   ```

3. Add icon library

   ```sh
    pnpm add @radix-ui/react-icons -D --filter=ui
   ```

4. Configure path aliases

   Update `packages/ui/tsconfig.json` to

   ```json
   {
     "extends": "@repo/typescript-config/react-library.json",
     "include": ["."],
     "exclude": ["dist", "build", "node_modules"],
     "compilerOptions": {
       "baseUrl": "src/",
       "paths": {
         "@/*": ["./*"]
       }
     }
   }
   ```

5. Configure tailwind.config.js

   Update `packages/config-tailwind/tailwind.config.ts` to shadcn's config.

6. Configure styles

   Add css variables to our theme config in `packages/themes/default.css`.

7. Add a cn helper

   `cn` helper is in our internal package `packages/utils`

8. That's it!

   When adding components please use `manual` installation methods.
   Then replace import statements to match.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
