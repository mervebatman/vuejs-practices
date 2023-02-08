<template>
  <small class="mt-2 d-flex justify-content-end green">{{ todoItem }} adet ToDo vardır.</small>
</template>

<script>
export default {
  props: ['todoItem'],
}
</script>