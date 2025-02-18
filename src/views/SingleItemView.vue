<template>
  <div class="p-6">
    {{ myWork.params }}
    <h2 class="text-3xl font-bold text-center mb-6">Item Details</h2>
    <div class="border p-4 rounded-lg shadow">
      <h3 class="font-semibold">{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <button @click="editItem" class="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
      <button @click="deleteItem" class="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
export default {
  data() {
    return {
      item: { title: "Sample Item", description: "Details about this item" },
      myWork: useRoute(),
    };
  },
  methods: {
    editItem() {
      this.$router.push(`/edit/${this.item.id}`);
    },
    deleteItem() {
      console.log("Deleting item...");
    },
  },
};
</script>
