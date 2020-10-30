const initialState = {
  counter: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1,
      };
    case "SUB":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
