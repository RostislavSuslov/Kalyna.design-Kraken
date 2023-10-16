<template>
  <field-wrapper
      :label="label"
      :errors="errors"
  >
    <input
        :name="name"
        :type="type"
        :value="value"
        :class="fieldClassesOutlined"
        v-model="innerValue"
    >
  </field-wrapper>
</template>

<script setup>
import FieldWrapper from "@/components/validate/FieldWrapper.vue";
import { useField } from 'vee-validate';


const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "radio",
    validator(value) {
      return ["radio", "checkbox"]
    },
  },


  label: String,
  placeholder: String,
  value: String,
})

const { value: innerValue, errors } = useField(() => props.name, undefined, {
  type: props.type,
  checkedValue: ()=> props.value,
})
</script>