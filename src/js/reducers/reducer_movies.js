import { FETCH_MOIVES } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
      case FETCH_MOIVES:


        console.log(action.payload.data.results); 
        return [action.payload.data.results];
    }
    return state;
}
