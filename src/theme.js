import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

const MyCustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#fffde7",
      100: "#fff9c4",
      200: "#fff59d",
      300: "#fff176",
      400: "#ffee58",
      500: "#a78bfa", // Main primary color (light purple)
      600: "#fdd835",
      700: "#fbc02d",
      800: "#f9a825",
      900: "#f57f17",
      950: "#f57f17",
    },
  },
});

export default MyCustomPreset;
