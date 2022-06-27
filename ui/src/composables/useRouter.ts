import router from '@/router'
import { Router } from 'vue-router'

const useRouter = (): Router => {
	return (window as any).VRouter || router
}

export default useRouter
