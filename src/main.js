import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import MyCustomPreset from "./theme";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: MyCustomPreset,
  },
});

app.directive("tooltip", Tooltip);

app.mount("#app");
