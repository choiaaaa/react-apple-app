const requests = {
	fetchNowPlaying: 'movie/now_playing',
	fetchTrending: 'trending/all/week',
	fetchTopRated: 'movie/top_rated',
	fetchActionMovies: 'discover/movie?width=genres=28',
	fetchComedyMovies: 'discover/movie?width=genres=35',
	fetchHorrorMovies: 'discover/movie?width=genres=27',
	fetchRomanceMovies: 'discover/movie?width=genres=10749',
	fetchDocumentaries: 'discover/movie?width=genres=99',
};

export default requests;
