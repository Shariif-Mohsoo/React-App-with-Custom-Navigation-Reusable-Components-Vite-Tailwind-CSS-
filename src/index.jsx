// import react from 'react';
import "./index.css";
import reactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";
const ele = document.getElementById("root");
const root = reactDOM.createRoot(ele);
root.render(
  <NavigationProvider>
    {" "}
    <App />
  </NavigationProvider>
);
