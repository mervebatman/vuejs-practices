<template>
<div class="container">
  <h3 class="text-center">ToDo App</h3>
  <hr class="my-2">
  <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo"/>
  <ListSection />
</div>

</template>

<script>
import AddSection from "@/components/AddSection.vue";
import ListSection from "@/components/ListSection.vue";

export default {
  components: {
    AddSection,
    ListSection,
    // TodoList,
    // ResultBar,
  },
  created() {
    // setTimeout(() => {
    //   this.todoList = [
    //     {id: 1, text: "Vue.js Ders 2"},
    //     {id: 2, text: "Vue.js Ders 2.1"},
    //     {id: 3, text: "Vue.js Ders 2.2"},
    //     {id: 4, text: "Vue.js Ders 2.3"},
    //     {id: 5, text: "Vue.js Ders 2.4"},
    //     {id: 6, text: "Vue.js Ders 2.5"},
    //   ];
    // }, 2000);   
  },
  data() {
    return {
     provideData: {
      todoList: [
        {id: 1, text: "Vue.js Ders 2"},
        {id: 2, text: "Vue.js Ders 2.1"},
        {id: 3, text: "Vue.js Ders 2.2"},
        {id: 4, text: "Vue.js Ders 2.3"},
        {id: 5, text: "Vue.js Ders 2.4"},
        {id: 6, text: "Vue.js Ders 2.5"},
      ],
     }
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem,
    }
  },
  methods: {
    deleteItem(todoItem) {
      this.provideData.todoList = this.provideData.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(todo) {
      console.log("event", todo);
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo
      });
    }
  }
}
</script>