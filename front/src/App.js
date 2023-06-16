import logo from "./logo.svg";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Employees from "./Componets/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./Componets/CreateEmployee";
import EditEmpleyee from "./Componets/EditEmployee";
import OwnPageEmployee from "./Componets/ownEmployePage";
export const Context = createContext([]);
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log("data", data);
  return (
    <div>
      <Context.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/ownPageEmployee/:id" element={<OwnPageEmployee />} />
            <Route path="/editEmployee/:id" element={<EditEmpleyee />} />
            <Route path="/creatEmpleyee" element={<CreateEmployee />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
