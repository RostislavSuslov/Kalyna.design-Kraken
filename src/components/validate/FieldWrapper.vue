<template>
  <div class="input-wrapper relative input-wrapper default w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
    <slot/>
    <label
        v-if="label"
        :class="containerClasses.label"
        class="pointer-events-none bg-white absolute left-3 top-0 mb-0 origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor"
    >
      {{ label }}
    </label>
    <span
        v-if="error"
        :class="containerClasses.error"
        class="text-red-600"
    >
      {{error}}
    </span>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  errors: [String, Array],
  label: String,
  variant: {
    type: String,
    default: "default",
  }
})

const containerClasses = computed(() => {
  return {
    default: {
      label: "bg-green-500",
      error: "bg-red-500",
    },
  }[props.variant] || {}

});
//const isContained = computed(() => props.variant === props.contained);
//
const error = computed(()=> {
  if (Array.isArray(props.errors)) {
      return  props.errors[0]
  }
  return  props.errors;
})
</script>

<style scoped>

</style>