<script setup>
import Button from "primevue/button";
</script>

<template>
  <div class="container">
    <h1>Hello World</h1>
    <Button v-tooltip.top="'Hello World'" label="Hello World" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 2rem;
}

h1 {
  margin: 0;
}
</style>
