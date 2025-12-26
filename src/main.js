import { createApp } from "vue";
import PrimeVue from "primevue/config";
import MyCustomPreset from "./theme";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: MyCustomPreset,
  },
});

app.mount("#app");
