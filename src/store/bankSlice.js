import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  history: [],
  idx: 0,
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    transfer: (state, action) => {
      state.balance -= action.payload.amount;
      state.history.push({
        type: `transfer / ${action.payload.name}`,
        amount: action.payload.amount,
        id: ++state.idx,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { deposit, withdraw, transfer } = bankSlice.actions;

export default bankSlice.reducer;
