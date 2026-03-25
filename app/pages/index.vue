<script>
  export default {};
</script>

<template>
  <div>
    <div class="relative z-10">
      <SharedHero>
        <template #default>
          <div class="h-[44px]">
            <SharedSearch />
          </div>
        </template>
      </SharedHero>
    </div>

    <div class="relative z-20 container mx-auto -mt-[22px]">
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
