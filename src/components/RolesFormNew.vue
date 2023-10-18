
<script setup>
import * as yup from 'yup';
import "yup-phone";
import { useForm } from 'vee-validate';
import {FireIcon} from '@heroicons/vue/20/solid'
import PrepareButton from "./validate/PrepareButton.vue";
import ControledField from "@/components/validate/ControledField.vue";
import TextField from "@/components/validate/TextField.vue";
import {computed} from "vue";
import RolesFormTeacher from "@/components/RolesFormTeacher.vue";
import RolesFormStudent from "@/components/RolesFormStudent.vue";

const PERSONS = {
  Teacher: "33",
  Student: "66",
};

const tabs = {
  [PERSONS.Teacher]: RolesFormTeacher,
  [PERSONS.Student]: RolesFormStudent,
};

const initialValue = {
  person: PERSONS.Teacher,
  name: "",
};

const { handleSubmit, values, errors } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    email: yup.string().required().email(),

    phoneNumber: yup.string().when("person", {
      is: PERSONS.Teacher,
      then: (schema) => schema.required().min(13),
    }),

    series_passport: yup.string().when("person", {
      is: PERSONS.Teacher,
      then: (schema) => schema.required().min(8),
    }),

    password: yup.string().required().min(6),

    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref("password")]),
  }),
});

const activeFields = computed(() => {
  return tabs[values.person]
});

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>
<template>
  <form
      @submit="onSubmit"
      class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"

  >
    <h3 class="block w-full text-3xl mb-8">Roles form</h3>
    <label>Select your role:</label>
    <controled-field
        name="person"
        :label="key"
        v-for="(value, key) in PERSONS"
        :value="value"
        :key="value"
    />
    <text-field
        type="email"
        name="email"
        label="Email"
        placeholder="Your email"

    />

    <component :is="activeFields" class="tab"></component>

    <text-field
        type="password"
        name="password"
        label="password"
        placeholder="Your password"
    />
    <text-field
        type="password"
        name="confirmPassword"
        label="confirmPassword"
        placeholder="Confirm password"
    />
    <prepare-button
        color="success"
        :right-icon="FireIcon"
        type="submit"
        :loading="isSubmitting"
    >Submit
    </prepare-button>
    <pre>values: {{ values }}</pre>
    <pre>errors: {{ errors }}</pre>

  </form>
</template>
<style>

</style>
