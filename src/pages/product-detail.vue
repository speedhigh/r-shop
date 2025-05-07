<template>
  <main class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup
          as="div"
          class="flex flex-col-reverse"
        >
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="image in product.images"
                :key="image.id"
                v-slot="{ selected }"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
              >
                <span class="sr-only">{{ image.name }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="image.src"
                    alt=""
                    class="size-full object-cover"
                  />
                </span>
                <span
                  class="pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                  :class="[selected ? 'ring-indigo-500' : 'ring-transparent']"
                  aria-hidden="true"
                ></span>
              </Tab>
            </TabList>
          </div>

          <TabPanels>
            <TabPanel
              v-for="image in product.images"
              :key="image.id"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="aspect-square w-full object-cover sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  class="size-5 shrink-0"
                  :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300']"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ product.rating }} out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div
              class="space-y-6 text-base text-gray-700"
              v-html="product.description"
            ></div>
          </div>

          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">Color</h3>

              <fieldset
                aria-label="Choose a color"
                class="mt-2"
              >
                <RadioGroup
                  v-model="selectedColor"
                  class="flex items-center gap-x-3"
                >
                  <RadioGroupOption
                    v-for="color in product.colors"
                    :key="color.name"
                    v-slot="{ active, checked }"
                    as="template"
                    :value="color"
                    :aria-label="color.name"
                  >
                    <div
                      class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '']"
                    >
                      <span
                        aria-hidden="true"
                        class="size-8 rounded-full border border-black/10"
                        :class="[color.bgColor]"
                      ></span>
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </div>

            <div class="mt-10 flex">
              <button
                type="submit"
                class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to bag
              </button>

              <button
                type="button"
                class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon
                  class="size-6 shrink-0"
                  aria-hidden="true"
                />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section
            aria-labelledby="details-heading"
            class="mt-12"
          >
            <h2
              id="details-heading"
              class="sr-only"
            >
              Additional details
            </h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure
                v-for="detail in product.details"
                :key="detail.name"
                v-slot="{ open }"
                as="div"
              >
                <h3>
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      class="text-sm font-medium"
                      :class="[open ? 'text-indigo-600' : 'text-gray-900']"
                    >{{ detail.name }}</span>
                    <span class="ml-6 flex items-center cursor-pointer">
                      <PlusIcon
                        v-if="!open"
                        class="block size-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <MinusIcon
                        v-else
                        class="block size-6 text-indigo-400 group-hover:text-indigo-500"
                        aria-hidden="true"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel
                  as="div"
                  class="pb-6"
                >
                  <ul
                    role="list"
                    class="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                  >
                    <li
                      v-for="item in detail.items"
                      :key="item"
                      class="pl-2"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>

      <section
        aria-labelledby="related-heading"
        class="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
      >
        <h2
          id="related-heading"
          class="text-xl font-bold text-gray-900"
        >
          Customers also bought
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <div
            v-for="product in relatedProducts"
            :key="product.id"
          >
            <div class="relative">
              <div class="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="size-full object-cover"
                />
              </div>
              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                ></div>
                <p class="relative text-lg font-semibold text-white">{{ product.price }}</p>
              </div>
            </div>
            <div class="mt-6">
              <a
                :href="product.href"
                class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >Add to bag<span class="sr-only">, {{ product.name }}</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline'

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 3,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 4,
      name: 'Angled view',
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },

    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

const relatedProducts = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 3,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 4,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]

const selectedColor = ref(product.colors[0])
</script>
