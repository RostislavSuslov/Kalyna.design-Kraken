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