<template>
  <ul>
    <TodoListItem v-for="todoItem in provideData.todoList" :key="todoItem.id" :item="todoItem"/>
  </ul>
</template>

<script>
    import TodoListItem from "@/components/TodoListItem.vue";
    export default {
        // Propsun array syntax'ı
        //props: ["myData"],
        inject: ["provideData"],
        //Propsun obje syntax'ı şeklinde yazımı
        // props: {
        //     myData: {
        //         type: String,
        //         required: false,
        //         default: ""
        //     }
        // },
        // data() {
        //     return {
        //         myData: "",
        //     }
        // },
        components: {
            TodoListItem,
        },
    };
</script>