<script setup lang="ts">
  const LSItems = {
    icon: 'profile',
    class: 'text-normal leading-normal text-white',

    logIn: {
      text: 'Log in',
    },

    signUp: {
      text: 'Sign up',
    },
  };
</script>

<template>
  <div class="inline-flex items-center justify-end">
    <Icon
      :name="`local:${LSItems.icon}`"
      class="text-icon mr-2.5 flex h-icon w-icon items-start justify-center overflow-hidden text-white"
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
