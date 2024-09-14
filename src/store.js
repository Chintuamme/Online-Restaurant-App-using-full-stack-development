import {legacy_createStore as createStore, combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducers/restaurantReducer";
import { menuReducer } from "./reducers/menuReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer, forgotPasswordReducer, userReducer } from "./reducers/userReducer";
import { newOrderReducer, myOrdersReducer, orderDetailsReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    forgotpassword: forgotPasswordReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
});
let initialState ={
    cart:{
        cartItems:localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[],
        deliveryInfo:localStorage.getItem("deliveryInfo")
        ? JSON.parse(localStorage.getItem("deliveryInfo"))
        : [],

    },
};
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const middleware=[thunk];
const store=createStore(reducer,initialState,composeEnhancers(applyMiddleware(...middleware)));
export default store