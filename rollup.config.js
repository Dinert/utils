import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
    name: 'dinertUtils'
  },
  plugins: [
    babel({
      exclude: 'node_modules'
    }),
    typescript()
  ]
}