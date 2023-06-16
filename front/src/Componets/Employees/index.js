import React, { useContext, useEffect, useState } from "react";
import Employee from "../Employee";
import "./style.css";
import { Context } from "../../App";
import { json, useNavigate } from "react-router-dom";
import EditEmpleyee from "../EditEmployee";
function Employees() {
  const { data, setData } = useContext(Context);
  const [check, setCheck] = useState(false);
  const Navigation = useNavigate();
  const handlieCLick = () => {
    Navigation("/creatEmpleyee");
  };
  const deleteEmployees = (id, e) => {
    e.stopPropagation();
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
      mode: "cors",
    });
    setCheck(!check);
  };
  const handleEdit = (id, name, surname, position, email, e) => {
    e.stopPropagation();
    Navigation(`/editEmployee/${id}`);
  };
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [check]);
  return (
    <div>
      <div>
        <h1 className="pageName">Employee</h1>
        <button onClick={handlieCLick} className="button">
          Create Employee
        </button>
        <div className="employees">
          {data.map((data) => {
            return (
              <Employee
                key={data.id}
                {...data}
                handleEdit={handleEdit}
                deleteEmployees={deleteEmployees}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Employees;
