import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./features/boardSlice";

export const store = configureStore({
  reducer: {
    boards: boardsSlice,
  },
});
