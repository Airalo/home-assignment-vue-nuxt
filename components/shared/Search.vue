<template>
  <div class="flex justify-start items-center rounded shadow p-1 bg-white relative">
    <input type="text" class="bg-transparent w-full h-[36px] px-4 text-normal leading-normal" readonly placeholder="Where are you going?" />
    <button type="button" class="flex justify-center items-center rounded-small bg-primary w-[36px] h-[36px] absolute right-1 top-1">
      <nuxt-icon
        name="search"
        class="flex justify-center items-start w-icon h-icon text-white text-icon overflow-hidden"
      />
    </button>
  </div>
</template>
