<template>
  <section
    aria-labelledby="trending-heading"
    class="bg-white"
  >
    <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
      <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <h2
          id="trending-heading"
          class="text-2xl font-bold tracking-tight text-gray-900"
        >
          Trending products
        </h2>
        <a
          href="#"
          class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="relative mt-8">
        <div class="relative w-full overflow-x-auto">
          <ul
            role="list"
            class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
          >
            <li
              v-for="product in trendingProducts"
              :key="product.id"
              class="inline-flex w-64 flex-col text-center lg:w-auto"
            >
              <div class="group relative">
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                />
                <div class="mt-6">
                  <p class="text-sm text-gray-500">{{ product.color }}</p>
                  <h3 class="mt-1 font-semibold text-gray-900">
                    <a :href="product.href">
                      <span class="absolute inset-0"></span>
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-gray-900">{{ product.price }}</p>
                </div>
              </div>

              <h4 class="sr-only">Available colors</h4>
              <ul
                role="list"
                class="mt-auto flex items-center justify-center space-x-3 pt-6"
              >
                <li
                  v-for="color in product.availableColors"
                  :key="color.name"
                  class="size-4 rounded-full border border-black/10"
                  :style="{ backgroundColor: color.colorBg }"
                >
                  <span class="sr-only">{{ color.name }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 px-4 sm:hidden">
        <a
          href="#"
          class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          See everything
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trendingProducts = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
]
</script>
