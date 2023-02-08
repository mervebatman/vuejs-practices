import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css";
import appHeader from "@/components/appHeader";

const app = createApp(App);

app.component("appHeader", appHeader);

app.mount('#app')
