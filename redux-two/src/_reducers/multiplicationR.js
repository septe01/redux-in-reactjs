//Isi Dari Func atau

//Init Reducer
// const initialState = {
//   number: 50,
// }

// const incrementR = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         number: state.number + 1
//       }
//       default:
//         return state
//   }
// }

// export default incrementR;

const initialState = {
  number: 100
};

const multiplicationR = (state = initialState, action) => {
  switch (action.type) {
    case "MULTIPLICATION":
      return {
        number: state.number * 2
      };
    case "RESET":
      return {
        number: 100
      };
    default:
      return state;
  }
};

export default multiplicationR;
