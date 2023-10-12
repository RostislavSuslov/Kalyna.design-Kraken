<template>
  <div class="input-wrapper w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
    <Field :name="name" :type="type" :placeholder="placeholder"
           class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] placeholder-black::placeholder outline-none transition-all duration-200 ease-linear motion-reduce:transition-none "/>
    <label v-if="label"
           class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor">
      {{ label }}
    </label>
    <ErrorMessage class="text-red-600" :name="name"/>
  </div>
</template>

<script setup>
import {Field, ErrorMessage} from 'vee-validate';
defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
})
</script>
<style scoped>

</style>