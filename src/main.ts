import "./assets/main.css";

import { createApp } from "vue";
import App from "./index.vue";
import router from "./router";
import { createVCodeBlock } from "@wdns/vue-code-block";

const VCodeBlock = createVCodeBlock({
  // options
});

const app = createApp(App);
app.use(VCodeBlock);

app.use(router);

app.mount("#app");
