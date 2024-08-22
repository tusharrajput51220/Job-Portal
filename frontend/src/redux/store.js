import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";

const store=configureStore({
    reducer:{
        auth: authSlice,
        job: jobSlice,
    }
})
export default store
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { combineReducers } from "redux";
// import authSlice from "./authSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   auth: authSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };