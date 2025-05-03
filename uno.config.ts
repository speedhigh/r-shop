import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind4(),
    presetTypography(),
  ],
  rules: [
    [
      /^line-(\d+)$/,
      ([, d]) => ({
        'overflow': `hidden`,
        'display': `-webkit-box`,
        '-webkit-box-orient': `vertical`,
        'word-break': `break-all`,
        '-webkit-line-clamp': `${d}`,
        'line-clamp': `${d}`,
      }),
    ],
  ],
  shortcuts: [
    {
      'f-c': 'flex items-center',
      'f-s': 'flex items-start',
      'f-e': 'flex items-end',
      'f-c-c': 'flex items-center justify-center',
      'f-c-s': 'flex items-center justify-start',
      'f-c-e': 'flex items-center justify-end',
      'f-c-a': 'flex items-center justify-around',
      'f-c-b': 'flex items-center justify-between',
      'f-e-c': 'flex items-end justify-center',
      'f-e-e': 'flex items-end justify-end',
    },
  ],
})
