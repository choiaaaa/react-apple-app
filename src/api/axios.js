import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '11ee01923aa8b7e9f5dc894082503aa1',
		language: 'ko-KR',
	},
});

export default instance;
