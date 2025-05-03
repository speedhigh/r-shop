<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
      <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section
          aria-labelledby="cart-heading"
          class="lg:col-span-7"
        >
          <h2
            id="cart-heading"
            class="sr-only"
          >
            Items in your shopping cart
          </h2>

          <ul
            role="list"
            class="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            <li
              v-for="(product, productIdx) in products"
              :key="product.id"
              class="flex py-6 sm:py-10"
            >
              <div class="shrink-0">
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="size-24 rounded-md object-cover sm:size-48"
                />
              </div>

              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a
                          :href="product.href"
                          class="font-medium text-gray-700 hover:text-gray-800"
                        >{{ product.name }}</a>
                      </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <p class="text-gray-500">{{ product.color }}</p>
                      <p
                        v-if="product.size"
                        class="ml-4 border-l border-gray-200 pl-4 text-gray-500"
                      >
                        {{ product.size }}
                      </p>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <div class="grid w-full max-w-16 grid-cols-1">
                      <select
                        :name="`quantity-${productIdx}`"
                        :aria-label="`Quantity, ${product.name}`"
                        class="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      <ChevronDownIcon
                        class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        aria-hidden="true"
                      />
                    </div>

                    <div class="absolute right-0 top-0">
                      <button
                        type="button"
                        class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Remove</span>
                        <XMarkIcon
                          class="size-5"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <p class="mt-4 flex space-x-2 text-sm text-gray-700">
                  <CheckIcon
                    v-if="product.inStock"
                    class="size-5 shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <ClockIcon
                    v-else
                    class="size-5 shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                  <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2
            id="summary-heading"
            class="text-lg font-medium text-gray-900"
          >
            Order summary
          </h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">$99.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <a
                  href="#"
                  class="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Learn more about how shipping is calculated</span>
                  <QuestionMarkCircleIcon
                    class="size-5"
                    aria-hidden="true"
                  />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$5.00</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a
                  href="#"
                  class="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Learn more about how tax is calculated</span>
                  <QuestionMarkCircleIcon
                    class="size-5"
                    aria-hidden="true"
                  />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-900">$8.32</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt class="text-base font-medium text-gray-900">Order total</dt>
              <dd class="text-base font-medium text-gray-900">$112.32</dd>
            </div>
          </dl>

          <div class="mt-6">
            <router-link to="/order-list">
              <button
                type="submit"
                class="cursor-pointer w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </router-link>
          </div>
        </section>
      </form>

      <!-- Related products -->
      <section
        aria-labelledby="related-heading"
        class="mt-24"
      >
        <h2
          id="related-heading"
          class="text-lg font-medium text-gray-900"
        >
          You may also like&hellip;
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="group relative"
          >
            <img
              :src="relatedProduct.imageSrc"
              :alt="relatedProduct.imageAlt"
              class="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="relatedProduct.href">
                    <span
                      aria-hidden="true"
                      class="absolute inset-0"
                    ></span>
                    {{ relatedProduct.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ relatedProduct.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ relatedProduct.price }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'

const products = [
  {
    id: 1,
    name: 'Chanel Classic Flap Bag',
    href: '#',
    price: '$6,800',
    color: 'Black',
    inStock: true,
    size: 'Medium',
    imageSrc: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Elegant Chanel Classic Flap bag in black caviar leather with gold hardware.',
  },
  {
    id: 2,
    name: 'Rolex Submariner',
    href: '#',
    price: '$8,500',
    color: 'Stainless Steel',
    inStock: false,
    leadTime: '2–3 months',
    size: '41mm',
    imageSrc: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Luxury Rolex Submariner watch with black dial and stainless steel bracelet.',
  },
  {
    id: 3,
    name: 'Gucci Dionysus Bag',
    href: '#',
    price: '$2,980',
    color: 'Beige',
    inStock: true,
    imageSrc: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Elegant Gucci Dionysus bag in beige and ebony GG Supreme canvas.',
  },
]

const relatedProducts = [
  {
    id: 1,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$1,180',
    color: 'Natural',
  },
  {
    id: 2,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$1,180',
    color: 'Natural',
  },
  {
    id: 3,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$1,180',
    color: 'Natural',
  },
  {
    id: 4,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$1,180',
    color: 'Natural',
  },
]
</script>
