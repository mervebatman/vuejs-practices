<template>
  <div class="container">
    {{ $store.state.user }}
    {{ $store.state.permissions }}
    <!-- <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">
        {{ permission }}
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{ user }}
      </li>
    </ul> -->

    <ul>
      <li v-for="(item, index) in $store.getters.woodItems" :key="index">
        {{ item.title }}
      </li>
    </ul>
    {{ $store.state.fullName }}

    <button @click="updateName">FullName bilgisini güncelle</button>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$store.state.person);
    // console.log(this.$store.state.itemList.filter((i) => i.type === "mobilya"));
    console.log(this.$store.getters.woodItems);
    console.log(this.$store.getters.activeUser);
  },
  methods: {
    updateName() {
      this.$store.state.itemList.push({ id: 6, title: "Raf", type: "mobilya" });
      this.$store.state.fullName = new Date().getTime();
    },
  },
};
</script>

<style></style>
