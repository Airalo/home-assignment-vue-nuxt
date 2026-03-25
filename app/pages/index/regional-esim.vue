<script setup lang="ts">
const config = useRuntimeConfig();

const preloader = false;

const MockRegionData = {
  id: 1,
  slug: "asia",
  title: "Asia",
  image: {
    width: 132,
    height: 99,
    url: "https://cdn.airalo.com/images/6dd3b91a-c76a-4ca6-8eb9-ccf989eccac3.png",
  },
  seo: null,
  package_count: 6,
};

const MockPackageData = {
  id: 4275,
  slug: "asialink-7days-1gb",
  type: "sim",
  price: 5,
  title: "1 GB - 7 Days",
  data: "1 GB",
  validity: "7 Days",
  day: 7,
  amount: 1024,
  operator: {
    id: 637,
    title: "Asialink",
    style: "dark",
    gradient_start: "#ffe6d2",
    gradient_end: "#ffdcc2",
    type: "global",
    image: {
      width: 1035,
      height: 653,
      url: "https://cdn.airalo.com/images/25f852c3-cb63-4510-8121-28f36a7c6d20.png",
    },
    countries: [
      {
        id: 120,
        slug: "cambodia",
        title: "Cambodia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8e33c874-04ba-495b-907d-befd8646976a.png",
        },
      },
      {
        id: 44,
        slug: "china",
        title: "China",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/301616a0-cd3e-4151-a4ec-78c8ddb04ca9.png",
        },
      },
      {
        id: 97,
        slug: "hong-kong",
        title: "China (Hong Kong)",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/e6694469-0a21-4019-9c14-8a4702a405ba.png",
        },
      },
      {
        id: 136,
        slug: "macao",
        title: "China (Macao)",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/cb8614ac-fd38-4ed4-9462-808eefe9858a.png",
        },
      },
      {
        id: 103,
        slug: "indonesia",
        title: "Indonesia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/08c0ce67-64b4-44d3-920c-ba80dd036151.png",
        },
      },
      {
        id: 116,
        slug: "japan",
        title: "Japan",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/991049be-2b25-4e87-bca7-b93e8bbd1b77.png",
        },
      },
      {
        id: 125,
        slug: "laos",
        title: "Laos",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/730d0822-531f-4dc1-8139-20a91460fd29.png",
        },
      },
      {
        id: 158,
        slug: "malaysia",
        title: "Malaysia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8e2088a7-1ec8-4041-ab73-d5c1033bd3f2.png",
        },
      },
      {
        id: 177,
        slug: "philippines",
        title: "Philippines",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/0218dc2f-e698-4acf-b74d-2b7be5de2da0.png",
        },
      },
      {
        id: 182,
        slug: "south-korea",
        title: "South Korea",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/5ca62bc0-9108-42c4-b45c-a35ad58c75df.png",
        },
      },
      {
        id: 229,
        slug: "taiwan",
        title: "Taiwan",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/5592454e-3d9a-40bc-aa0c-97895974ba34.png",
        },
      },
      {
        id: 219,
        slug: "thailand",
        title: "Thailand",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/b980ec51-80de-4311-bc41-606e91752460.png",
        },
      },
      {
        id: 242,
        slug: "vietnam",
        title: "Vietnam",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/801dd2cd-d1de-45a3-9869-c6d453145f38.png",
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
      <h2 class="text-h2 leading-h2 tracking-h2 font-semibold">Regions</h2>
    </div>

    <!-- Mock View Start: Mock View of Country and Package components. This components should be removed. -->
    <SharedExampleView
      :CountryData="{
        title: MockRegionData.title,
        imageUrl: MockRegionData.image.url,
      }"
      :PackageData="{
        packageName: MockPackageData.operator.title,
        supportedCountries: MockPackageData.operator.countries.length,
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
