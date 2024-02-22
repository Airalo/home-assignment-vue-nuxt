<script setup lang="ts">
const footerMenu = [
  {
    title: "Popular Countries",
    links: [
      {
        title: "United States",
      },
      {
        title: "United Arab Emirates",
      },
      {
        title: "United Kingdom",
      },
      {
        title: "France",
      },
      {
        title: "Japan",
      },
      {
        title: "Spain",
      },
      {
        title: "Thailand",
      },
      {
        title: "Italy",
      },
      {
        title: "India",
      },
    ],
  },
  {
    title: "Partner with Us",
    links: [
      {
        title: "Airalo Partner Hub",
      },
      {
        title: "Affiliate Partners",
      },
      {
        title: "Distribution Partners",
      },
      {
        title: "API Partners",
      },
      {
        title: "Airalo for Corporates",
      },
      {
        title: "Partner Login",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        title: "About Airalo",
      },
      {
        title: "Impact",
      },
    ],
  },
  {
    title: "More Info",
    links: [
      {
        title: "Help Center",
      },
      {
        title: "Contact Us",
      },
      {
        title: "Blog",
      },
      {
        title: "Referral",
      },
    ],
  },
  {
    title: "Airalo Careers",
    links: [
      {
        title: "Working at Airalo",
      },
      {
        title: "Job Vacancies",
      },
    ],
  },
];

const footerBottomLinks = {
  class: "text-row font-semibold tracking-row",
  links: [
    {
      title: "COPYRIGHT © 2023 AIRALO",
      route: "nolink",
    },
    {
      title: "PRIVACY POLICY",
      route: "#",
    },
    {
      title: "TERMS & CONDITIONS",
      route: "#",
    },
  ],
};

const socialLinks = {
  class: "flex justify-center items-center",
  links: [
    {
      icon: "vk",
      route: "#",
    },
    {
      icon: "instagram",
      route: "#",
    },
    {
      icon: "twitter",
      route: "#",
    },
    {
      icon: "linkedin",
      route: "#",
    },
  ],
};
</script>

<template>
  <footer class="mt-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-6 gap-7.5">
        <div class="">
          <div class="logo w-[95px]">
            <nuxt-link to="/" class="flex w-full">
              <nuxt-img
                src="https://cdn.airalo.com/assets/images/svg/Footer-Logo-Horizontal.svg"
                preload
                loading="lazy"
                width="95"
                height="28"
                alt="Airalo"
              />
            </nuxt-link>
          </div>
          <p class="text-small text-secondary mt-5">
            Airalo is the world’s first eSIM store that solves the pain of high
            roaming bills by giving you access to 200+ eSIMs (digital SIM cards)
            globally at affordable prices.
          </p>
        </div>
        <div v-for="(col, index) in footerMenu" :key="`footer-col-${index}`">
          <p class="text-normal leading-normal font-medium">{{ col.title }}</p>
          <ul class="mt-2.5">
            <li
              v-for="(item, itemIndex) in col.links"
              :key="`footer-col-${index}-item-${itemIndex}`"
              class="mt-2.5"
            >
              <a href="#" class="text-small text-secondary">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-10 border-t border-solid border-t-grey py-5 flex justify-between items-center"
      >
        <ul class="inline-flex justify-start items-center gap-5">
          <li
            v-for="(link, index) in footerBottomLinks.links"
            :key="`footer-bottom-link-${index}`"
          >
            <template v-if="link.route !== 'nolink'">
              <a :href="link.route" :class="footerBottomLinks.class">{{
                link.title
              }}</a>
            </template>
            <template v-else>
              <p :class="footerBottomLinks.class">{{ link.title }}</p>
            </template>
          </li>
        </ul>
        <div class="flex justify-end items-center">
          <p class="text-row font-semibold tracking-row mr-5">FOLLOW US:</p>
          <ul class="inline-flex justify-start items-center gap-5">
            <li
              v-for="(link, index) in socialLinks.links"
              :key="`footer-bottom-link-${index}`"
            >
              <a :href="link.route" :class="socialLinks.class">
                <nuxt-icon :name="link.icon" class="text-icon" :filled="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
