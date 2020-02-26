const initialState = {
  number: 100
};

const divisionR = (state = initialState, action) => {
  switch (action.type) {
    case "DIVISION":
      return {
        number: state.number / 2
      };
    case "RESET":
      return {
        number: 100
      };
    default:
      return state;
  }
};

export default divisionR;
