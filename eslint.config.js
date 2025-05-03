import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  {},
  vue,
  tailwind,
  {
    rules: {
      // 禁用 no-use-before-define 规则，允许在定义前使用变量、函数和类
      'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
      // Vue 模板格式化规则
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below',
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],
    },
  },
)
