<template>
  <form @submit.prevent="onSubmit" class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <div>{{form}}</div>
    <h3 class="block w-full text-3xl mb-8">Log in</h3>
    <prepare-input label="login" name="login" :modelValue="form.login"></prepare-input>
    <prepare-input label="password" type="password" name="password" :modelValue="form.password"></prepare-input>
    <prepare-input label="date" type="date" name="date" :modelValue="form.date"></prepare-input>
    <prepare-button :right-icon="ArrowRightOnRectangleIcon">Submit</prepare-button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import PrepareInput from "@/components/validate/PrepareInput.vue";
import PrepareButton from "@/components/validate/PrepareButton.vue";
import {ArrowRightOnRectangleIcon} from '@heroicons/vue/20/solid'

 
const form = ref({
  login: "Rost",
  password: "123",
  date:"21",
});
const onSubmit =()=> {
  console.log(form.value)
}


</script>
<style scoped></style>