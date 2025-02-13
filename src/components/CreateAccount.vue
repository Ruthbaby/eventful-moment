<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white">
    <div class="w-full max-w-md p-8 border rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center mb-6">Create an account</h2>
      <form @submit="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700">Fullname</label>
          <Field name="fullname" v-model="fullname" rules="required" v-slot="{ field, errors }">
            <input v-bind="field" type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <span class="text-red-500 text-sm">{{ errors[0] }}</span>
          </Field>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <Field name="email" v-model="email" rules="required|email" v-slot="{ field, errors }">
            <input v-bind="field" type="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <span class="text-red-500 text-sm">{{ errors[0] }}</span>
          </Field>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <Field name="password" v-model="password" rules="required|min:6" v-slot="{ field, errors }">
            <input v-bind="field" type="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <span class="text-red-500 text-sm">{{ errors[0] }}</span>
          </Field>
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { Field } from 'vee-validate';

// Define validation rules globally
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

export default {
  components: {
    Field
  },
  data() {
    return {
      fullname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit(event) {
      console.log("Form submitted", this.fullname, this.email);
    }
  }
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
