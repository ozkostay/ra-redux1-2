import { combineReducers, compose, legacy_createStore } from "redux";
import phoneFormReduser from "../reduser/phoneFormReduser";

const ReactReduserDevTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers(
      {
        repair: phoneFormReduser,
      }
    ),
    compose(ReactReduserDevTools)
  );
}

export default configureStore;
