module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@vue/standard',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-undef': 0,
    'no-unused-vars': 2,
    // Allow paren-less arrow functions
    'arrow-parens': 0,
    // Allow async-await
    'generator-star-spacing': 0,
    // Allow debugger during development
    // 'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase' | 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: []
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
      },
    ],
  },
  globals: {
    $: true,
    _: true,
    FB: true,
    ga: true,
    Vue: true,
    axios: true,
    Vuex: true,
    'jest/globals': true,
    jasmine: true
  },
}
