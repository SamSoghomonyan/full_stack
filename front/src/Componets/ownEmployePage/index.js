import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../App";
import "./style.css";
function OwnPageEmployee() {
  const { id } = useParams();
  const { data, setData } = useContext(Context);
  const [employee, setEmployee] = useState([]);
  console.log("data", data);
  console.log("id", id);
  useEffect(() => {
    data.filter((item) => {
      if (item.id == id) {
        setEmployee(item);
      }
    });
  }, [id]);
  console.log("em", employee);
  return (
    <div className="ownPage">
      <p>{employee.name}</p>
      <p>{employee.surname}</p>
      <p>{employee.position}</p>
      <p>{employee.email}</p>
      <p>{employee.id}</p>
    </div>
  );
}

export default OwnPageEmployee;
