<template>
    <text-field
      name="phoneNumber"
      type="phone"
      label="Phone"
      placeholder="(999) 99-99-999"
      mask="'+38 (000)-00-00-000'"
    />
    <text-field
      type="text"
      name="series_passport"
      label="Series passport"
      placeholder="AA 123456"
      mask="'SS 000000'"
    />
</template>

<script setup>
  import TextField from "@/components/validate/TextField.vue";
</script>