import { createApp } from 'vue';
import "@/styles.css";

import uis from '@/uis';
import App from '@/App.vue';

let app = createApp(App);

uis.forEach((component) => {
    app.component(component.name, component);
});

app.mount("#app");