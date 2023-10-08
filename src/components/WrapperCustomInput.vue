<template>
    <div class="input-wrapper relative max-w-screen-md w-full mx-auto p-4 mb-4 border-2  rounded-[4px]">
          <slot></slot>
          <label class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor" v-if="label || $slots.label">
            <slot name="label"> {{label}} </slot>
          </label>
          <label class="text-red-600" v-if="error">{{error}}</label>
          <slot name="helperText" v-if="helperText"><p>{{helperText}}</p></slot>
    </div>
</template>

<script setup>

const props = defineProps({
  placeholder: String,
  label: String,
  error: String,
  helperText: String,
  type: String,
})  
</script>                                                                                                                                                                                                                         <style scoped lang="scss"></style>