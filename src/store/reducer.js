const intialState = {
  counter: 0,
  results: [],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };

    case "SUB":
      return {
        ...state,
        counter: state.counter - action.value,
      };

    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };

    case "DELETE_RESULT":
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
