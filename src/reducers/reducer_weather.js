import  { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // why do you return an array as the new state?
            return [ action.payload.data, ...state ];
    }

    return state;
}
