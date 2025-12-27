<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
</script>

<template>
  <div class="container">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Home</Tab>
        <Tab value="1">About</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <h1>Home</h1>
          <p>Welcome to the Home page!</p>
        </TabPanel>
        <TabPanel value="1">
          <h1>About</h1>
          <p>This is the About page.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

h1 {
  margin: 0 0 1rem 0;
}
</style>
