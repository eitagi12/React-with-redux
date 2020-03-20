import * as actionTypes from "../actions";

/// !!!! อย่าลืมประกาศ state ด้วย (สามารถมีได้หลายอัน) !!!! ////
/// เช่น const initialState = {
//   results: [],
//   counter: 0
// };
const initialState = {
  results: []
};

//// เมื่อมีการเรียกผ่าน action จะดูว่า type อะไรแล้วเข้า case นั้น ////
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        //// คือการดึง state เก่ามา ////
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
