<script setup>
import WrapperCustomInput from "@/components/provide/WrapperCustomInput.vue";
import {computed, inject} from "vue";
import {useField} from "@/composables/form"

const form = inject('formData');

defineEmits(
    ['update:modelValue', ]
)

const props = defineProps({
  placeholder: String,
  label: String,
  error: String,
  helperText: String,
  modelValue: String,
  type:  {
    type: String,
    default: "text"
  },
  name: String,
})
const innerValue = computed({
  get() {
    return form.value[props.name]
  },
  set(val) {
    form.value[props.name] = val;
  }
})
</script>
<template>
  <wrapper-custom-input :helperText="helperText" :error="error" :label="label">
    <input :type="type"
           :placeholder="placeholder"
           class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
           v-model="innerValue"
    >
  </wrapper-custom-input>
</template>

<style scoped lang="scss"></style>














<!--<div class="relative mb-3" data-te-input-wrapper-init>-->
<!--<input-->
<!--    type="text"-->
<!--    class="peer block min-h-[auto] w-full rounded   ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"-->
<!--    id="exampleFormControlInput1"-->
<!--    placeholder="Example label"-->
<!--/>-->
<!--<label-->
<!--    for="exampleFormControlInput1"-->
<!--    class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"-->
<!--&gt;Example label-->
<!--</label>-->
<!--</div>-->