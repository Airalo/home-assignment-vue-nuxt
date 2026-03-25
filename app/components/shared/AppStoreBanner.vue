<template>
  <div class="bg-white py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-7.5">
        <div class="col-span-5 flex flex-col justify-center items-start">
          <h2 class="text-h1 leading-h1 tracking-h1 font-semibold">
            Ready to try eSIMs and change the way you stay connected?
          </h2>
          <p class="text-normal leading-normal mt-2.5">
            Download the Airalo app to purchase, manage, and top up your eSIMs
            anytime, anywhere!
          </p>
          <div class="mt-5">
            <div class="flex justify-start items-center gap-5">
              <nuxt-img
                src="https://cdn.airalo.com/assets/images/svg/Apple-AppStore.svg"
                alt=""
                height="44"
                class="h-[44px]"
                preload
                loading="lazy"
              />
              <nuxt-img
                src="https://lh3.googleusercontent.com/RyLoNcOmb91IxHIP9NWfC82chbsCsT-5R25efns1FmuM8xz6znE4CRjIEBosZ1FH2xG1UqH6Axyp-vPFnm4sazbrsaB-S0QT_cN9uWU9UKoSQYCjYQ=s0"
                alt=""
                height="44"
                class="h-[44px]"
                preload
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="col-span-5 col-start-8">
          <nuxt-img
            src="https://cdn.airalo.com/assets/images/Download-Airalo-New-One.png"
            alt=""
            class="w-full"
            preload
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStoreBanner",
};
</script>
