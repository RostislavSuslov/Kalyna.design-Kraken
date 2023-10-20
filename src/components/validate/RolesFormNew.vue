<template>
  <label>Second input</label>
  <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border border-gray-600"
  >
  <Teleport to="body">
    <custom-modal
        :open-modal="openModal"
        @confirm="submitForm"
        @update:open-modal="onChangeModal"
    />
  </Teleport>
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
    <component :is="activeFields"></component>
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
        type="submit"
        :right-icon="PowerIcon"
        :disabled="loading"
    >
      Submit
    </prepare-button>
    <pre>values: {{ values }}</pre>
    <pre>errors: {{ errors }}</pre>
    <pre>errors: {{ openModal }}</pre>
  </form>


</template>
<script setup>
import * as yup from 'yup';
import "yup-phone";
import {computed, ref} from "vue";
import {useForm} from 'vee-validate';
import ControledField from "@/components/validate/ControledField.vue";
import TextField from "@/components/validate/TextField.vue";
import RolesFormTeacher from "@/components/RolesFormTeacher.vue";
import RolesFormStudent from "@/components/RolesFormStudent.vue";
import CustomModal from "@/components/CustomModal.vue";
import PrepareButton from "./PrepareButton.vue";
import {PowerIcon} from '@heroicons/vue/20/solid';
import randomGenerator from "@/utils/randomGenerator";
defineProps({
  modelValue: String,
})

const emit = defineEmits(['success', 'error', 'update:modelValue'])


const PERSONS = {
  Teacher: "Teacher",
  Student: "Student",
};

const tabs = {
  [PERSONS.Teacher]: RolesFormTeacher,
  [PERSONS.Student]: RolesFormStudent,
};

const initialValue = {
  person: PERSONS.Teacher,
  name: "",
};

const openModal = ref(false)

const loading = ref(false)

const {handleSubmit, values, errors, resetForm} = useForm({
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

const submitForm = async () => {
  loading.value = true;

  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomGenerator()) {
          resolve()
          return
        }
        reject("myError")
      }, 300);
    })
    emit('success')
    resetForm()
    console.log(JSON.stringify(values, null, 2));
  } catch (error) {
    emit('error')
    console.log(error)
  } finally {
    loading.value = false;
  }
}

const onChangeModal = (newVal) => {
  openModal.value = newVal;
}

const onSubmit = handleSubmit(() => {
  onChangeModal(true)
})
</script>
<style>

</style>
