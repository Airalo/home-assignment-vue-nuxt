<script setup lang="ts">
const props = defineProps<{
  PackageName: string;
  SupportedCountries: string | number;
  OperatorImageUrl?: string;
  Data: any;
  Validity: any;
  Price: number;
  StyleTheme: string; // dark, light
  StyleThemeGradient: string;
}>();

function countriesRow() {
  return typeof props.SupportedCountries === "string"
    ? props.SupportedCountries
    : `${props.SupportedCountries} Countries`;
}

function getPrice() {
  return `US$${props.Price}`;
}
</script>

<template>
  <div class="pt-5">
    <div
      class="flex flex-col rounded shadow bg-white"
      :style="`background-image: ${props.StyleThemeGradient};`"
    >
      <div class="relative flex justify-between items-center">
        <div class="flex flex-col items-start justify-start gap-1.5 pt-5 px-5">
          <h3
            :class="[
              'text-h3 leading-h3 tracking-h3 font-semibold',
              {
                'text-white': props.StyleTheme === 'light',
              },
            ]"
          >
            {{ props.PackageName }}
          </h3>
          <p
            :class="[
              'text-h6 leading-h6 font-medium',
              {
                'text-white': props.StyleTheme === 'light',
              },
            ]"
          >
            {{ countriesRow() }}
          </p>
        </div>
        <div
          class="country-flag-size rounded-flag shadow-flag mr-5 -mt-5 bg-white"
        >
          <nuxt-img
            :src="
              OperatorImageUrl
                ? OperatorImageUrl
                : 'https://cdn.airalo.com/assets/images/svg/Logo_light.svg'
            "
            preload
            loading="lazy"
            width="140"
            height="88"
            alt="Airalo"
          />
        </div>
      </div>
      <div
        :class="[
          'border-t border-solid border-t-grey-package-dark/10 mt-5',
          {
            'text-white': props.StyleTheme === 'light',
          },
        ]"
      >
        <div
          :class="[
            'flex justify-between items-center pt-[18px] pb-[19px] px-5 border-b border-solid',
            {
              'border-b-grey-package-dark/10': props.StyleTheme === 'dark',
              'border-b-grey-package-light/10': props.StyleTheme === 'light',
            },
          ]"
        >
          <div class="flex justify-start items-center">
            <nuxt-icon
              :name="'data'"
              class="flex justify-center items-start w-icon h-icon text-icon overflow-hidden mr-2.5"
            />
            <p class="text-row tracking-row font-semibold">DATA</p>
          </div>
          <div class="text-right">
            <p class="text-h4 leading-h4 tracking-h4">{{ props.Data }}</p>
          </div>
        </div>
        <div
          :class="[
            'flex justify-between items-center pt-[18px] pb-[19px] px-5 border-b border-solid',
            {
              'border-b-grey-package-dark/10': props.StyleTheme === 'dark',
              'border-b-grey-package-light/10': props.StyleTheme === 'light',
            },
          ]"
        >
          <div class="flex justify-start items-center">
            <nuxt-icon
              :name="'validity'"
              class="flex justify-center items-start w-icon h-icon text-icon overflow-hidden mr-2.5"
            />
            <p class="text-row tracking-row font-semibold">VALIDITY</p>
          </div>
          <div class="text-right">
            <p class="text-h4 leading-h4 tracking-h4">{{ props.Validity }}</p>
          </div>
        </div>
      </div>
      <div class="p-5">
        <button
          type="button"
          :class="[
            'border border-solid rounded text-center w-full px-5 py-[16px] pb-[15px] text-CTA leading-button tracking-CTA font-semibold',
            {
              'text-white': props.StyleTheme === 'light',
              'border-primary': props.StyleTheme === 'dark',
              'border-white': props.StyleTheme === 'light',
            },
          ]"
        >
          {{ getPrice() }} - BUY NOW
        </button>
      </div>
    </div>
  </div>
</template>

//EEEEEE
