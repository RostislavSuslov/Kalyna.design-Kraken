<template>
  <field-wrapper
      :label="label"
      :errors="errors"
      :variant="variant"
  >
      <input
          :name="name"
          :type="type"
          :placeholder="placeholder"
          v-model="innerValue"
          class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      />
  </field-wrapper>
</template>

<script setup>
import {useField} from 'vee-validate';
import FieldWrapper from "@/components/validate/FieldWrapper.vue";

const props = defineProps({
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
  class: String,
  variant: String,
})

const {value: innerValue, errors} = useField(()=>props.name)
</script>
<style scoped>

</style>

<!--
1. прийняти пропс.
2. Зробити двустороню прив'язку, через useForm, та modelValue
-->