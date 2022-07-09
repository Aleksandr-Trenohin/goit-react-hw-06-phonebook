import { ADD_CONTACT, REMOVE_CONTACT, FILTER_LIST } from './action-types';

const initialState = {
  items: [],
  filter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const { id, name, number } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id,
            name,
            number,
          },
        ],
      };
    }
    case REMOVE_CONTACT: {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    }

    case FILTER_LIST: {
      const { filter } = action.payload;
      return {
        ...state,
        filter: filter,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
