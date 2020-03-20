import React from "react";
import ReactDOM from "react-dom";

//// การเชื่อม React กับ Redux ต้อง npm i react-redux ด้วย ////
import { Provider } from "react-redux";

//// ฟังก์ชั่นการรวม  combineReducers ใช้ในกรณีที่มี Reducer หลายไฟล์ ////
import { createStore, combineReducers } from "redux";

//// ถ้ามี Reducer หลายอัน ให้ importทุกอัน ////
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//// การประกาศตัวแปลในการรวม reducer หลายไฟล์ ให้มาอยู่อันเดียวกัน ////
const rootReducer = combineReducers({
  /// ชื่อข้างหน้าจะเป็นอะไรก็ได้ (มันจะนำไปใช้ในการprops)
  ctr: counterReducer,
  res: resultReducer
});

////คำสั่งในการสร้างstore ทำให้สามารถเรียกใช้ได้ทั่วเว็บ////
const store = createStore(rootReducer);

//// ให้ครอบ Provider และเรียกใช้ store ถ้ามีการใช้ Redux ////
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
