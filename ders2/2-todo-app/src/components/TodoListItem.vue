<template>
    <li class="d-flex justify-content-between align-items-center">
        <span>{{ item.text }}</span>
        <button @click="deleteItem(item)" class="sm red">X</button>
    </li> 
</template>

<script>
export default {
    props: ["item"],
    inject: ["deleteItem"],
};
</script>