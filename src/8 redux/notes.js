// when adding to cart

// write data
// dispaches a action -> calls  function() called (reducer)
//  -> modifies cart (modifies the slice of redux store)

// read data - we use selector to read from store
// and selector will modify the component
// header component is subscribed to store by selector

// app store--------------------------
import { configureStore } from "redux";

const appStore = configureStore({

});

// import provider from redux - in app.jsx-----------------------
import {Provider} from "redux"
// import appStore
// wrap all app
<Provider store={appStore}> // it takes store as a prop

</Provider>

// cartslice- reducer ----------------------------------------------------
import { cartSlice } from "redux/toolkit"

const cartSlice = screateSlice ({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action) => { //it will modify the state with action
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.action;

export default cartSlice.reducers;

//NOW WE NED TO ADD IT TO STORE 

import { configureStore } from "redux";
//import cart reducer

const appStore = configureStore({  
    reducer : {
        cart: cartReducer, //for each slice we will ahve a reducer
        user: userReducer
    }
});

// now we need to read  - A SELECCTOR (LIKE A HOOK FOR THE COMPONENT TO REFLECT THE CHANGE)

import useSelector from "redux"
//subscribing to the store using selectro
const cart = useSelector((store) => store.cart.items); //cart wil get the data

// dispatch-------------------------------------------------------------------------
import {useDispatch} from "redux"
import {addItem} from " cartSlice"

const dispatch = useDispatch()

const handleItem = () => {
    dispatch(addItem("pizza"))
}

onclick = {handleItem} //on button