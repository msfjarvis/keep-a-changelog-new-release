import github from 'eslint-plugin-github';
import globals from 'globals';

export default [
  {ignores: ['dist/', 'lib/', 'node_modules/']},
  ...github.getFlatConfigs().typescript.map(config => ({
    ...config,
    files: ['src/**/*.ts'],
  })),
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
];
