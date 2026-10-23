<script setup lang="ts">
  const props = defineProps<{
    countryName: string;
    active: boolean;
    imageUrl?: string;
  }>();
</script>

<template>
  <div>
    <div class="flex cursor-pointer items-center justify-start rounded px-5 py-4 shadow">
      <nuxt-img
        :src="props.imageUrl ? props.imageUrl : 'https://cdn.airalo.com/assets/images/svg/Logo_light.svg'"
        width="37"
        height="28"
        :alt="props.countryName"
        loading="lazy"
        class="mr-5"
      />
      <p class="text-normal leading-tabs font-medium">
        {{ countryName }}
      </p>
      <div
        class="ml-auto"
        :class="[
          {
            'text-grey': !active,
            'text-primary': active,
          },
        ]"
      >
        <Icon
          :name="!active ? 'local:arrow_close' : 'local:arrow_open'"
          class="text-icon flex h-icon w-icon items-center justify-center overflow-hidden"
        />
      </div>
    </div>
  </div>
</template>
