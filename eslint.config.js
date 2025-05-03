import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  vueRouter: true,
  rules: {
    'vue/block-lang': ['error', {
      script: {
        lang: 'ts',
      },
      route: {
        lang: 'json',
      },
    }],
  },
})
