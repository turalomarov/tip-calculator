import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TipState {
  bill: number|undefined;
  numberOfPeople: number|undefined;
  tipPercent: number|undefined;
}

const initialState: TipState = {
  bill: undefined,
  numberOfPeople: undefined,
  tipPercent: undefined,
};

export const tipSlice = createSlice({
  name: 'tip',
  initialState,
  reducers: {
    setBill: (state:TipState, action:PayloadAction<number|undefined>) => {
      state.bill = action.payload;
    },
    setNumberOfPeople: (state:TipState, action:PayloadAction<number|undefined>) => {
      state.numberOfPeople = action.payload;
    },
    setTipPercent: (state:TipState, action:PayloadAction<number|undefined>) => {
      state.tipPercent = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  setBill, setNumberOfPeople, setTipPercent, reset,
} = tipSlice.actions;
export default tipSlice.reducer;
