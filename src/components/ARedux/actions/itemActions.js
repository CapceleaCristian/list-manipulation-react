import { FETCH_ALL_ITEMS, FETCH_SINGLE_ITEM, SET_SORT_TYPE } from './types';
import { SEARCH_ITEM, SET_CURRENT_PAGE } from './types';
import { SET_PREV_PAGE, SET_NEXT_PAGE } from './types';
import { SET_ITEMS_PER_PAGE, SET_SORTED_ITEMS, SET_ITEMS_AFTER_SEARCH } from './types';
import { RESET_STATE } from './types';

export const fetchAllItems = () => dispatch => {
  fetch('https://api.opendota.com/api/teams')
    .then(items => items.json())
    .then(items =>
      dispatch({
        type: FETCH_ALL_ITEMS,
        payload: items
      })
    );
}

export const fetchSingleItem = (matchName) => dispatch => {
  fetch(`https://api.opendota.com/api/teams/${matchName}`)
    .then(item => item.json())
    .then(item =>
      dispatch({
        type: FETCH_SINGLE_ITEM,
        payload: item
      })
    );
}

export const searchItem = (text) => dispatch => {
  dispatch({
    type: SEARCH_ITEM,
    payload: text
  })
}

export const setCurrentPage = (currentPage) => dispatch => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: currentPage
  })
}

export const setPrevPage = (currentPage) => dispatch => {
  dispatch({
    type: SET_PREV_PAGE,
    payload: currentPage
  })
}
export const setNextPage = (currentPage) => dispatch => {
  dispatch({
    type: SET_NEXT_PAGE,
    payload: currentPage
  })
}
export const setItemsPerPage = (itemsPerPage, currentPage) => dispatch => {
  dispatch({
    type: SET_ITEMS_PER_PAGE,
    payload1: itemsPerPage,
    payload2: currentPage
  })
}
export const setSortedItems = (items) => dispatch => {
  dispatch({
    type: SET_SORTED_ITEMS,
    payload: items
  })
}

export const setSortType = (sortType) => dispatch => {
  dispatch({
    type: SET_SORT_TYPE,
    payload: sortType
  })
}

export const resetState = (initialState) => dispatch => {
  dispatch({
    type: RESET_STATE,
    payload: initialState
  })
}
