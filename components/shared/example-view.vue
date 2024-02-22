<script setup lang="ts">
export interface Props {
  CountryData?: any;
  PackageData: any;
}

const props = withDefaults(defineProps<Props>(), {
  CountryData: null,
});
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-2.5">
      <template v-if="props.CountryData">
        <div>
          <ListCountry
            :CountryName="CountryData.title"
            :ImageUrl="CountryData.imageUrl"
            :Active="false"
          />
        </div>
      </template>

      <div class="py-5">
        <div class="grid grid-cols-3 gap-7.5">
          <div>
            <ListPackage
              :PackageName="PackageData.packageName"
              :SupportedCountries="PackageData.supportedCountries"
              :Data="PackageData.data"
              :Validity="PackageData.validity"
              :Price="PackageData.price"
              :StyleTheme="PackageData.styleTheme"
              :StyleThemeGradient="PackageData.styleThemeGradient"
              :OperatorImageUrl="PackageData.operatorImageUrl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
