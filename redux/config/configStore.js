import { configureStore } from "@reduxjs/toolkit";
import readMe from "../modules/readMe";

// root reducer, store
const store = configureStore({
  reducer: { readMe: readMe },
});

export default store;
