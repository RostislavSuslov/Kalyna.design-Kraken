<template>
  <Form @submit="onSubmit" v-slot="{isSubmitting}"
        :initialValues="initialValue"
        :validationSchema="validationSchema"
        class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <h3 class="block w-full text-3xl mb-8">Log in</h3>
    <ValidationField name="login" label="login" />
    <ValidationField type="email" name="email" label="email" />
    <ValidationField type="password" name="password" label="password" />
    <ValidationField type="date" name="date" label="date" />
    <ValidationField type="number" name="number" label="number" />
    <prepare-button color="success" :right-icon="FireIcon" :loading="isSubmitting">Submit</prepare-button>
  </Form>
</template>

<script setup>
import PrepareButton from "@/components/validate/PrepareButton.vue";
import {FireIcon} from '@heroicons/vue/20/solid'
import {Form} from 'vee-validate';
import * as yup from 'yup';
import ValidationField from "@/components/validate/ValidationField.vue";


// const loginRules = yup.string().min(5);
// const passwordRules = yup.string().required().min(8);
// const mailRules = yup.string().required();
// const dateRules = yup.date().max(12 - 11 - 2010, 'возрастное ограничение, вход строго с 18 лет');
// const numberRules = yup.number().required().min(18)

const initialValue = {
  date: "1976-07-20",
  login: "Commodi adipisci ali",
  email: "Dolor in minima culp",
  number:373,
  password:"Pa$$w0rd!",
}

const validationSchema = {
  date:  yup.string().min(5),
  login: yup.string().min(5),
  email: yup.string().required(),
  number:yup.number().required().min(18),
  password: yup.string().required().min(8),
}

const onSubmit = async (...arr) => {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 4000)
  })


  console.log(arr)
}
</script>
