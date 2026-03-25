<script setup lang="ts">
  import type { StyleTheme } from '~/types';

  interface CountryDataProp {
    title: string;
    imageUrl: string;
  }

  interface PackageDataProp {
    packageName: string;
    supportedCountries: string | number;
    data: string;
    validity: string;
    price: number;
    styleTheme: StyleTheme;
    styleThemeGradient: string;
    operatorImageUrl: string;
  }

  const props = withDefaults(
    defineProps<{
      countryData?: CountryDataProp | null;
      packageData: PackageDataProp;
    }>(),
    {
      countryData: null,
    }
  );
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-2.5">
      <template v-if="props.countryData">
        <div>
          <ListCountry :country-name="countryData.title" :image-url="countryData.imageUrl" :active="false" />
        </div>
      </template>

      <div class="py-5">
        <div class="grid grid-cols-3 gap-7.5">
          <div>
            <ListPackage
              :package-name="packageData.packageName"
              :supported-countries="packageData.supportedCountries"
              :data="packageData.data"
              :validity="packageData.validity"
              :price="packageData.price"
              :style-theme="packageData.styleTheme"
              :style-theme-gradient="packageData.styleThemeGradient"
              :operator-image-url="packageData.operatorImageUrl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
