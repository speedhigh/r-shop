<template>
  <div class="bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
      <!-- Profile Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">My Profile</h1>
        <p class="mt-2 text-lg text-gray-600">Manage your personal information and preferences</p>
      </div>

      <div class="mt-8 space-y-8">
        <!-- Profile Image -->
        <div class="flex flex-col items-center space-y-4">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              class="size-32 rounded-full object-cover ring-4 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
          </div>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white rounded-lg shadow-sm ring-1 ring-indigo-200 hover:bg-indigo-50 transition-colors duration-200"
          >
            <CameraIcon class="w-4 h-4 mr-2" />
            Change photo
          </button>
        </div>

        <!-- Personal Information -->
        <div class="bg-white rounded-2xl shadow-sm p-6 space-y-6 transition-all duration-300 hover:shadow-md">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-900">Personal Information</h2>
            <button
              v-if="!isEditing"
              class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
              @click="isEditing = true"
            >
              <PencilIcon class="w-4 h-4 mr-1.5" />
              Edit
            </button>
            <div
              v-else
              class="flex space-x-3"
            >
              <button
                class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                @click="isEditing = false"
              >
                <XMarkIcon class="w-4 h-4 mr-1.5" />
                Cancel
              </button>
              <button
                class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                @click="saveProfile"
              >
                <CheckIcon class="w-4 h-4 mr-1.5" />
                Save
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div class="space-y-2">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
              >First name</label>
              <div class="mt-1">
                <input
                  v-if="isEditing"
                  id="first-name"
                  v-model="profile.firstName"
                  type="text"
                  name="first-name"
                  class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-4 transition-colors duration-200"
                />
                <p
                  v-else
                  class="text-sm text-gray-900 py-2 px-4 bg-gray-50 rounded-lg"
                >
                  {{ profile.firstName }}
                </p>
              </div>
            </div>

            <div class="space-y-2">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >Last name</label>
              <div class="mt-1">
                <input
                  v-if="isEditing"
                  id="last-name"
                  v-model="profile.lastName"
                  type="text"
                  name="last-name"
                  class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-4 transition-colors duration-200"
                />
                <p
                  v-else
                  class="text-sm text-gray-900 py-2 px-4 bg-gray-50 rounded-lg"
                >
                  {{ profile.lastName }}
                </p>
              </div>
            </div>

            <div class="sm:col-span-2 space-y-2">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >Email address</label>
              <div class="mt-1">
                <input
                  v-if="isEditing"
                  id="email"
                  v-model="profile.email"
                  type="email"
                  name="email"
                  class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-4 transition-colors duration-200"
                />
                <p
                  v-else
                  class="text-sm text-gray-900 py-2 px-4 bg-gray-50 rounded-lg"
                >
                  {{ profile.email }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order History Link -->
        <div class="mt-8">
          <router-link
            to="/order-history"
            class="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-base font-medium text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>View Order History</span>
            <ChevronRightIcon class="ml-2 size-5" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CameraIcon, CheckIcon, ChevronRightIcon, PencilIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'

const isEditing = ref(false)

const profile = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
})

const saveProfile = () => {
  // Here you would typically make an API call to save the profile
  isEditing.value = false
}
</script>
