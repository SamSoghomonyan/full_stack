import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
function Employee({
  name,
  surname,
  email,
  id,
  deleteEmployees,
  position,
  handleEdit,
}) {
  const Navigation = useNavigate();
  const handelOwnPage = (id) => {
    Navigation(`/ownPageEmployee/${id}`);
  };
  return (
    <div onClick={() => handelOwnPage(id)}>
      <div className="emloyee">
        <div className="element ">
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
          <p>Email: {email}</p>
          <p>Id:{id}</p>
          <p>Position:{position}</p>
        </div>
        <div className="editDelete">
          <button onClick={(e) => deleteEmployees(id, e)}>Delete</button>
          <button
            onClick={(e) => {
              handleEdit(id, name, position, surname, email, e);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Employee;
