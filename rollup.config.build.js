import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'
import {terser} from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm',  // 将软件包保存为 ES 模块文件
      name: 'dinertUtils',
      sourcemap: true
    }, 
    {
      file: pkg.module,
      format: 'cjs',
      name: 'dinertUtils',
      sourcemap: true
    },
    {
      file: pkg.browser,
      format: 'umd',  // 将软件包保存为 ES 模块文件
      name: 'dinert-utils',
      sourcemap: true
    }, 
  ],
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules',
    }),
    typescript(),
    terser()
  ],
  watch: {  // 配置监听处理
    exclude: 'node_modules/**'
  },
}