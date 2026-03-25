<template>
  <div>
    <div class="relative z-10">
      <SharedHero>
        <template v-slot>
          <div class="h-[44px]">
            <SharedSearch />
          </div>
        </template>
      </SharedHero>
    </div>

    <div class="container mx-auto relative z-20 -mt-[22px]">
      <div class="grid grid-cols-12 gap-7.5">
        <div class="col-span-4 col-start-5">
          <SharedTabs />
        </div>
      </div>
    </div>

    <div class="py-10">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
export default {};
</script>
