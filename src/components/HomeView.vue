<template>
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-2xl font-bold mb-4">Add New Item</h2>
    <form @submit.prevent="addItem"> 
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Item Name:</label>
        <input type="text" id="name" v-model="itemName" class="mt-1 p-2 w-full border rounded-md" required>
        <span v-if="nameErrors.length > 0" class="text-red-500">{{ nameErrors[0] }}</span>
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea id="description" rows="4" v-model="itemDescription" class="mt-1 p-2 w-full border rounded-md" required></textarea>
        <span v-if="descriptionErrors.length > 0" class="text-red-500">{{ descriptionErrors[0] }}</span> 
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Item</button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useForm } from '@vueuse/core';

export default {
  setup() {
    const { handleSubmit, form, errors } = useForm({
      itemName: '',
      itemDescription: '',
    });

    const nameErrors = computed(() => errors.itemName);
    const descriptionErrors = computed(() => errors.itemDescription);

    const addItem = handleSubmit((values) => {
      // Handle form submission (e.g., send data to API)
      console.log('Form submitted:', values);
    });

    return {
      itemName: form.itemName,
      itemDescription: form.itemDescription,
      addItem,
      nameErrors,
      descriptionErrors,
    };
  },
};
</script>