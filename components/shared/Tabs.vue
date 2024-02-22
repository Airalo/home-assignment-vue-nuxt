<script setup lang="ts">
const tabs = {
  itemClass:
    "text-normal leading-tabs text-grey-light font-medium text-center rounded-small flex justify-center items-center h-[28px]",
  list: [
    {
      route: "/",
      text: "Local",
    },
    {
      route: "/regional-esim",
      text: "Regional",
    },
    {
      route: "/global-esim",
      text: "Global",
    },
  ],
};

const routePath = computed(() => {
  return useRoute().path;
});
</script>

<template>
  <div class="px-2.5 py-2 rounded bg-white shadow w-full">
    <div class="grid grid-cols-3">
      <nuxt-link
        v-for="(tab, index) in tabs.list"
        :key="`tab-item-${index}`"
        :to="tab.route"
        :class="[
          tabs.itemClass,
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
