import { FETCH_MOIVES } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
      case FETCH_MOIVES:


        
        return [action.payload.data.results];
    }
    return state;
}
