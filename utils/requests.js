const API_KEY = process.env.API_KEY;

export default {
  fetchTranding: {
    title: "Trending",
    url: `'/trending/all/week?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchMystery: {
    title: "MyStery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchScifi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchTv: {
    title: "TV movie ",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
};
