<template>
  <form @submit.prevent="onSubmit"
  class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >

    <h3 class="block w-full text-3xl mb-8">Log in</h3>
    <custom-input label="login" name="login" v-model="form.login"></custom-input>
    <custom-input label="password" type="password" name="password"
                  v-model="form.password"></custom-input>
    <custom-input label="password2" type="password" name="password"
                  :modelValue="form.password"
                  @update:modelValue="form.password = $event"></custom-input>
    <CustomButton  :right-icon="ArrowRightOnRectangleIcon">Submit</CustomButton>
  </form>
</template>

<script setup>
import {ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import {ArrowRightOnRectangleIcon} from '@heroicons/vue/20/solid'


const form = ref({
  login: "Rost",
  password: ""
});
const onSubmit =()=> {
  console.log(form.value)
}


</script>
<style scoped></style>