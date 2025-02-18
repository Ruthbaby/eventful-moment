<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold text-left mb-2">Welcome John Doe,</h2>
    <p class="text-sm">Here are items in your eventful moment bucket.</p>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="bucket in buckets" :key="bucket.id" class="border p-4 rounded-lg shadow">
        <h3 class="font-semibold">{{ bucket.name }} Welcome John Doe,</h3>
        <p>{{ bucket.description }} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci veritatis expedita mollitia, recusandae et praesentium, minus architecto explicabo fugiat quae commodi ullam veniam esse at minima doloremque voluptates odit.</p>
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
        { id: 1, name: "John Doe", description: "Tasks related to work" },
        { id: 2, name: "Personal", description: "Personal tasks" },
      ],
    };
  },
};
</script>
