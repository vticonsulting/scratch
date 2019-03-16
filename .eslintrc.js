module.exports = {
  extends: [
    'wesbos',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-unused-vars': 2,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        printWidth: 120,
        tabWidth: 2,
      }
    ]
  }
}
