import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import usersReducer from "./usersSlice";
import groupsReducer from "./groupsSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  users: usersReducer,
  groups: groupsReducer,
});

export default rootReducer;
