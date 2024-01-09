import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalculatorProvider } from "./contexts/CalcContext.tsx";
import { ColorProvider } from "./contexts/ColorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalculatorProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </CalculatorProvider>
  </React.StrictMode>,
);
