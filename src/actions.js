import * as actions from "./actionTypes";

export const bugAdded = (title) => ({
  type: actions.BUG_ADDED,
  payload: {
    title,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});
