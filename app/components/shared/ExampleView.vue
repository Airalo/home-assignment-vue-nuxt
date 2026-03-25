<script setup lang="ts">
  export interface Props {
    countryData?: any;
    packageData: any;
  }

  const props = withDefaults(defineProps<Props>(), {
    countryData: null,
  });
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
