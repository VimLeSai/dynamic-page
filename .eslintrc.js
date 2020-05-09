module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['babel', 'react', 'react-hooks', 'prettier', '@babel/development'],
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/babel', 'prettier/react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: [`.js`, '.jsx'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 1,
    'react/jsx-uses-vars': 1,
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'no-mixed-spaces-and-tabs': 'off',
    'react/jsx-no-bind': 0,
    'no-tabs': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0,
  },
}
