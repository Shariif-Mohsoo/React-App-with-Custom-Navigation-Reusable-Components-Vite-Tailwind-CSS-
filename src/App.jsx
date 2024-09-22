// import { useState } from "react";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonsPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import Sidebar from "./components/Sidebar";
import CounterPage from "./pages/CounterPage";
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 p-2">
      <Sidebar />
      <div className="col-span-5 ">
        <Route path="/" component={<DropdownPage />} />
        <Route path="/accordion" component={<AccordionPage />} />
        <Route path="/buttons" component={<ButtonsPage />} />
        <Route path="/modal" component={<ModalPage />} />
        <Route path="/table" component={<TablePage />} />
        <Route path="/counter" component={<CounterPage />} />
      </div>
    </div>
  );
};

export default App;
