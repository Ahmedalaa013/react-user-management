import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import "./main.css";

const store = createStore(reducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
