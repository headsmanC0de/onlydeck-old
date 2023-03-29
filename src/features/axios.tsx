import axios from 'axios';

export const requestBot = axios.create({
	baseURL: 'https://onlydeck-api.herokuapp.com/bot',
	headers: {
		'Content-Type': 'application/json',
	},
});
