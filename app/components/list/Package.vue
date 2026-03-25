<script setup lang="ts">
  import type { StyleTheme } from '~/types';

  const props = defineProps<{
    packageName: string;
    supportedCountries: string | number;
    operatorImageUrl?: string;
    data: string;
    validity: string;
    price: number;
    styleTheme: StyleTheme;
    styleThemeGradient: string;
  }>();

  function countriesRow(): string {
    return typeof props.supportedCountries === 'string'
      ? props.supportedCountries
      : `${props.supportedCountries} Countries`;
  }

  function getPrice(): string {
    return `US$${props.price}`;
  }
</script>

<template>
  <div class="pt-5">
    <div class="flex flex-col rounded bg-white shadow" :style="`background-image: ${props.styleThemeGradient};`">
      <div class="relative flex items-center justify-between">
        <div class="flex flex-col items-start justify-start gap-1.5 px-5 pt-5">
          <h3
            class="text-h3 leading-h3 font-semibold tracking-h3"
            :class="[
              {
                'text-white': props.styleTheme === 'light',
              },
            ]"
          >
            {{ props.packageName }}
          </h3>
          <p
            class="text-h6 leading-h6 font-medium"
            :class="[
              {
                'text-white': props.styleTheme === 'light',
              },
            ]"
          >
            {{ countriesRow() }}
          </p>
        </div>
        <div class="country-flag-size -mt-5 mr-5 rounded-flag bg-white shadow-flag">
          <nuxt-img
            :src="operatorImageUrl ? operatorImageUrl : 'https://cdn.airalo.com/assets/images/svg/Logo_light.svg'"
            preload
            loading="lazy"
            width="140"
            height="88"
            alt="Airalo"
          />
        </div>
      </div>
      <div
        class="mt-5 border-t border-solid border-t-grey-package-dark/10"
        :class="[
          {
            'text-white': props.styleTheme === 'light',
          },
        ]"
      >
        <div
          class="flex items-center justify-between border-b border-solid px-5 pt-[18px] pb-[19px]"
          :class="[
            {
              'border-b-grey-package-dark/10': props.styleTheme === 'dark',
              'border-b-grey-package-light/10': props.styleTheme === 'light',
            },
          ]"
        >
          <div class="flex items-center justify-start">
            <Icon
              name="local:data"
              class="text-icon mr-2.5 flex h-icon w-icon items-start justify-center overflow-hidden"
            />
            <p class="text-row font-semibold tracking-row">DATA</p>
          </div>
          <div class="text-right">
            <p class="text-h4 leading-h4 tracking-h4">
              {{ props.data }}
            </p>
          </div>
        </div>
        <div
          class="flex items-center justify-between border-b border-solid px-5 pt-[18px] pb-[19px]"
          :class="[
            {
              'border-b-grey-package-dark/10': props.styleTheme === 'dark',
              'border-b-grey-package-light/10': props.styleTheme === 'light',
            },
          ]"
        >
          <div class="flex items-center justify-start">
            <Icon
              name="local:validity"
              class="text-icon mr-2.5 flex h-icon w-icon items-start justify-center overflow-hidden"
            />
            <p class="text-row font-semibold tracking-row">VALIDITY</p>
          </div>
          <div class="text-right">
            <p class="text-h4 leading-h4 tracking-h4">
              {{ props.validity }}
            </p>
          </div>
        </div>
      </div>
      <div class="p-5">
        <button
          type="button"
          class="text-CTA w-full rounded border border-solid px-5 py-[16px] pb-[15px] text-center leading-button font-semibold tracking-CTA"
          :class="[
            {
              'text-white': props.styleTheme === 'light',
              'border-primary': props.styleTheme === 'dark',
              'border-white': props.styleTheme === 'light',
            },
          ]"
        >
          {{ getPrice() }} - BUY NOW
        </button>
      </div>
    </div>
  </div>
</template>
