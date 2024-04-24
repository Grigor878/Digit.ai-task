import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "digitAI",
  storage: storageSession,
  whitelist: ["main"],
};

const rootReducer = combineReducers({
  main: mainSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
