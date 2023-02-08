const app = Vue.createApp({
  data() {
    return {};
  },
});
app.component("counter-item", {
  data() {
    return {
      counter: 0,
    };
  },
  // String tepmlate component türü kullanımı
  template: `
  <div class="container-sm">
    <h3 class="mb-2">{{ counter }}</h3>
    <button class="red sm" @click="counter--">-</button>
    <button class="green sm" @click="counter++">+</button>
  </div>
  `
});
app.mount("#app");