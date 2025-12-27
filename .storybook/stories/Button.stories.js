import Button from "primevue/button";

/**
 * Button is an extension to standard input element with icons and theming.
 *
 * The Button component provides various styling options including severity levels,
 * variants (outlined, text, link), sizes, icons, badges, and loading states.
 *
 * [View PrimeVue Button documentation](https://primevue.org/button/)
 */
export default {
  title: "PrimeVue/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Button is an extension to standard input element with icons and theming. It provides various styling options including severity levels, variants, sizes, icons, badges, and loading states.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Text of the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
    icon: {
      control: "text",
      description: "Name of the icon (e.g., 'pi pi-check').",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
    iconPos: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "Position of the icon.",
      table: {
        type: { summary: "left | right | top | bottom" },
        defaultValue: { summary: "left" },
      },
    },
    severity: {
      control: "select",
      options: [
        "secondary",
        "success",
        "info",
        "warn",
        "danger",
        "help",
        "contrast",
      ],
      description: "Defines the style of the button. Default is primary.",
      table: {
        type: {
          summary:
            "secondary | success | info | warn | danger | help | contrast",
        },
        defaultValue: { summary: "-" },
      },
    },
    variant: {
      control: "select",
      options: ["outlined", "text", "link"],
      description: "Specifies the variant of the component.",
      table: {
        type: { summary: "outlined | text | link" },
        defaultValue: { summary: "undefined" },
      },
    },
    size: {
      control: "select",
      options: ["small", "large"],
      description: "Defines the size of the button. Default is normal.",
      table: {
        type: { summary: "small | large" },
        defaultValue: { summary: "-" },
      },
    },
    raised: {
      control: "boolean",
      description: "Add a shadow to indicate elevation.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    rounded: {
      control: "boolean",
      description: "Add a circular border radius to the button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    text: {
      control: "boolean",
      description:
        "Add a textual class to the button without a background initially. (Deprecated: use variant='text' instead)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    outlined: {
      control: "boolean",
      description:
        "Add a border class without a background initially. (Deprecated: use variant='outlined' instead)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When present, it specifies that the button should be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: "boolean",
      description: "Whether the button is in loading state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loadingIcon: {
      control: "text",
      description: "Icon to display in loading state.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
    badge: {
      control: "text",
      description: "Value of the badge.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
    },
    badgeSeverity: {
      control: "select",
      options: ["secondary", "info", "success", "warn", "danger", "contrast"],
      description: "Severity type of the badge.",
      table: {
        type: {
          summary: "secondary | info | success | warn | danger | contrast",
        },
        defaultValue: { summary: "-" },
      },
    },
    link: {
      control: "boolean",
      description:
        "Add a link style to the button. (Deprecated: use variant='link' instead)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fluid: {
      control: "boolean",
      description: "Spans 100% width of the container when enabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "null" },
      },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Type of the button.",
      table: {
        type: { summary: "button | submit | reset" },
        defaultValue: { summary: "button" },
      },
    },
  },
};

/**
 * Interactive button with all controls.
 * Use the controls panel to explore all button options.
 */
export const Default = {
  args: {
    label: "Button",
    icon: "",
    iconPos: "left",
    severity: undefined,
    variant: undefined,
    size: undefined,
    raised: false,
    rounded: false,
    disabled: false,
    loading: false,
    loadingIcon: "",
    badge: "",
    badgeSeverity: undefined,
    fluid: false,
    type: "button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel below to explore all button options. You can change the label, add icons, modify severity, variant, size, and more.",
      },
    },
  },
};

/**
 * Buttons with tooltips showing different positions and configurations.
 * Hover over each button to see the tooltip.
 */
export const WithTooltip = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; align-items: center;">
        <p style="text-align: center; color: #666; max-width: 600px;">
          Buttons can be enhanced with tooltips using the <code>v-tooltip</code> directive. Tooltips can be positioned at top or bottom. Hover over each button to see the tooltip in action.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <Button 
            v-tooltip.top="'Tooltip on top'"
            label="Top Tooltip"
          />
          <Button 
            v-tooltip.bottom="'Tooltip on bottom'"
            label="Bottom Tooltip"
          />
        </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons can be enhanced with tooltips using the `v-tooltip` directive. Hover over each button to see the tooltip in action.",
      },
    },
  },
};
