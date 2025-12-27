# Storyboard PrimeVue

A Vue 3 + Vite project with PrimeVue component library and Storybook for interactive component documentation.

## Features

- **PrimeVue 4** component library with custom Aura theme
- **Storybook** for component documentation and testing
- **Titillium Web** as the base font family
- **PrimeIcons** for icon support

## Scripts

- `npm run dev` - Start development server
- `npm run storybook` - Start Storybook (port 6006)
- `npm run build-storybook` - Build Storybook for production

## Theme Configuration

To ensure the app and Storybook use the same custom theme:

1. **Define your theme once** in `src/theme.js` using PrimeVue's `definePreset()`
2. **Import in your app** (`src/main.js`):
   ```js
   import MyCustomPreset from "./theme";
   app.use(PrimeVue, { theme: { preset: MyCustomPreset } });
   ```
3. **Import in Storybook** (`.storybook/preview.js`):
   ```js
   import MyCustomPreset from "../src/theme";
   setup((app) => {
     app.use(PrimeVue, { theme: { preset: MyCustomPreset } });
   });
   ```

Both environments import the same theme file, ensuring consistency. Update `src/theme.js` to modify the theme for both app and Storybook.
