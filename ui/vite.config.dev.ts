import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: ['vue', '@vueuse/core'],
			eslintrc: {
				enabled: true,
				filepath: './.eslintrc-auto-import.json'
			}
		})
	],
	resolve: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
			'~@featherds': '@featherds'
		},
		dedupe: ['vue']
	}
})
