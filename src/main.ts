import "./assets/main.css";

import { createApp } from "vue";
import App from "./index.vue";
import { createVCodeBlock } from "@wdns/vue-code-block";
import router from "./router/index";

const VCodeBlock = createVCodeBlock({
  // options
});

const app = createApp(App);
app.use(VCodeBlock);

app.use(router);

app.mount("#app");
