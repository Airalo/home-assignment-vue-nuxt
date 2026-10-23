<script setup lang="ts">
  interface LanguageConfig {
    icon: string;
    iconRight: string;
    class: string;
    text: string;
  }

  const Language: LanguageConfig = {
    icon: 'language',
    iconRight: 'arrow_down',
    class: 'text-normal leading-normal text-white',
    text: 'English',
  };
</script>

<template>
  <div class="inline-flex items-center justify-end">
    <Icon
      :name="`local:${Language.icon}`"
      class="text-icon mr-2.5 flex h-icon w-icon items-start justify-center overflow-hidden text-white"
    />

    <a :class="Language.class" href="#">
      {{ Language.text }}
    </a>

    <a class="flex h-[22px] w-[22px] items-center justify-center" href="#" aria-label="Language selector">
      <Icon
        :name="`local:${Language.iconRight}`"
        class="text-icon-small flex h-icon w-icon items-center justify-center overflow-hidden text-white"
      />
    </a>
  </div>
</template>
