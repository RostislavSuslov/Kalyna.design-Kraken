<template>
  <div class="button-row flex flex-col p-8 border my-8">
    <h2 class="text-5xl mb-6">Button task</h2>
    <div class="flex flex-wrap items-center gap-4 mb-6">
      <h3 class="block w-full text-3xl mb-1">Default case</h3>
      <CustomButton>primary</CustomButton>
      <CustomButton color="secondary">secondary</CustomButton>
      <CustomButton color="success">success</CustomButton>
      <CustomButton color="info">info</CustomButton>
      <CustomButton color="warning">warning</CustomButton>
      <CustomButton color="danger">danger</CustomButton>
      <CustomButton disabled>disabled</CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
     <h3 class="block w-full text-3xl mb-1">Heroicons case</h3>
      <CustomButton as="a" href="#" :left-icon="ArrowLeftOnRectangleIcon">Arrow Left</CustomButton>
      <CustomButton as="a" color="secondary" :right-icon="ArrowRightOnRectangleIcon">Arrow Right</CustomButton>
      <CustomButton as="a" color="success" :right-icon="HandThumbUpIcon">success</CustomButton>
      <CustomButton as="a" color="info" :right-icon="InformationCircleIcon">info</CustomButton>
      <CustomButton as="a" color="warning" :right-icon="ExclamationTriangleIcon">warning</CustomButton>
      <CustomButton as="a" color="danger" :right-icon="BugAntIcon">danger</CustomButton>
      <CustomButton
          as="a"
          href="https://www.svgrepo.com"
          loading
      ></CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
      <h3 class="block w-full text-3xl mb-1">Custom icon case</h3>
      <CustomButton color="primary">
        <template #default>primary</template>
        <template #icon>
          <IconChery></IconChery>
        </template>
      </CustomButton>
      <CustomButton color="secondary">
        <template #default>secondary</template>
        <template #icon>
          <IconHeartsBlue></IconHeartsBlue>
        </template>
      </CustomButton>
      <CustomButton color="success">
        <template #default>success</template>
        <template #icon>
          <IconHeartsYellow></IconHeartsYellow>
        </template>
      </CustomButton>
      <CustomButton color="info">
        <template #default>info</template>
        <template #icon>
          <IconHugs></IconHugs>
        </template>
      </CustomButton>
      <CustomButton color="warning">
        <template #default>warning</template>
        <template #icon>
          <IconMagic></IconMagic>
        </template>
      </CustomButton>
      <CustomButton color="danger">
        <template #default>danger</template>
        <template #icon>
          <IconPetard></IconPetard>
        </template>
      </CustomButton>
      <CustomButton disabled color="info">
        <template #default>disabled</template>
        <template #icon>
          <IconPetard></IconPetard>
        </template>
      </CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
      <h3 class="block w-full text-3xl mb-1">Outline case</h3>
      <CustomButton variation="outlined" color="primary">primary</CustomButton>
      <CustomButton variation="outlined" color="secondary">secondary</CustomButton>
      <CustomButton variation="outlined" color="success">success</CustomButton>
      <CustomButton variation="outlined" color="info">info</CustomButton>
      <CustomButton variation="outlined" color="warning">warning</CustomButton>
      <CustomButton variation="outlined" color="danger">danger</CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
      <h3 class="block w-full text-3xl mb-1">Outline heroicons case</h3>
      <CustomButton variation="outlined" color="primary" :left-icon="ArrowLeftOnRectangleIcon">Arrow Left</CustomButton>
      <CustomButton variation="outlined" color="secondary" :right-icon="ArrowRightOnRectangleIcon">Arrow Right</CustomButton>
      <CustomButton variation="outlined" color="success" :right-icon="HandThumbUpIcon">success</CustomButton>
      <CustomButton variation="outlined" color="info" :right-icon="InformationCircleIcon">info</CustomButton>
      <CustomButton variation="outlined" color="warning" :right-icon="ExclamationTriangleIcon">warning</CustomButton>
      <CustomButton variation="outlined" color="danger" :right-icon="BugAntIcon">danger</CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
      <h3 class="block w-full text-3xl mb-1">Outline case custom icon</h3>
      <CustomButton variation="outlined" color="primary">
        <template #default>primary</template>
        <template #icon>
          <IconChery></IconChery>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="secondary">
        <template #default>secondary</template>
        <template #icon>
          <IconHeartsBlue></IconHeartsBlue>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="success">
        <template #default>success</template>
        <template #icon>
          <IconHeartsYellow></IconHeartsYellow>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="info">
        <template #default>info</template>
        <template #icon>
          <IconHugs></IconHugs>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="warning">
        <template #default>warning</template>
        <template #icon>
          <IconMagic></IconMagic>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="danger">
        <template #default>danger</template>
        <template #icon>
          <IconPetard></IconPetard>
        </template>
      </CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
      <h3 class="block w-full text-3xl mb-1">Outline case border-radius</h3>
      <CustomButton variation="outlined" color="primary" border-radius="none">
        <template #default>primary</template>
        <template #icon>
          <IconChery></IconChery>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="secondary" border-radius="base">
        <template #default>secondary</template>
        <template #icon>
          <IconHeartsBlue></IconHeartsBlue>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="success" border-radius="sm">
        <template #default>success</template>
        <template #icon>
          <IconHeartsYellow></IconHeartsYellow>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="info" border-radius="lg">
        <template #default>info</template>
        <template #icon>
          <IconHugs></IconHugs>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="warning" border-radius="none">
        <template #default>warning</template>
        <template #icon>
          <IconMagic></IconMagic>
        </template>
      </CustomButton>
      <CustomButton variation="outlined" color="danger" border-radius="none">
        <template #default>danger</template>
        <template #icon>
          <IconPetard></IconPetard>
        </template>
      </CustomButton>
    </div>
    <div class="flex flex-wrap gap-4 mb-6 items-center">
      <h3 class="block w-full text-3xl mb-1">Size case</h3>
      <CustomButton as="a" size="lg" href="#" :left-icon="ArrowLeftOnRectangleIcon">Arrow Left</CustomButton>
      <CustomButton as="a" size="md" color="secondary" :right-icon="ArrowRightOnRectangleIcon">Arrow Right</CustomButton>
      <CustomButton as="a" size="base" color="success" :right-icon="HandThumbUpIcon">success</CustomButton>
    </div>
   </div>
</template>

<script setup>
import CustomButton from "@/components/CustomButton.vue";
import {ArrowLeftOnRectangleIcon} from '@heroicons/vue/20/solid'
import {ArrowRightOnRectangleIcon} from '@heroicons/vue/20/solid'
import {ExclamationTriangleIcon} from '@heroicons/vue/20/solid'
import {HandThumbUpIcon} from '@heroicons/vue/20/solid'
import {BugAntIcon} from '@heroicons/vue/20/solid'
import {InformationCircleIcon} from '@heroicons/vue/20/solid'
import IconChery from '@/components/icons/IconCherry.vue';
import IconHeartsBlue from '@/components/icons/IconHeartsBlue.vue';
import IconHeartsYellow from '@/components/icons/IconHeartsYellow.vue';
import IconHugs from '@/components/icons/IconHugs.vue';
import IconMagic from '@/components/icons/IconMagic.vue';
import IconPetard from "@/components/icons/IconPetard.vue";

</script>

<style scoped>

</style>