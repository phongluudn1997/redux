const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value,
      };
      break;
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
