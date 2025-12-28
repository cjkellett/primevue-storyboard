import { dmOceanColors } from './colors.js';

/**
 * Generates Tailwind theme CSS from shared color definitions
 */
export function generateTailwindThemeCSS() {
  const shades = Object.keys(dmOceanColors);
  
  let css = ':root {\n';
  shades.forEach(shade => {
    const color = dmOceanColors[shade].toLowerCase();
    css += `  --dm-ocean-${shade}: ${color};\n`;
  });
  css += '}\n\n@theme {\n';
  shades.forEach(shade => {
    css += `  --color-primary-${shade}: var(--dm-ocean-${shade});\n`;
  });
  css += '}';
  
  return css;
}

