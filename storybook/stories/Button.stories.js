import Button from "primevue/button";

export default {
  title: "PrimeVue/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Text to display on the button",
    },
    severity: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "danger"],
      description: "Severity style of the button",
    },
    outlined: {
      control: "boolean",
      description: "Whether the button is outlined",
    },
    text: {
      control: "boolean",
      description: "Whether the button is text only",
    },
    rounded: {
      control: "boolean",
      description: "Whether the button has rounded corners",
    },
    icon: {
      control: "text",
      description: "Icon class to display",
    },
  },
};

export const HelloWorld = {
  args: {
    label: "Hello World",
  },
};

export const Primary = {
  args: {
    label: "Primary Button",
    severity: "primary",
  },
};

export const Outlined = {
  args: {
    label: "Outlined Button",
    severity: "primary",
    outlined: true,
  },
};

export const Text = {
  args: {
    label: "Text Button",
    severity: "primary",
    text: true,
  },
};

export const Rounded = {
  args: {
    label: "Rounded Button",
    severity: "primary",
    rounded: true,
  },
};

