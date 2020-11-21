import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscibe = store.subscribe(() => {
  console.log("State Changed", store.getState());
});

store.dispatch(bugAdded("Bug1"));
// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1));

console.log(store.getState());
