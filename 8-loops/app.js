const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue.js Bootcamp Ders 1", completed: false, },
        { id: 2, text: "Vue.js Bootcamp Ders 2", completed: false, },
        { id: 3, text: "Vue.js Bootcamp Ders 3", completed: false, },
        { id: 4, text: "Vue.js Bootcamp Ders 4", completed: false, },
        { id: 5, text: "Vue.js Bootcamp Ders 5", completed: false, },
        { id: 6, text: "Vue.js Bootcamp Ders 6", completed: false, },
        { id: 7, text: "Vue.js Bootcamp Ders 7", completed: false, },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter(todo => todo !== todoItem)
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    uncompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");