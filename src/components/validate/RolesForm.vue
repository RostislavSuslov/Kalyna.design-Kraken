
<script setup>
import * as yup from 'yup';
import "yup-phone";
import { useForm } from 'vee-validate';

import {FireIcon} from '@heroicons/vue/20/solid'
import PrepareButton from "./PrepareButton.vue";
import ValidationField from "./ValidationField.vue";
import {ref} from "vue";

const PERSONS = {
  teacher: "Teacher",
  student: "Student",
  partner: "Partner",
}

const initialValue = {
  person: PERSONS.teacher,
  name: "",
}

 

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    phoneNumber: yup.string().required(),
    password: yup.string().required().min(6),
    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref('password')]),
  }),
});

const onSubmit = handleSubmit(values => {
  console.log(JSON.stringify(values, null, 2));
});



</script>
<template>
  <form
      @submit="onSubmit"

  >
    <label>Select your role:</label>
    <ValidationField
        type="radio"
        name="person"
        :label="key"
        v-for="(value, key) in PERSONS"
        :value="value"
        :key="value"

    />
    <ValidationField type="email" name="email" label="Email" placeholder="Your email"/>
    <ValidationField name="phoneNumber" type="phone" placeholder="(999) 999-9999" />
    <ValidationField type="text" name="series_passport" label="Series passport" placeholder="Your email"/>
    <ValidationField type="password" name="password" label="password" placeholder="Your password"/>
    <ValidationField type="password" name="confirmPassword" label="confirmPassword" placeholder="Confirm password"/>
    <prepare-button color="success" :right-icon="FireIcon" type="submit">Submit</prepare-button>
  </form>
</template>
<style>

</style>
