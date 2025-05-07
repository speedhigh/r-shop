<template>
  <section aria-labelledby="favorites-heading">
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
          id="favorites-heading"
          class="text-2xl font-bold tracking-tight text-gray-900"
        >
          Luxury Collection
        </h2>
        <a
          href="#"
          class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          View all luxury items
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
        <div
          v-for="favorite in favorites"
          :key="favorite.id"
          class="group relative"
        >
          <img
            :src="favorite.imageSrc"
            :alt="favorite.imageAlt"
            class="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3] sm:h-auto"
          />
          <h3 class="mt-4 text-base font-semibold text-gray-900">
            <router-link
              to="/product-detail"
              class="cursor-pointer"
            >
              <span class="absolute inset-0"></span>
              {{ favorite.name }}
            </router-link>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ favorite.price }}</p>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <a
          href="#"
          class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Browse all favorites
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const favorites = [
  {
    id: 1,
    name: 'Chanel Classic Flap',
    price: '$6,800',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Elegant Chanel Classic Flap bag in black caviar leather with gold hardware.',
  },
  {
    id: 2,
    name: 'Rolex Submariner',
    price: '$8,500',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Luxury Rolex Submariner watch with black dial and stainless steel bracelet.',
  },
  {
    id: 3,
    name: 'Gucci Dionysus Bag',
    price: '$2,980',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Elegant Gucci Dionysus bag in beige and ebony GG Supreme canvas.',
  },
]
</script>
