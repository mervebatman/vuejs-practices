<template>
    <div class="container-sm">
        <h3 class="mb-2">{{ counter }}</h3>
        <button class="red sm" @click="counter--">-</button>
        <button class="green sm" @click="counter++">+</button>
      </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
}
</script>