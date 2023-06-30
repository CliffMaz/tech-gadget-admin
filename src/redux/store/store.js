import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "../menu/menuSlice";
import { usersReducer } from "../user/userSlice";
import { customerReducer } from "../customer/customerSlice";
import { orderReducer } from "../order/orderSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: usersReducer,
    customer: customerReducer,
    order: orderReducer,
  },
});

export default store;
