import { createSlice } from "@reduxjs/toolkit";
import { helperChangeNumber } from "@/utils/helper"

interface GameState {
  results: number[];
  page: number;
  checkedNumber: number;
}

const initialState: GameState = {
  results: [],
  page: 0,
  checkedNumber: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    handleResult: (state, action) => {
      const { result, status } = action.payload;
      state.results = result;
      if (status === "next") {
        state.page = state.page < 5 ? state.page + 1 : 5;
      }
      if (status === "back") {
        state.page = state.page > 0 ? state.page - 1 : 0;
      }
    },
    handleChangeChecked: (state, action) => {
      state.checkedNumber = parseInt(helperChangeNumber(action.payload));
    },
    handleResetGame: () => initialState,
  },
});

export const { handleResult, handleResetGame, handleChangeChecked } =
  gameSlice.actions;

export default gameSlice.reducer;
