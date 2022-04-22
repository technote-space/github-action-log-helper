import pluginTypescript from '@rollup/plugin-typescript';

const common = {
  input: 'src/index.ts',
  plugins: [
    pluginTypescript(),
  ],
  external: ['sprintf-js', '@actions/core'],
};

export default [
  {
    ...common,
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
  },
  {
    ...common,
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
  },
];
