<script setup>
import { ref } from "vue";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import SelectButton from "primevue/selectbutton";

const viewMode = ref("Analysis");
const viewOptions = [
  { icon: "pi pi-chart-line", label: "Analysis", value: "Analysis" },
  { icon: "pi pi-table", label: "Table View", value: "Table View" },
];
</script>

<template>
  <div class="p-8 mx-auto max-w-7xl min-h-screen">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Home</Tab>
        <Tab value="1">About</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <h1 class="text-primary-500">Home</h1>
          <p class="mb-8">This is the Home page.</p>
          <SelectButton
            v-model="viewMode"
            :options="viewOptions"
            optionLabel="label"
            optionValue="value"
            dataKey="value"
            class="mb-4"
            :allow-empty="false"
          >
            <template #option="slotProps">
              <i :class="slotProps.option.icon"></i>
              <span>{{ slotProps.option.label }}</span>
            </template>
          </SelectButton>
          <div v-if="viewMode === 'Analysis'">
            <p>Analysis content goes here.</p>
          </div>
          <div v-if="viewMode === 'Table View'">
            <p>Table View content goes here.</p>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <h1>About</h1>
          <p>This is the About page.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>
