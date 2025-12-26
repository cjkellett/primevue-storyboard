import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

const MyCustomPreset = definePreset(Aura, {
  primitive: {
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    "dm-ocean": {
      50: "#F2FDFF",
      100: "#D2F1F4",
      200: "#B3EDF5",
      300: "#76D2DF",
      400: "#40C3CD",
      500: "#007A88",
      600: "#0A8B9A",
      700: "#046F7B",
      800: "#045F69",
      900: "#044D55",
      950: "#013A41",
    },
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
  },
});

export default MyCustomPreset;
