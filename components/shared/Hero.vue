<template>
  <div class="hero relative h-[calc(100vw/3)] h-[467px] pt-[6.75rem]">
    <div class="container mx-auto relative z-20 h-full">
      <div class="flex justify-center items-center h-full">
        <div class="grid xl:grid-cols-12 gap-7.5">
          <div class="col-span-6 col-start-4">
            <h1 class="text-h1 leading-h1 font-semibold text-white text-center">
              Digital SIM cards (eSIM) to save you from expensive roaming
            </h1>
            <p class="text-normal leading-normal text-white text-center mt-2.5">
              100% prepaid data packs with no hidden fees.
              <span class="underline">Learn more</span>
            </p>
            <div class="grid grid-cols-6 gap-7.5">
              <div class="col-span-4 col-start-2 py-10">
                <slot></slot>
              </div>
            </div>
            <div class="text-center">
              <p class="text-h4 leading-h4 font-medium text-white">
                Is your device eSIM compatible?
              </p>
              <button
                class="text-CTA-small leading-button font-bold text-white border border-solid border-white rounded-small px-5 py-2 mt-5"
              >
                SHOW SUPPORTED DEVICES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute left-0 top-0 w-full h-full overflow-hidden z-10">
      <nuxt-img
        src="/images/hero@2x.webp"
        loading="lazy"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-auto z-10"
      />
      <div
        class="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-20"
      ></div>
    </div>
  </div>
</template>
