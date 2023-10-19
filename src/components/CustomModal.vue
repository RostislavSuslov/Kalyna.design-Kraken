<template>
  <div>
    <prepare-button
        color="success"
        :right-icon="PowerIcon"
        @click="open = true"
        type="button"
        :loading="false"

    >Submit
    </prepare-button>


    <Teleport to="body">
      <div v-if="open" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-container">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Hello from the modal!</h2>

          <div class="flex">
            <prepare-button
                color="danger"
                type="button"
                @click="open = false"
                :left-icon="HandThumbDownIcon"
            >Close</prepare-button>
            <prepare-button
                color="warning"
                type="submit"
                @click="handleConfirm"
                :right-icon="RocketLaunchIcon"
            >
              Confirm
            </prepare-button>
          </div>
          <!--        <button type="button" @click="open = false">Close</button>-->
          <!--        <button type="submit" @click="handleConfirm">Confirm</button>-->
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue';
import {PowerIcon} from '@heroicons/vue/20/solid';
import {RocketLaunchIcon} from '@heroicons/vue/20/solid';
import {HandThumbDownIcon} from '@heroicons/vue/20/solid';
import PrepareButton from "./validate/PrepareButton.vue";

const open = ref(false)
const loading = ref(true)
const emit = defineEmits(['confirmClicked'])

const handleConfirm = () => {
  emit('confirmClicked');
  open.value = false;

}
</script>

<style type="scss" scoped>

/* Стили для модального окна */
.modal-container {
  background-color: #f1f2f6; /* Цвет фона */
  border-radius: 10px; /* Скругление углов */
  padding: 20px; /* Внутренний отступ */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень */
  width: 300px; /* Ширина */
  &:before{
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #353535b0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
}
</style>