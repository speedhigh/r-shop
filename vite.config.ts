import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vueDevTools from 'vite-plugin-vue-devtools'
import MetaLayouts from 'vite-plugin-vue-meta-layouts'

// https://vite.dev/config/
export default defineConfig({
  base: '/r-shop/',
  plugins: [
    vue(),
    vueDevTools(),
    viteCompression(),
    tailwindcss(),
    VueRouter({
      extensions: ['.vue'],
    }),
    MetaLayouts({
      target: './src/layouts',
      defaultLayout: 'default',
      skipTopLevelRouteLayout: false,
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        { 'vue-i18n': ['useI18n'] },
        { 'vue-router': ['useRouter'] },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
