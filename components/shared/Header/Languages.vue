<script setup lang="ts">
const Language = {
  icon: "language",
  iconRight: "arrow_down",
  class: "text-normal leading-normal text-white",
  text: "English",
};
</script>

<template>
  <div class="inline-flex justify-end items-center">
    <nuxt-icon
      :name="Language.icon"
      class="flex justify-center items-start w-icon h-icon text-white text-icon overflow-hidden mr-2.5"
    />

    <a :class="Language.class" href="#">
      {{ Language.text }}
    </a>

    <a class="w-[22px] h-[22px] flex justify-center items-center" href="#">
      <nuxt-icon
        :name="Language.iconRight"
        class="flex justify-center items-center w-icon h-icon text-white text-icon-small overflow-hidden"
      />
    </a>
  </div>
</template>
