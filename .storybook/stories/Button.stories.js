import Button from "primevue/button";

export default {
  title: "PrimeVue/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "PrimeVue Button component. [View PrimeVue Button documentation](https://primevue.org/button/)",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    severity: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "danger"],
    },
    outlined: { control: "boolean" },
    text: { control: "boolean" },
    rounded: { control: "boolean" },
  },
};

export const Default = {
  args: {
    label: "Button",
  },
};
