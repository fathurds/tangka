import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  page: string;
}

const initialState: GameState = {
  page: "game",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    handlePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { handlePage } = pageSlice.actions;

export default pageSlice.reducer;
