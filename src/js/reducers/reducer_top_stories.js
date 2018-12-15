import { FETCH_TOP_STORIES} from '../actions';

export default function( state = [], action){
    switch(action.type){
        case FETCH_TOP_STORIES:

        return [action.payload.data.results]
    }
    return state
}