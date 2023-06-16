import React from "react";

import { useState, useContext } from "react";
import "./style.css";

import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
function CreateEmployee() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const { data, setData } = useContext(Context);
  const navigation = useNavigate();
  const handleClick = () => {
    const newData = {
      name: name,
      surname: surname,
      position: position,
      email: email,
      id: Math.random(),
    };
    if (name && surname && position && email) {
      console.log("first");
      setData([...data, newData]);
      fetch("http://localhost:4000/api/user", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(newData), // body data type must match "Content-Type" header
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      navigation("/");
    }
  };
  return (
    <div className="create">
      <h1> Create a new Employee</h1>
      <form>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={handleClick} className="createToNav">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateEmployee;
