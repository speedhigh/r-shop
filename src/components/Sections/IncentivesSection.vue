<template>
  <section class="bg-gray-50">
    <h2 class="sr-only">Our perks</h2>
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div
          v-for="perk in perks"
          :key="perk.name"
          class="sm:flex"
        >
          <div class="sm:shrink-0">
            <div class="flow-root">
              <img
                class="h-24 w-28"
                :src="perk.imageSrc"
                alt=""
              />
            </div>
          </div>
          <div class="mt-3 sm:ml-3 sm:mt-0">
            <h3 class="text-sm font-medium text-gray-900">{{ perk.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ perk.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const perks = [
  {
    name: 'Free delivery',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
    description:
      'Order now and you\'ll get delivery absolutely free. Well, it\'s not actually free, we just price it into the products. Someone\'s paying for it, and it\'s not us.',
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-light.svg',
    description:
      'We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we\'ll stand behind it.',
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.',
  },
  {
    name: 'For the planet',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'Like you, we love the planet, and so we\'ve pledged 1% of all sales to the preservation and restoration of the natural environment.',
  },
]
</script>
