<template>
  <header class="absolute top-0 left-0 z-20 w-full py-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="logo w-[95px]">
          <nuxt-link to="/" class="flex w-full" aria-label="Airalo home">
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
