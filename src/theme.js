import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import { dmOceanColors } from "./colors.js";

const MyCustomPreset = definePreset(Aura, {
  primitive: {
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
    },
    spacing: {
      0: "0",
      50: "2px",
      100: "4px",
      150: "6px",
      200: "8px",
      300: "12px",
      400: "16px",
      600: "24px",
      800: "32px",
      1000: "40px",
      1200: "48px",
      1600: "64px",
    },
    "dm-ocean": dmOceanColors,
  },
  semantic: {
    primary: {
      50: "{dm-ocean.50}",
      100: "{dm-ocean.100}",
      200: "{dm-ocean.200}",
      300: "{dm-ocean.300}",
      400: "{dm-ocean.400}",
      500: "{dm-ocean.500}",
      600: "{dm-ocean.600}",
      700: "{dm-ocean.700}",
      800: "{dm-ocean.800}",
      900: "{dm-ocean.900}",
      950: "{dm-ocean.950}",
    },
  },
  components: {
    button: {
      root: {
        label: {
          fontWeight: "{fontWeight.semibold}",
        },
        focusRing: {
          width: "2px",
        },
      },
    },
    togglebutton: {
      root: {
        padding: "{spacing.50}",
        borderRadius: "{borderRadius.none}",
        fontWeight: "{fontWeight.semibold}",
      },
      content: {
        padding: "{spacing.150} {spacing.300}",
        borderRadius: "{borderRadius.sm}",
        checkedShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
      },
    },
    tabs: {
      tab: {
        borderWidth: "0 0 2px 0",
        activeBorderColor: "{dm-ocean-500}",
        activeColor: "{dm-ocean-900}",
        padding: "8px 12px",
        fontWeight: 600,
        gap: "4px",
      },
      css: `
        .p-tabs button[role="tab"] {
          font-size: 16px;
        }
      `,
    },
  },
});

export default MyCustomPreset;
