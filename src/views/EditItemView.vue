<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold text-center mb-6">Edit Item</h2>
    <form @submit.prevent="updateItem">
      <div class="mb-4">
        <label class="block text-gray-700">Title</label>
        <input v-model="title" required class="w-full px-4 py-2 border rounded-lg" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Description</label>
        <textarea v-model="description" required class="w-full px-4 py-2 border rounded-lg"></textarea>
      </div>
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { title: "Existing Item", description: "Edit this description" };
  },
  methods: {
    updateItem() {
      console.log("Updating item...");
    },
  },
};
</script>
