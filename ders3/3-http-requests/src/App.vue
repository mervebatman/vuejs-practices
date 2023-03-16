<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul v-if="itemsList.length > 0">
      <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
        <button class="sm red" @click="onDelete(item)">Sil</button>
      </li>
    </ul>

    <div v-else class="bg-blue text-white">Herhangi bir ürün bulunamamıştır.</div>
    <small class="mt-2 text-red d-flex justify-content-end align-items-center">{{ itemCount }} adet alınacak ürün vardır.</small>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      itemsList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((item_response) => {
      console.log("items_response :>>", item_response);
      this.itemsList = item_response.data || [];
      console.log("this.itemList :>>", item_response);
    });
  },
  methods: {
    onSave(e) {
      //   // alert(e.target.value);
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios.post("http://localhost:3000/items", saveObject).then((save_response) => {
        console.log(save_response);
        this.itemsList.push(save_response.data);
        e.target.value = "";
        e.target.focus();
      });
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then((delete_response) => {
        console.log(delete_response);
        this.itemsList = this.itemsList.filter((i) => i.id !== item.id);
      });
    },
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    },
  },
};
</script>
