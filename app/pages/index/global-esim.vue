<script setup lang="ts">
const config = useRuntimeConfig();

const preloader = false;

const MockPackageData = {
  id: 2967,
  slug: "discover-global-7days-1gb",
  type: "sim",
  price: 9,
  title: "1 GB - 7 Days",
  data: "1 GB",
  validity: "7 Days",
  day: 7,
  amount: 1024,
  operator: {
    id: 444,
    title: "Discover Global",
    style: "light",
    gradient_start: "#07053F",
    gradient_end: "#0988A3",
    type: "global",
    image: {
      width: 1035,
      height: 653,
      url: "https://cdn.airalo.com/images/d865b069-0351-48d0-a3c3-1a4e8e87bbce.png",
    },
    countries: [
      {
        id: 6,
        slug: "albania",
        title: "Albania",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/dd9baa70-5d51-4a6a-8673-95e09c2acef1.png",
        },
      },
      {
        id: 9,
        slug: "argentina",
        title: "Argentina",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/75da515f-095b-42ed-9d5c-aaad284f5573.png",
        },
      },
      {
        id: 15,
        slug: "australia",
        title: "Australia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/26c25fca-bce9-4709-aae6-67cfb215f015.png",
        },
      },
      {
        id: 16,
        slug: "austria",
        title: "Austria",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/023edb34-be31-4e78-a9fa-b971cd521b71.png",
        },
      },
      {
        id: 17,
        slug: "azerbaijan",
        title: "Azerbaijan",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/fc7dafdf-dbc3-4f1e-8c03-3a8dea176b55.png",
        },
      },
      {
        id: 29,
        slug: "belarus",
        title: "Belarus",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8757701b-60e5-4e24-bc50-3219b56cda98.png",
        },
      },
      {
        id: 19,
        slug: "belgium",
        title: "Belgium",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/eb17a20d-9ce3-4348-ac39-f7f47f5294ab.png",
        },
      },
      {
        id: 27,
        slug: "bosnia-and-herzegovina",
        title: "Bosnia and Herzegovina",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/4df8b5f8-4476-4fb0-8921-ed70fb0de01d.png",
        },
      },
      {
        id: 33,
        slug: "brazil",
        title: "Brazil",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/e48e0f4a-d84b-4729-af67-17f5a3faed88.png",
        },
      },
      {
        id: 24,
        slug: "bulgaria",
        title: "Bulgaria",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/22a42cdc-adc8-40c9-808c-a927a28ca5ec.png",
        },
      },
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
        id: 40,
        slug: "canada",
        title: "Canada",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/315128d1-0671-4648-b13d-bf9614cd0a15.png",
        },
      },
      {
        id: 43,
        slug: "chile",
        title: "Chile",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/3d52aec7-4b3c-4342-bfd1-17533eb6cd1f.png",
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
        id: 50,
        slug: "colombia",
        title: "Colombia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/db651b86-e7dc-4952-ad86-1a8d603a5113.png",
        },
      },
      {
        id: 100,
        slug: "croatia",
        title: "Croatia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/3c8c3274-b2c9-46cf-8343-4a84c9befa76.png",
        },
      },
      {
        id: 58,
        slug: "cyprus",
        title: "Cyprus",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/f3536420-3b43-4788-812c-f8f5110696b2.png",
        },
      },
      {
        id: 59,
        slug: "czech-republic",
        title: "Czech Republic",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/069d9f00-5473-42c0-b9df-de6f6075f72b.png",
        },
      },
      {
        id: 63,
        slug: "denmark",
        title: "Denmark",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/7ece4b4b-c8ea-4774-8a9d-34eb79d82fe9.png",
        },
      },
      {
        id: 64,
        slug: "dominican-republic",
        title: "Dominican Republic",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/ef7845d2-9512-4f98-9469-323c3bc7c6cc.png",
        },
      },
      {
        id: 66,
        slug: "ecuador",
        title: "Ecuador",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/6d101c12-e868-4b74-ad1c-98725b440f89.png",
        },
      },
      {
        id: 71,
        slug: "estonia",
        title: "Estonia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/1227d29d-83ca-4dba-a612-65fd35eb06fe.png",
        },
      },
      {
        id: 73,
        slug: "finland",
        title: "Finland",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/32b204d5-2f87-47ea-950e-17febd4e6318.png",
        },
      },
      {
        id: 76,
        slug: "france",
        title: "France",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/9753dedb-d495-47cf-b6e4-82e555564743.png",
        },
      },
      {
        id: 81,
        slug: "georgia",
        title: "Georgia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/df462f12-460f-408c-95d7-3d3b778ebafd.png",
        },
      },
      {
        id: 60,
        slug: "germany",
        title: "Germany",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/9ca59255-4cf9-4f8b-8903-4f8ea02707b4.png",
        },
      },
      {
        id: 84,
        slug: "gibraltar",
        title: "Gibraltar",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/35e9bf4f-880f-4e0d-942a-d2b15771d148.png",
        },
      },
      {
        id: 90,
        slug: "greece",
        title: "Greece",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/65af3687-eb47-4ab9-b995-338fa5ff4888.png",
        },
      },
      {
        id: 102,
        slug: "hungary",
        title: "Hungary",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/fec13f83-fa8f-472d-b68a-cf4e5356dcc5.png",
        },
      },
      {
        id: 110,
        slug: "iceland",
        title: "Iceland",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/b12ce2dc-1c2a-46e3-b80e-896032b08410.png",
        },
      },
      {
        id: 105,
        slug: "india",
        title: "India",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/054cac1d-abf6-4d8a-82e3-a5e16271b782.png",
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
        id: 109,
        slug: "iraq",
        title: "Iraq",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/95581a79-5b4b-4228-8625-914db76c9984.png",
        },
      },
      {
        id: 107,
        slug: "ireland",
        title: "Ireland",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8c7d9b08-9340-4904-b7ed-72db4f873811.png",
        },
      },
      {
        id: 111,
        slug: "israel",
        title: "Israel",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/ed7d9c5c-d2fc-4954-9891-ed0e565151b0.png",
        },
      },
      {
        id: 112,
        slug: "italy",
        title: "Italy",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/5d7cdb58-591c-45d6-a9d1-050829acd0ab.png",
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
        id: 114,
        slug: "jersey",
        title: "Jersey",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/460250fb-e14b-4fbf-8803-d0545dfd0790.png",
        },
      },
      {
        id: 254,
        slug: "kosovo",
        title: "Kosovo",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/55c9af61-765d-40e1-b489-62dbb6384532.png",
        },
      },
      {
        id: 124,
        slug: "kuwait",
        title: "Kuwait",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/16d2adf6-cc56-400d-a793-a8fe50c7aa8e.png",
        },
      },
      {
        id: 135,
        slug: "latvia",
        title: "Latvia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/edc21a62-1413-441c-b29a-49e90c7c3131.png",
        },
      },
      {
        id: 130,
        slug: "liechtenstein",
        title: "Liechtenstein",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/01e13284-1ee3-4bde-8728-637f3cc2c146.png",
        },
      },
      {
        id: 133,
        slug: "lithuania",
        title: "Lithuania",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/701ff61b-0bbc-42d8-88f6-d69a438e529a.png",
        },
      },
      {
        id: 134,
        slug: "luxembourg",
        title: "Luxembourg",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/dd0a715d-f3cd-472f-856a-52e63e6444d7.png",
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
        id: 147,
        slug: "malta",
        title: "Malta",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8d558a3e-afed-4525-b2b6-4b5fae3e3f3b.png",
        },
      },
      {
        id: 143,
        slug: "mexico",
        title: "Mexico",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/182d93cc-bbff-4573-865e-cdee85bdd385.png",
        },
      },
      {
        id: 140,
        slug: "moldova",
        title: "Moldova",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/323da3ea-3ae2-4347-9010-a56bda4a8543.png",
        },
      },
      {
        id: 149,
        slug: "montenegro",
        title: "Montenegro",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/3877dc5e-8910-4bef-835a-21472d83dc24.png",
        },
      },
      {
        id: 167,
        slug: "netherlands",
        title: "Netherlands",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8065738e-1150-4754-8ce0-602319c34f49.png",
        },
      },
      {
        id: 171,
        slug: "new-zealand",
        title: "New Zealand",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/7a60e41c-28ea-48ee-8868-0b6b8e652be3.png",
        },
      },
      {
        id: 145,
        slug: "macedonia",
        title: "North Macedonia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/ce2fc94d-9ef9-4dab-9bee-9df1911654a3.png",
        },
      },
      {
        id: 168,
        slug: "norway",
        title: "Norway",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/2ff410ea-efe4-4bec-86f5-b68fdca26c97.png",
        },
      },
      {
        id: 174,
        slug: "panama",
        title: "Panama",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/4c5e5c22-98e8-429a-be4f-8ab77aced262.png",
        },
      },
      {
        id: 184,
        slug: "paraguay",
        title: "Paraguay",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/a0e77eba-7f0d-4ae2-a175-1ca3a178fac2.png",
        },
      },
      {
        id: 176,
        slug: "peru",
        title: "Peru",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/c8d6c854-1f80-4b21-868d-5cab4a2b5bf5.png",
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
        id: 180,
        slug: "poland",
        title: "Poland",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/c318a1fc-9d60-46a6-b37b-f95ddc2f5a76.png",
        },
      },
      {
        id: 183,
        slug: "portugal",
        title: "Portugal",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/2f64f4df-6d31-4f06-8ec7-6b9cc9d04187.png",
        },
      },
      {
        id: 181,
        slug: "puerto-rico",
        title: "Puerto Rico",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/660f699e-235f-49c0-9408-4857ee8215ef.png",
        },
      },
      {
        id: 187,
        slug: "qatar",
        title: "Qatar",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/6b4ae3c2-835d-4e9e-ba4c-41a61c8283af.png",
        },
      },
      {
        id: 189,
        slug: "romania",
        title: "Romania",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/411e04c4-0351-4efe-a314-81909eb059e7.png",
        },
      },
      {
        id: 190,
        slug: "russia",
        title: "Russia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/6c8ae3ca-20a6-44ee-afd6-7e74110c5088.png",
        },
      },
      {
        id: 192,
        slug: "saudi-arabia",
        title: "Saudi Arabia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/dd03dc23-4fee-42f7-8c7f-8a8d40dc3789.png",
        },
      },
      {
        id: 205,
        slug: "serbia",
        title: "Serbia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/f65097e5-710a-48b3-aae2-524709fb2951.png",
        },
      },
      {
        id: 209,
        slug: "slovakia",
        title: "Slovakia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/424c46c5-442d-4ef1-90a6-e9f00418fa80.png",
        },
      },
      {
        id: 210,
        slug: "slovenia",
        title: "Slovenia",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/ef47a68f-3a90-48c1-81f4-8107c92d1f40.png",
        },
      },
      {
        id: 247,
        slug: "south-africa",
        title: "South Africa",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/44b29a31-1728-4a33-86dc-11ca4ca2d456.png",
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
        id: 70,
        slug: "spain",
        title: "Spain",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/c9c87a09-69f5-4c5c-8d20-633539ab5aca.png",
        },
      },
      {
        id: 131,
        slug: "sri-lanka",
        title: "Sri Lanka",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/dd023c08-dc4c-462b-9247-a06bd8ec38f0.png",
        },
      },
      {
        id: 193,
        slug: "sudan",
        title: "Sudan",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/5d442a94-39e9-4d25-bf1c-396788c49065.png",
        },
      },
      {
        id: 211,
        slug: "sweden",
        title: "Sweden",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/b0b6f0ab-6c53-4049-92b2-d5c11c91fa23.png",
        },
      },
      {
        id: 42,
        slug: "switzerland",
        title: "Switzerland",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/4d764558-3365-4757-8360-a5cd7cfa4ab7.png",
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
        id: 220,
        slug: "tajikistan",
        title: "Tajikistan",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/69d4fb79-7de6-473b-ac47-40f0d0759bed.png",
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
        id: 227,
        slug: "turkey",
        title: "Turkey",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/8efbff32-b788-4098-a957-7fc4b9febb50.png",
        },
      },
      {
        id: 80,
        slug: "united-kingdom",
        title: "United Kingdom",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/38db53aa-6e44-4e65-a106-9465b8e25182.png",
        },
      },
      {
        id: 235,
        slug: "united-states",
        title: "United States",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/600de234-ec12-4e1f-b793-c70860e4545a.png",
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
      {
        id: 241,
        slug: "virgin-islands",
        title: "Virgin Islands (U.S.)",
        image: {
          width: 132,
          height: 99,
          url: "https://cdn.airalo.com/images/9009783d-48b1-4d46-87dc-68923796f264.png",
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

    <!-- Mock View Start: Mock View of Country and Package components. This components should be removed. -->
    <SharedExampleView
      :CountryData="null"
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
