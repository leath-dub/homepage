// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html'

export default {
  input: 'src/app.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    html({
        title: 'Homepage',
    }),
    svelte({
      include: ['src/App.svelte', 'src/components/**/*.svelte'],
      emitCss: false,
    }),
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    }),
  ]
}
