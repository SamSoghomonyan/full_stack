import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../App";
function EditEmpleyee() {
  const Navigation = useNavigate();
  const { id } = useParams();
  const { data, setData } = useContext(Context);
  const [state, setState] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  console.log("data edit ", data);
  useEffect(() => {
    data.filter((item) => {
      if (item.id == id) {
        setState(item);
      }
    });
  }, [id]);
  const handleEdit = (id) => {
    const x = {
      name: state.name,
      surname: state.surname,
      position: state.position,
      email: state.email,
      id: id,
    };
    console.log("newData", x);
    console.log("name", name);
    console.log("first");
    setData([...data, x]);
    fetch(`http://localhost:4000/api/data/${id}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        name: name,
        surname: surname,
        id: id,
        position: position,
        email: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    Navigation("/");
  };
  return (
    <div className="create">
      <h1> Edit Employee</h1>
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
        <button onClick={() => handleEdit(id)} className="createToNav">
          edit
        </button>
      </form>
    </div>
  );
  // return <div>Barev</div>;
}

export default EditEmpleyee;
