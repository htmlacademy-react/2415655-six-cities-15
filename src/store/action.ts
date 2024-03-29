
import { createAction } from '@reduxjs/toolkit';
import { CityName, TSortOptions } from '../const';
import { TCard } from '../mocks/types';

export const chooseCity = createAction<CityName>('offers/chooseCity');

export const changeSort = createAction<{option: TSortOptions}>('cards/changeCardsSort');

export const getCards = createAction<{cards: TCard[]}>('cards/getCards');

export const setLoading = createAction<boolean>('cards/setLoading');
