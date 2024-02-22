<script setup lang="ts">
const LSItems = {
  icon: "profile",
  class: "text-normal leading-normal text-white",

  logIn: {
    text: "Log in",
  },

  signUp: {
    text: "Sign up",
  },
};
</script>

<template>
  <div class="inline-flex justify-end items-center">
    <nuxt-icon
      :name="LSItems.icon"
      class="flex justify-center items-start w-icon h-icon text-white text-icon overflow-hidden mr-2.5"
    />

    <a :class="LSItems.class" href="#">
      {{ LSItems.logIn.text }}
    </a>
    <span :class="LSItems.class">/</span>
    <a :class="LSItems.class" href="#">
      {{ LSItems.signUp.text }}
    </a>
  </div>
</template>
