import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./reducer/store";
import UID from "./main/UID";
ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
React.createElement(Provider, { store: store },
    React.createElement(UID, null),
    React.createElement(App, null))
// </React.StrictMode>
);
//# sourceMappingURL=main.js.map