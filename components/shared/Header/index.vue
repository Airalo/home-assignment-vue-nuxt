<template>
  <header class="absolute left-0 top-0 w-full py-10 z-20">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="logo w-[95px]">
          <nuxt-link to="/" class="flex w-full">
            <nuxt-img
              src="https://cdn.airalo.com/assets/images/svg/Logo_light.svg"
              preload
              loading="lazy"
              width="95"
              height="28"
              alt="Airalo"
            />
          </nuxt-link>
        </div>
        <SharedHeaderNavigation />
      </div>
    </div>
  </header>
</template>
