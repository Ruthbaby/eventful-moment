<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold text-center mb-6">My Buckets</h2>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="bucket in buckets" :key="bucket.id" class="border p-4 rounded-lg shadow">
        <h3 class="font-semibold">{{ bucket.name }}</h3>
        <p>{{ bucket.description }}</p>
        <router-link :to="'/item/' + bucket.id" class="text-blue-500">View Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buckets: [
        { id: 1, name: "Work", description: "Tasks related to work" },
        { id: 2, name: "Personal", description: "Personal tasks" },
      ],
    };
  },
};
</script>
