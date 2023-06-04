import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
  IoAlbumsSharp,
  BiNewspaper,
  FaUserCircle,
  BiLinkedin,
  MdEmailOutlined,
} from "oh-vue-icons/icons";

addIcons(IoAlbumsSharp, BiNewspaper, FaUserCircle, BiLinkedin, MdEmailOutlined);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router);

app.mount("#app");
