import { combineReducers } from "redux";
import ArticlesReducer from "./reducer_articles";
import MovieReducer from "./reducer_movies";
import TopStoriesReducer from "./reducer_top_stories";

const rootReducer = combineReducers({
    articles: ArticlesReducer,
    movies: MovieReducer,
    topStories: TopStoriesReducer
});

export default rootReducer;