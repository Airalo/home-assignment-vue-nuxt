<script setup lang="ts">
  const navigation = [
    {
      key: 'auth',
    },
    {
      key: 'language',
    },
  ];
</script>

<template>
  <div class="flex items-center justify-end">
    <ul class="flex items-center justify-end">
      <li
        v-for="(nav, index) in navigation"
        :key="`nav-item-${index}`"
        class="flex items-center justify-end"
        :class="[
          {
            'mr-[30px] border-r border-solid border-white pr-[30px]': index < navigation.length - 1,
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
