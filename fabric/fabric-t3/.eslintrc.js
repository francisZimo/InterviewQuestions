const rules = {
  'prettier/prettier': [
    'error',
    {
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      semi: true,
      trailingComma: 'none',
      bracketSpacing: true,
      bracketSameLine: false,
      vueIndentScriptAndStyle: false,
      singleAttributePerLine: false
    },
    {
      usePrettierrc: false
    }
  ]
};

module.exports = {
  root: true,
  ignorePatterns: ['**/dist/**/*', 'node_modules/**/*', 'public/**/*'],
  extends: ['plugin:@xes/fe/config-prettier'],
  overrides: [
    // vue 项目校验, src 目录下的代码
    {
      files: ['src/**/*.{ts,tsx,js,jsx,vue}'],
      extends: ['plugin:@xes/fe/preset-vue3'],
      rules
    },
    // 因为TS本身带有undef检测，所以这里针对 ts tsx vue关闭 undef检测
    {
      files: ['src/**/*.{ts,tsx,vue}'],
      extends: ['plugin:@xes/fe/preset-vue3'],
      rules: { ...rules, ...{ 'no-undef': 'off' } }
    },
    // src 目录以外的代码
    {
      extends: ['plugin:@xes/fe/preset-lib'],
      files: ['**/*.{js,jsx,ts,tsx}'],
      excludedFiles: ['src/**/*', 'dist/**/*'],
      rules
    }
  ],
  globals: {
    Chessboard: 'readonly',
    __BUILD_TIME: 'readonly',
    __LINE: 'readonly'
  }
};
