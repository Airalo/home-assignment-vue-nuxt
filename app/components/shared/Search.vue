<template>
  <div class="relative flex items-center justify-start rounded bg-white p-1 shadow">
    <label for="search-input" class="sr-only">Search</label>
    <input
      id="search-input"
      type="text"
      class="text-normal h-[36px] w-full bg-transparent px-4 leading-normal"
      readonly
      placeholder="Where are you going?"
    />
    <button
      type="button"
      class="absolute top-1 right-1 flex h-[36px] w-[36px] items-center justify-center rounded-small bg-primary"
    >
      <Icon
        name="local:search"
        class="text-icon flex h-icon w-icon items-start justify-center overflow-hidden text-white"
      />
    </button>
  </div>
</template>
