<template>
  <TransitionRoot
    as="template"
    :show="modelValue"
  >
    <Dialog
      class="relative z-50"
      @close="modelValue = false"
    >
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-y-full"
        enter-to="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-y-0"
        leave-to="-translate-y-full"
      >
        <div class="fixed inset-x-0 top-0 z-50 bg-white shadow-lg">
          <div class="mx-auto w-full max-w-3xl px-4 sm:px-8 pt-8 pb-6 flex flex-col items-center">
            <div class="w-full flex items-center gap-2">
              <div class="relative flex-1">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  v-model="searchQuery"
                  name="search"
                  class="block w-full rounded-md border border-indigo-500 bg-gray-50 py-2 pl-10 pr-3 text-gray-900 ring-0 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 text-sm sm:py-3 sm:text-lg transition"
                  placeholder="Search for an item, a brand or a category..."
                  type="search"
                  @keyup.enter="handleSearch"
                />
              </div>
              <button
                type="button"
                class="ml-2 cursor-pointer inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition sm:px-5 sm:py-3 sm:text-base"
                @click="handleSearch"
              >
                Search
              </button>
              <button
                type="button"
                class="ml-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                @click="modelValue = false"
              >
                <span class="sr-only">Close search</span>
                <XMarkIcon
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div class="w-full flex flex-col items-center lg:mt-6">
              <div class="mt-6 text-center">
                <div class="font-semibold text-gray-900 lg:text-lg">Looking for something special?</div>
                <div class="mt-1 text-gray-500 text-sm lg:text-base">Search for your favorite brands, items and categories.</div>
              </div>
            </div>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const modelValue = defineModel<boolean>()
const searchQuery = ref('')

const handleSearch = () => {
  modelValue.value = false
  router.push('/product-list')
  // console.log('Searching for:', searchQuery.value)
}
</script>
