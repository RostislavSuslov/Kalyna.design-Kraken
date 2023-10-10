<template>
  <wrapper-custom-input :helperText="helperText" :error="error" :label="label">
    <input
        :type="type"
        :placeholder="placeholder"
        class="w-full px-4 py-2 rounded-md border-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

//old version
<!--<template>-->
<!--  <wrapper-custom-input :helperText="helperText" :error="error" :label="label">-->
<!--    <input-->
<!--      :type="type"-->
<!--      :placeholder="placeholder"-->
<!--      class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem]"-->
<!--      v-model="modelValue"-->
<!--    />-->
<!--  </wrapper-custom-input>-->
<!--</template>-->

<!--<script setup>-->
<!--import WrapperCustomInput from "@/components/privide-inject/WrapperCustomInput.vue";-->
<!--import { computed, watch, inject } from "vue";-->

<!--const props = defineProps({-->
<!--  placeholder: String,-->
<!--  label: String,-->
<!--  error: String,-->
<!--  helperText: String,-->
<!--  modelValue: String,-->
<!--  type: {-->
<!--    type: String,-->
<!--    default: "text",-->
<!--  },-->
<!--  name: String,-->
<!--});-->

<!--const formData = inject("formData");-->
<!--const formErrors = inject("formErrors");-->

<!--const validationRules = {-->
<!--  login: {-->
<!--    required: "Login is required",-->
<!--  },-->
<!--  password: {-->
<!--    required: "Password is required",-->
<!--  },-->
<!--};-->

<!--const modelValue = computed({-->
<!--  get() {-->
<!--    return formData.value[props.name];-->
<!--  },-->
<!--  set(val) {-->
<!--    formData.value[props.name] = val;-->
<!--    validateField(props.name);-->
<!--  },-->
<!--});-->

<!--const validateField = (fieldName) => {-->
<!--  if (!modelValue.value && validationRules[fieldName]?.required) {-->
<!--    formErrors.value[fieldName] = validationRules[fieldName].required;-->
<!--  } else {-->
<!--    formErrors.value[fieldName] = "";-->
<!--  }-->
<!--};-->

<!--watch(-->
<!--  () => formData.value[props.name],-->
<!--  () => {-->
<!--    validateField(props.name);-->
<!--  },-->
<!--);-->
<!--</script>-->