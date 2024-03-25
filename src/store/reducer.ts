import { TCard } from '../mocks/types';
import { AuthorizationStatus, CITIES, CityName, SortOptions, TSortOptions } from '../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeSort, chooseCity, getCards, setLoading, switchAutorizationStatus } from './action';

type initialStateType = {
  city: CityName;
  offers: {
    cards: TCard[];
    isLoading: boolean;
  };
  sortOption: TSortOptions;
  authorizationStatus: AuthorizationStatus;
};

const initialState: initialStateType = {
  sortOption: SortOptions.Popular,
  city: CITIES[0],
  offers: {
    cards: [],
    isLoading: false
  },
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder)=> {
  builder.addCase(chooseCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(getCards, (state, action) => {
    state.offers.cards = action.payload.cards;
  });
  builder.addCase(changeSort, (state, action) => {
    state.sortOption = action.payload.option;
  });
  builder.addCase(setLoading, (state, action) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    state.offers.isLoading = action.payload;
  });
  builder.addCase(switchAutorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {reducer, chooseCity};
