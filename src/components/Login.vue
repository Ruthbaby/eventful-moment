<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Welcome back,</h1>
      <p class="text-sm text-gray-600 mb-6">
        Hi, my name is Eventful Moments. I am a bucket... no, not the bucket of water,
        but I store awesome moments you will like to have in coming years.
      </p>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
          <p v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</p>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">{{ passwordError }}</p>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    handleLogin() {
      this.emailError = '';
      this.passwordError = '';

      if (!this.email) {
        this.emailError = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.emailError = 'Enter a valid email address.';
      }

      if (!this.password) {
        this.passwordError = 'Password is required.';
      } else if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long.';
      }

      if (!this.emailError && !this.passwordError) {
        alert('Login successful!');
      }
    },
  },
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>