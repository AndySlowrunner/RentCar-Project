import { createSelector } from "@reduxjs/toolkit";

export const getCars = state => state.adverts.items;

export const selectFilter = state => state.filter.filter;

export const selectVisibleCars = createSelector(
    [getCars, selectFilter], (items, filters) => {
        return items.filter(item => item.make.toLowerCase().includes(filters.toLowerCase()))
    });