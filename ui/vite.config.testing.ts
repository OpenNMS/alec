import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
			'~@featherds': '@featherds'
		}
	},
	test: {
		globals: true,
		environment: 'happy-dom'
	}
})
