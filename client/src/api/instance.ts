import { getCookie } from "cookies-next/client";
import axios from 'axios'

export const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		Authorization: 'Bearer ' + getCookie('jwt') || '',
	},
})
