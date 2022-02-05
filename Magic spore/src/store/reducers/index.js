import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import adminReducer from "./adminReducer";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import storage from "redux-persist/lib/storage";
const configStorage = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};
export const rootReducer = combineReducers({
  admin: adminReducer,
});
export default persistReducer(configStorage, rootReducer);
