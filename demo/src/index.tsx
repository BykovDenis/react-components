import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import Routes from "./routes";

const domContainer = document.getElementById("demo");
const root = ReactDOM.createRoot(domContainer);
root.render(<Routes />);
