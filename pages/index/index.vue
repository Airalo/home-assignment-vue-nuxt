<script setup lang="ts">
const config = useRuntimeConfig();

const isPopuplarCountries = true;

const preloader = false;

const MockCountryData = {
  id: 195,
  slug: "singapore",
  title: "Singapore",
  image: {
    width: 132,
    height: 99,
    url: "https://cdn.airalo.com/images/6474790d-63af-4344-bc0e-9c0e80996c68.png",
  },
  seo: null,
  package_count: 5,
};

const MockPackageData = {
  id: 4149,
  slug: "connect-lah-7days-1gb",
  type: "sim",
  price: 7.5,
  title: "1 GB - 7 Days",
  data: "1 GB",
  validity: "7 Days",
  day: 7,
  amount: 1024,
  operator: {
    id: 621,
    title: "Connect Lah!",
    style: "light",
    gradient_start: "#8897ff",
    gradient_end: "#ced9fd",
    type: "local",
    image: {
      width: 1035,
      height: 653,
      url: "https://cdn.airalo.com/images/21e80f3f-f3c9-4b2f-a87d-f615fba6301f.png",
    },
    countries: [
      {
        id: 195,
        slug: "singapore",
        title: "Singapore",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/6474790d-63af-4344-bc0e-9c0e80996c68.png",
        },
      },
    ],
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div v-if="preloader">
      <SharedPreloader />
    </div>
    <div class="mb-5">
      <h2 class="text-h2 leading-h2 tracking-h2 font-semibold">
        {{ isPopuplarCountries ? "Popular" : "All" }} Countries
      </h2>
    </div>
    <!-- Mock View Start: Mock View of Country and Package components. This components should be removed. -->
    <SharedExampleView
      :CountryData="{
        title: MockCountryData.title,
        imageUrl: MockCountryData.image.url,
      }"
      :PackageData="{
        packageName: MockPackageData.operator.title,
        supportedCountries: MockPackageData.operator.countries[0].title,
        data: MockPackageData.data,
        validity: MockPackageData.validity,
        price: MockPackageData.price,
        styleTheme: MockPackageData.operator.style,
        styleThemeGradient: `linear-gradient(90deg, ${MockPackageData.operator.gradient_start} 0%, ${MockPackageData.operator.gradient_end} 100%);`,
        operatorImageUrl: MockPackageData.operator.image.url,
      }"
    />
    <!-- Mock View End -->

    <!-- You need to develop here -->
  </div>
</template>
