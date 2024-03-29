import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import WelcomePage from '@/components/WelcomePage.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/store/useUserStore'
import useRouter from '@/composables/useRouter'

const wrapper = mount(WelcomePage, {
	global: {
		plugins: [createTestingPinia()]
	}
} as any) as any

test('Should redirect to confiration after click continue', async () => {
	const router = useRouter()
	const push = vi.spyOn(router, 'push')
	const store = useUserStore()
	store.userId = 'test'
	wrapper.vm.allowSave = true
	const continueBtn = wrapper.find('[data-test="continue-btn"]')
	await continueBtn.trigger('click')

	expect(push).toHaveBeenCalledTimes(1)
	expect(push).toHaveBeenCalledWith({ name: 'configuration' })
})
