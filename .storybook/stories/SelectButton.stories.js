import SelectButton from "primevue/selectbutton";
import { ref } from "vue";

/**
 * SelectButton is used to choose single or multiple items from a list using buttons.
 *
 * SelectButton displays multiple options as inline buttons, allowing users to select
 * one or more options. It's ideal for view mode toggles, filter selections, and similar use cases.
 *
 * [View PrimeVue SelectButton documentation](https://primevue.org/selectbutton/)
 */
export default {
  title: "PrimeVue/SelectButton",
  component: SelectButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "SelectButton is used to choose single or multiple items from a list using buttons. It displays multiple options as inline buttons, allowing users to select one or more options.",
      },
    },
  },
  argTypes: {
    modelValue: {
      control: "text",
      description: "Value of the component.",
      table: {
        type: { summary: "any" },
        defaultValue: { summary: "-" },
      },
    },
    options: {
      control: "object",
      description:
        "An array of selectitems to display as the available options.",
      table: {
        type: { summary: "any[]" },
        defaultValue: { summary: "-" },
      },
    },
    optionLabel: {
      control: "text",
      description:
        "Property name or getter function to use as the label of an option.",
      table: {
        type: { summary: "string | Function" },
        defaultValue: { summary: "-" },
      },
    },
    optionValue: {
      control: "text",
      description:
        "Property name or getter function to use as the value of an option.",
      table: {
        type: { summary: "string | Function" },
        defaultValue: { summary: "-" },
      },
    },
    multiple: {
      control: "boolean",
      description: "When specified, allows selecting multiple values.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When present, it specifies that the element should be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    allowEmpty: {
      control: "boolean",
      description: "Whether selection can be cleared.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    size: {
      control: "select",
      options: ["small", "large"],
      description: "Defines the size of the component.",
      table: {
        type: { summary: "small | large" },
        defaultValue: { summary: "-" },
      },
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref("One-Way");
      const options = ref(["One-Way", "Return"]);
      return { args, value, options };
    },
    template: `
        <SelectButton v-model="value" :options="options" v-bind="args" />
    `,
  }),
};

export const SelectStyleTabs = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const viewMode = ref("Analysis");
      const viewOptions = ref([
        { icon: "pi pi-chart-bar", label: "Analysis", value: "Analysis" },
        { icon: "pi pi-table", label: "Table View", value: "Table View" },
      ]);
      return { args, viewMode, viewOptions };
    },
    template: `
      <div class="card flex">
        <SelectButton
          v-model="viewMode"
          :options="viewOptions"
          optionLabel="label"
          optionValue="value"
          dataKey="value"
          v-bind="args"
          :allow-empty="false"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.label }}</span>
          </template>
        </SelectButton>
      </div>
    `,
  }),
};
