import { FETCH_ALL_ITEMS, FETCH_SINGLE_ITEM } from '../actions/types';
import { SEARCH_ITEM, SET_CURRENT_PAGE } from '../actions/types';

const initialState = {
  text: '',
  items: [],
  item: {},
  currentPage: 1,
  itemsPerPage: 40,
  totalItems: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_SINGLE_ITEM:
      return {
        ...state,
        item: action.payload
      }
    case SEARCH_ITEM:
      return {
        ...state,
        text: action.payload
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state;
  }
}