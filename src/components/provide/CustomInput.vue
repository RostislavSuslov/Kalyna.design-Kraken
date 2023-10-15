<template>
  <wrapper-custom-input :helperText="helperText" :error="error" :label="label">
    <input
        :type="type"
        :placeholder="placeholder"
        class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        @input="onSetValue"
        :value="value"
    />
  </wrapper-custom-input>
</template>

<script setup>

import WrapperCustomInput from "@/components/provide/WrapperCustomInput.vue";
import { useField } from "@/composables/form.js";

defineEmits(['update:modelValue'])

const props = defineProps({
  placeholder: String,
  label: String,
  helperText: String,
  modelValue: String,
  type: {
    type: String,
    default: "text",
  },
  name: String,
})

const {value, error, onSetValue} = useField(props);
</script>
