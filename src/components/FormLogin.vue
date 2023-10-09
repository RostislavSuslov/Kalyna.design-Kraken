<script setup>
import {ref, provide} from "vue";
import CustomInput from "@/components/CustomInput.vue";

const form = ref({
  login: "Rost",
  email: "",
  tel: "",
  password: "",
  password2: "",
});
const onSubmit =()=> {
  console.log(form.value)
}

provide("formData", form)
</script>
<template>
  <form @submit.prevent="onSubmit" >
    <pre>{{form}}</pre>
    <custom-input name="login"></custom-input>
    <custom-input name="email" type="email"></custom-input>
    <custom-input name="tel" type="tel"></custom-input>
    <custom-input name="password" type="password"></custom-input>
    <custom-input name="password2" type="password"></custom-input>
    <button>Submit</button>
  </form>
</template>


<style scoped></style>