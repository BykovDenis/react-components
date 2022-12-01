import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Routes from "./routes";

const domContainer = document.getElementById("demo");
const root = ReactDOM.createRoot(domContainer);
root.render(<Routes />);
