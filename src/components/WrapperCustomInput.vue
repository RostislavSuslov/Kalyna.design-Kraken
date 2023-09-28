<template>
    <div class="input-wrapper max-w-screen-md mx-auto border-2 p-4">
          <label class="text-cyan-700" :class="{'text-red-600' : hasError }" v-if="label || $slots.label">
            <slot name="label"> {{label}} </slot>
          </label>
          <slot  :type="number" :_class="{'input-error' : hasError}"></slot>
          <label class="text-red-600" v-if="hasError">{{error}}</label>
          <slot name="helperText"><p>{{helperText}}</p></slot>
    </div>

</template>

<script setup>

import {computed} from "vue";

const props = defineProps({
  label: String,
  error: String,
  helperText: String,
  type: String,
})
const slots = defineSlots();

const hasError = computed(()=> !!(props.error || slots.error))
const hasHelperText = computed(()=> !!(props.helperText || slots.helperText))
</script>

<style scoped lang="scss">

</style>