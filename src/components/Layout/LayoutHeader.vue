<template>
  <div class="bg-white">
    <!-- Search Drawer -->
    <LayoutSearch v-model="searchOpen" />

    <!-- Mobile menu -->
    <TransitionRoot
      as="template"
      :show="open"
    >
      <Dialog
        class="relative z-40 lg:hidden"
        @close="open = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25"></div>
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon
                    class="size-6"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <!-- Links -->
              <TabGroup
                as="div"
                class="mt-2"
              >
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      v-for="category in navigation.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                      as="template"
                    >
                      <button
                        class="flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                        :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900']"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="category in navigation.categories"
                    :key="category.name"
                    class="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div class="grid grid-cols-2 gap-x-4">
                      <div
                        v-for="item in category.featured"
                        :key="item.name" d
                        class="group relative text-sm"
                        @click="() => toProductList()"
                      >
                        <img
                          :src="item.imageSrc"
                          :alt="item.imageAlt"
                          class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                        />
                        <div class="mt-6 block font-medium text-gray-900">
                          <span
                            class="absolute inset-0 z-10"
                            aria-hidden="true"
                          ></span>
                          {{ item.name }}
                        </div>
                        <p
                          aria-hidden="true"
                          class="mt-1"
                        >
                          Shop now
                        </p>
                      </div>
                    </div>
                    <div
                      v-for="section in category.sections"
                      :key="section.name"
                    >
                      <p
                        :id="`${category.id}-${section.id}-heading-mobile`"
                        class="font-medium text-gray-900"
                      >
                        {{ section.name }}
                      </p>
                      <ul
                        role="list"
                        :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                        class="mt-6 flex flex-col space-y-6"
                      >
                        <li
                          v-for="item in section.items"
                          :key="item.name"
                          class="flow-root"
                        >
                          <div
                            class="-m-2 block p-2 text-gray-500 cursor-pointer"
                            @click="() => toProductList()"
                          >
                            {{ item.name }}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div
                  v-for="page in navigation.pages"
                  :key="page.name"
                  class="flow-root"
                >
                  <a
                    :href="page.href"
                    class="-m-2 block p-2 font-medium text-gray-900"
                  >{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a
                    href="#"
                    class="-m-2 block p-2 font-medium text-gray-900"
                  >Sign in</a>
                </div>
                <div class="flow-root">
                  <a
                    href="#"
                    class="-m-2 block p-2 font-medium text-gray-900"
                  >Create account</a>
                </div>
              </div>

              <!-- <div class="border-t border-gray-200 px-4 py-6">
                <a
                  href="#"
                  class="-m-2 flex items-center p-2"
                >
                  <img
                    src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                    alt=""
                    class="block h-auto w-5 shrink-0"
                  />
                  <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div> -->
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <!-- <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p> -->
      <nav
        aria-label="Top"
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button
              type="button"
              class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden cursor-pointer"
              @click="open = true"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open menu</span>
              <Bars3Icon
                class="size-6"
                aria-hidden="true"
              />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="/">
                <h2 class="font-bold">R-Shop 👌🏻</h2>
              </router-link>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <Popover
                  v-for="category in navigation.categories"
                  :key="category.name"
                  v-slot="{ open, close }"
                  class="flex"
                >
                  <div class="relative flex">
                    <PopoverButton
                      class="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out cursor-pointer focus:outline-none focus:ring-0"
                      :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800']"
                    >
                      {{ category.name }}
                    </PopoverButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div
                        class="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      ></div>

                      <div class="relative bg-white">
                        <div class="mx-auto max-w-7xl px-8">
                          <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div class="col-start-2 grid grid-cols-2 gap-x-8">
                              <div
                                v-for="item in category.featured"
                                :key="item.name"
                                class="group relative text-base sm:text-sm cursor-pointer"
                                @click="() => { toProductList(); close(); }"
                              >
                                <img
                                  :src="item.imageSrc"
                                  :alt="item.imageAlt"
                                  class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                />
                                <div class="mt-6 block font-medium text-gray-900">
                                  <span
                                    class="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  ></span>
                                  {{ item.name }}
                                </div>
                                <p
                                  aria-hidden="true"
                                  class="mt-1"
                                >
                                  Shop now
                                </p>
                              </div>
                            </div>
                            <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              <div
                                v-for="section in category.sections"
                                :key="section.name"
                              >
                                <p
                                  :id="`${section.name}-heading`"
                                  class="font-medium text-gray-900"
                                >
                                  {{ section.name }}
                                </p>
                                <ul
                                  role="list"
                                  :aria-labelledby="`${section.name}-heading`"
                                  class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li
                                    v-for="item in section.items"
                                    :key="item.name"
                                    class="flex"
                                  >
                                    <div
                                      class="hover:text-gray-800 cursor-pointer"
                                      @click="() => { toProductList(); close(); }"
                                    >
                                      {{ item.name }}
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <router-link
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :to="page.href"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {{ page.name }}
                </router-link>
              </div>
            </PopoverGroup>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Sign in</a>
                <span
                  class="h-6 w-px bg-gray-200"
                  aria-hidden="true"
                ></span>
                <a
                  href="#"
                  class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Create account</a>
              </div>

              <!-- <div class="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  class="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <img
                    src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                    alt=""
                    class="block h-auto w-5 shrink-0"
                  />
                  <span class="ml-3 block text-sm font-medium">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div> -->

              <!-- Search -->
              <div class="flex lg:ml-6">
                <button
                  type="button"
                  class="p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                  @click="searchOpen = true"
                >
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon
                    class="size-6"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <!-- User -->
              <div class="flex lg:ml-6">
                <router-link
                  to="/user"
                  class="p-2 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">User</span>
                  <UserIcon
                    class="size-6"
                    aria-hidden="true"
                  />
                </router-link>
              </div>

              <!-- Cart -->
              <LayoutCart />
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'category',
          name: 'Category',
          items: [
            { name: 'Bags & Handbags', href: '#' },
            { name: 'Clothing', href: '#' },
            { name: 'Shoes', href: '#' },
            { name: 'Accessories', href: '#' },
            { name: 'Jewelry & Watches', href: '#' },
            { name: 'Perfume & Cosmetics', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Chanel', href: '#' },
            { name: 'Dior', href: '#' },
            { name: 'Hermès', href: '#' },
            { name: 'Louis Vuitton', href: '#' },
            { name: 'Prada', href: '#' },
            { name: 'Fendi', href: '#' },
            { name: 'Celine', href: '#' },
            { name: 'Balenciaga', href: '#' },
            { name: 'Valentino', href: '#' },
            { name: 'Saint Laurent', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'category',
          name: 'Category',
          items: [
            { name: 'Bags & Handbags', href: '#' },
            { name: 'Clothing', href: '#' },
            { name: 'Shoes', href: '#' },
            { name: 'Accessories', href: '#' },
            { name: 'Jewelry & Watches', href: '#' },
            { name: 'Perfume & Cosmetics', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Gucci', href: '#' },
            { name: 'Louis Vuitton', href: '#' },
            { name: 'Hermès', href: '#' },
            { name: 'Prada', href: '#' },
            { name: 'Burberry', href: '#' },
            { name: 'Cartier', href: '#' },
            { name: 'Dior', href: '#' },
            { name: 'Saint Laurent', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
  ],
}

const open = ref(false)
const searchOpen = ref(false)
const router = useRouter()

const toProductList = (closePopover?: () => void) => {
  // Close mobile menu if it's open
  if (open.value) {
    open.value = false
  }
  // Close desktop popover if provided
  if (typeof closePopover === 'function') {
    closePopover()
  }
  router.push('/product-list')
}
</script>
