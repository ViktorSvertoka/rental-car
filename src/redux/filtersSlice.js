import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  brand: '',
  price: '',
  mileage: { from: '', to: '' },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setAdvertsFilter(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setAdvertsFilter } = filtersSlice.actions;
