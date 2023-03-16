<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent = 'Red'">Red</button>
      <button class="green" @click="activeComponent = 'Green'">Green</button>
      <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
    </div>

    <!-- <Red class="mb-2" v-if="activeComponent === 'Red'" />
    <Green class="mb-2" v-if="activeComponent === 'Green'" />
    <Blue class="mb-2" v-if="activeComponent === 'Blue'" /> -->

    {{ activeComponent }}
    <keep-alive>
      <component :is="activeComponent" msg="Red Component">
        <h3 class="bg-green text-white">Green Component</h3>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Red from "./components/RedComponent.vue";
import Green from "./components/GreenComponent.vue";
import Blue from "./components/BlueComponent.vue";

export default {
  components: {
    Red,
    Green,
    Blue,
  },
  data() {
    return {
      activeComponent: "Red",
    };
  },
};
</script>
