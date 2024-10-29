import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryID: 1,
      name: 'Highlight',
    },
    {
      categoryID: 2,
      name: 'Environment',
    },
    {
      categoryID: 3,
      name: 'Education',
    },
    {
      categoryID: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryID: 5,
      name: 'Household goods',
    },
    {
      categoryID: 6,
      name: 'Electronics',
    },
    {
      categoryID: 7,
      name: 'Toys and Games',
    },
    {
      categoryID: 8,
      name: 'Sports Equipment',
    },
    {
      categoryID: 9,
      name: 'Books and Media',
    },
    {
      categoryID: 10,
      name: 'Health and Beauty Products',
    },
    {
      categoryID: 11,
      name: 'Office supplies',
    },
    {
      categoryID: 12,
      name: 'Tools and Hardware',
    },
    {
      categoryID: 13,
      name: 'Art and Craft Supplies',
    },
  ],
  selectedCategoryID: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryID: (state, action) => {
      state.selectedCategoryID = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryID} = Categories.actions;

export default Categories.reducer;