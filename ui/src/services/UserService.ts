import { IWhoAmIResponse } from '@/types/TUser'
import { rest } from './axiosInstances'

const endpointRole = '/whoami'

export const getUserRole = async (): Promise<IWhoAmIResponse | false> => {
	try {
		const resp = await rest.get(endpointRole)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}
