<template>
  <ListSection />
  <AddSection />
</template>

<script>
import ListSection from "@/components/ListSection.vue";
import AddSection from "@/components/AddSection.vue";

export default {
  components: {
    ListSection,
    AddSection,
  },
  // props: ["userList"],
  // emits: ["new-item"], //Daha iyi bir kod yazma deneyimi açısında eklemey, unutma ama opsiyonel
};
</script>
