<template>
  <div class="layout">
    <SharedHeader />
    <div class="relative z-10">
      <slot />
    </div>
    <div>
      <SharedAppStoreBanner />
    </div>
    <SharedFooter />
  </div>
</template>
