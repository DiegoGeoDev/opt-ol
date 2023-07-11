import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/opt-ol">
      <Router />
    </BrowserRouter>
  );
}

export { App };
