<template>
  <div class="container">
    <UserSection />
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";

export default {
  data() {
    return {
      // userData: null,
      provideData: {
        userList: ["Tayfun", "Gökhan", "Defne", "Handan", "Aslı"],
      },
    };
  },
  components: {
    UserSection,
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    },
  },
  // provide() {
  //   return {
  //     userList: this.provideData.userList,
  //     newItem: this.newItem,
  //   };
  // },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem,
    };
  },
};
</script>
