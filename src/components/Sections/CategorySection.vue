<template>
  <section
    aria-labelledby="category-heading"
    class="bg-gray-50"
  >
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
          id="category-heading"
          class="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop by Category
        </h2>
        <router-link
          to="/product-list"
          class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
          <img
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg"
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            class="absolute size-full object-cover group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          ></div>
          <div class="absolute inset-0 flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <router-link
                  to="/product-list"
                  class="cursor-pointer"
                >
                  <span class="absolute inset-0"></span>
                  New Arrivals
                </router-link>
              </h3>
              <p
                aria-hidden="true"
                class="mt-1 text-sm text-white"
              >
                Shop Now
              </p>
            </div>
          </div>
        </div>
        <div class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Bright fashion retail display with trendy clothing and accessories"
            class="absolute size-full object-cover group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          ></div>
          <div class="absolute inset-0 flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <router-link
                  to="/product-list"
                  class="cursor-pointer"
                >
                  <span class="absolute inset-0"></span>
                  Best Sellers
                </router-link>
              </h3>
              <p
                aria-hidden="true"
                class="mt-1 text-sm text-white"
              >
                Shop Now
              </p>
            </div>
          </div>
        </div>
        <div class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Modern lifestyle products with smartphones and trendy accessories in a bright setting"
            class="absolute size-full object-cover group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          ></div>
          <div class="absolute inset-0 flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <router-link
                  to="/product-list"
                  class="cursor-pointer"
                >
                  <span class="absolute inset-0"></span>
                  Popular Picks
                </router-link>
              </h3>
              <p
                aria-hidden="true"
                class="mt-1 text-sm text-white"
              >
                Shop Now
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <a
          href="#"
          class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>
