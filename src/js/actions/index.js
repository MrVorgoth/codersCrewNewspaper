import axios from "axios";

const API_KEY = "23bb3b3f38894f919107ab49660082e8";
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

export const FETCH_ARTICLES = "FETCH_ARTICLES";

export function fetchArticles(type) {
  const url = `${ROOT_URL}&q=${type}`;
  const request = axios.get(url);

  /*  console.log(response.data.response.docs); */
  return { type: FETCH_ARTICLES, payload: request };
}
