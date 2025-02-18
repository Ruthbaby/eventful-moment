<template>
  <div class="min-h-screen bg-gray-100">


    <main class="max-w-5xl mx-auto p-6">
      <h2 class="text-3xl font-semibold">Welcome John Doe,</h2>
      <p class="text-gray-600 mb-6">Here are items in your eventful moment bucket.</p>

      <div class="text-right mb-4">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Item</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(item, index) in items" :key="index" class="bg-white p-4 rounded-lg shadow-md border">
          <h3 class="font-bold text-lg" :class="{ 'bg-yellow-200 p-2 rounded': index === 0 }">
            {{ item.title }}
          </h3>
          <p class="text-gray-700 text-sm my-2">{{ item.description }}</p>
          <div class="flex justify-between items-center text-gray-500 text-sm">
            <button class="text-blue-600 hover:underline">View Details</button>
            <span>{{ item.date }}</span>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-6">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Load More</button>
      </div>
    </main>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Lorem ipsum...", description: "Until recently, the prevailing...", date: "28/02/2025" },
        { title: "Lorem ipsum...", description: "Until recently, the prevailing...", date: "28/02/2025" },
        { title: "Lorem ipsum...", description: "Until recently, the prevailing...", date: "28/02/2025" },
        { title: "Lorem ipsum...", description: "Until recently, the prevailing...", date: "28/02/2025" }
      ]
    };
  }
};
</script>

<style scoped>
</style>