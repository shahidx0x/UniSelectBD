import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authServiceApi } from "./services/AuthService";
import { adminServiceApi } from "./services/AdminService";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import AuthSlice from "./features/AuthSlice";

const rootReducer = combineReducers({
  auth: AuthSlice,
  [authServiceApi.reducerPath]: authServiceApi.reducer,
  [adminServiceApi.reducerPath]: adminServiceApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(authServiceApi.middleware, adminServiceApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store, null, () => {
  store.dispatch(authServiceApi.util.resetApiState());
  store.dispatch(adminServiceApi.util.resetApiState());
});