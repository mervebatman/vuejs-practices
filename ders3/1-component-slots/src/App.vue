<template>
  <!-- <MdlComponent :onSave="onSave" :title="'Modal Başlığı Değişti'" :content="content" /> -->
  <MdlComponent>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    <template v-slot:content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nobis similique voluptas vitae, provident excepturi saepe sequi quas maiores omnis eaque numquam eveniet velit voluptatibus at
        maxime! Necessitatibus, enim natus?
      </p>
    </template>
    <!-- <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nobis similique voluptas vitae, provident excepturi saepe sequi quas maiores omnis eaque numquam eveniet velit voluptatibus at
        maxime! Necessitatibus, enim natus?
      </p>
    </template> -->

    <template #default> Bu default olarak gösterilecek. </template>
  </MdlComponent>
</template>

<script>
import MdlComponent from "@/components/MdlComponent.vue";
export default {
  components: {
    MdlComponent,
  },
  data() {
    return {
      content: `<h3 class="text-red">title</h3>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved!");
    },
  },
};
</script>
