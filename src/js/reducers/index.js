import { combineReducers } from "redux";
import ArticlesReducer from "./reducer_articles";
import MovieReducer from "./reducer_movies";

const rootReducer = combineReducers({
    articles: ArticlesReducer,
    movies: MovieReducer
});

export default rootReducer;