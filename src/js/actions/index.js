import axios from "axios";
import _ from "lodash";

const API_KEY = "23bb3b3f38894f919107ab49660082e8";
const ATTICLE_ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

export const FETCH_ARTICLES = "FETCH_ARTICLES";

export function fetchArticles(type) {
  const url = `${ATTICLE_ROOT_URL}&q=${type}&begin_date=20180125`;
  /*&begin_date=20170125 */
  /*  &sort=newest */
  const request = axios.get(url);

  /*  console.log(response.data.response.docs); */



  return { type: FETCH_ARTICLES, payload: request };
}

const MOVIE_ROOT_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${API_KEY}`;

export const FETCH_MOIVES = "FETCH_MOIVES";
export function fetchMovies(title){
  const url = `${MOVIE_ROOT_URL}&query=${_.replace(title, " ", "+")}`

  const request = axios.get(url);

  return { type: FETCH_MOIVES, payload: request };
}


const TOP_STORIES_ROOT_URL = `https://api.nytimes.com/svc/topstories/v2/`;

export const FETCH_TOP_STORIES = "FETCH_TOP_STORIES";
export function fetchTopStories(section){
  const url = `${TOP_STORIES_ROOT_URL}${section}.json?api-key=${API_KEY}`;

  const request = axios.get(url);

  return {type: FETCH_TOP_STORIES, payload: request };
}
