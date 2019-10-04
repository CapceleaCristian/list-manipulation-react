import { FETCH_ALL_ITEMS, FETCH_SINGLE_ITEM } from '../actions/types';
import { SEARCH_ITEM, SET_CURRENT_PAGE, SET_PREV_PAGE, SET_NEXT_PAGE } from '../actions/types';
import { SET_ITEMS_PER_PAGE, SET_SORTED_ITEMS } from '../actions/types';
import { RESET_STATE } from '../actions/types';

const initialState = {
  text: '',
  items: [],
  item: {},
  sortType: 'asc',
  currentPage: 1,
  itemsPerPage: 200,
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
    case SET_PREV_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload1,
        currentPage: action.payload2
      }
    case SET_SORTED_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case RESET_STATE:
      return initialState
    default:
      return state;
  }
}