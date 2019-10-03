import { FETCH_ALL_ITEMS, FETCH_SINGLE_ITEM } from './types';
import { SEARCH_ITEM, SET_CURRENT_PAGE } from './types';

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