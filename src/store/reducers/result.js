import * as actionTypes from "./../actions";

const intialState = {
  results: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      };

    case actionTypes.DELETE_RESULT:
      console.log(action);
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.id),
      };

    default:
      return state;
  }
};

export default reducer;
