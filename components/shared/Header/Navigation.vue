<script setup lang="ts">
const navigation = [
  {
    key: "auth",
  },
  {
    key: "language",
  },
];
</script>

<template>
  <div class="flex justify-end items-center">
    <ul class="flex justify-end items-center">
      <li
        v-for="(nav, index) in navigation"
        :key="`nav-item-${index}`"
        :class="[
          'flex justify-end items-center',
          {
            'border-r border-solid border-white pr-[30px] mr-[30px]':
              index < navigation.length - 1,
          },
        ]"
      >
        <template v-if="nav.key === 'auth'">
          <SharedHeaderLoginSignup />
        </template>
        <template v-else>
          <SharedHeaderLanguages />
        </template>
      </li>
    </ul>
  </div>
</template>
