import { useReducer } from "react";

function cartReducer(state, action) {
    switch (action.type) {
        case 'add': return [...state, action.item];
        case 'remove': return state.filter((x) => x.id !== action.id )
        case 'clear' : return[];
        default: return state;
    }
}

const[cart, dispatch] = useReducer(cartReducer, []);

dispatch({type: 'add', item}); 