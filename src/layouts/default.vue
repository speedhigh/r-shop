<template>
  <div class="min-h-screen flex flex-col">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <LayoutHeader />
    </header>
    <main class="flex-1 pt-16">
      <router-view />
    </main>
    <footer
      aria-labelledby="footer-heading"
      class="border-t border-gray-100 bg-gray-50 text-center"
    >
      <LayoutCopyright />
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
