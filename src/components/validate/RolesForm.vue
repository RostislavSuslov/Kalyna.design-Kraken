
<script setup>
import * as yup from 'yup';
import "yup-phone";
import { useForm } from 'vee-validate';
import {FireIcon} from '@heroicons/vue/20/solid'
import PrepareButton from "./PrepareButton.vue";
import ValidationField from "./ValidationField.vue";

const PERSONS = {
  teacher: "Teacher",
  student: "Student",
};

const initialValue = {
  person: PERSONS.teacher,
  name: "",
};

const { handleSubmit, values, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),

    phoneNumber: yup.string().when("person", {
      is: PERSONS.teacher,
      then: (schema) => schema.required().min(13),
    }),

    series_passport: yup.string().when("person", {
      is: PERSONS.teacher,
      then: (schema) => schema.required().min(8),
    }),

    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref("password")]),
  }),
});

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>
<template>
  <form @submit="onSubmit" class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]">
    <label>Select your role:</label>
    <validation-field
        type="radio"
        name="person"
        :label="key"
        v-for="(value, key) in PERSONS"
        :value="value"
        :key="value"
    />
    <validation-field
        type="email"
        name="email"
        label="Email"
        placeholder="Your email"
    />
    <validation-field
        name="phoneNumber"
        type="phone"
        placeholder="+38(999)-99-99-999"
        v-if="values.person === PERSONS.teacher"
        v-mask="'+38(000)-00-00-000'"
    />
    <validation-field
        type="text"
        name="series_passport"
        label="Series passport"
        placeholder="AA123456"
        v-if="values.person === PERSONS.teacher"
        v-mask="'SS 000000'"
    />
    <validation-field
        type="password"
        name="password"
        label="password"
        placeholder="Your password"
    />
    <validation-field
        type="password"
        name="confirmPassword"
        label="confirmPassword"
        placeholder="Confirm password"
    />
    <prepare-button color="success" :right-icon="FireIcon" type="submit">Submit</prepare-button>
    <pre>values: {{ values }}</pre>
    <pre>errors: {{ errors }}</pre>

  </form>
</template>
<style>

</style>
