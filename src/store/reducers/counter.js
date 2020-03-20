import * as actionTypes from "../actions";

/// !!!! อย่าลืมประกาศ state ด้วย (สามารถมีได้หลายอัน) !!!! ////
/// เช่น const initialState = {
//   counter: 0,
//   results: []
// };
const initialState = {
  counter: 0
};

//// เมื่อมีการเรียกผ่าน action จะดูว่า type อะไรแล้วเข้า case นั้น ////
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      //// คือการดึง state เก่ามา แบบท่าแปลกๆอย่าไปจำเลย ////
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        //// คือการดึง state เก่ามา แบบที่ [[[ คนทั่วไป ]]] เค้าทำกัน ////
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
  }
  return state;
};

export default reducer;
