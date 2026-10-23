<script setup lang="ts">
  import type { TabItem } from '~/types';

  const itemClass =
    'text-normal leading-tabs text-grey-light font-medium text-center rounded-small flex justify-center items-center h-[28px]';

  const tabs: TabItem[] = [
    { route: '/', text: 'Local' },
    { route: '/regional-esim', text: 'Regional' },
    { route: '/global-esim', text: 'Global' },
  ];

  const routePath = computed<string>(() => {
    return useRoute().path;
  });
</script>

<template>
  <div class="w-full rounded bg-white px-2.5 py-2 shadow">
    <div class="grid grid-cols-3">
      <nuxt-link
        v-for="(tab, index) in tabs"
        :key="`tab-item-${index}`"
        :to="tab.route"
        :class="[
          itemClass,
          {
            'bg-primary text-white': tab.route === routePath,
          },
        ]"
      >
        {{ tab.text }}
      </nuxt-link>
    </div>
  </div>
</template>
