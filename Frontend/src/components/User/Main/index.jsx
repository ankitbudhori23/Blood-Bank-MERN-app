import "./index.css";
import "../../Admin/Lists/User.css";
// import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [blood, setblood] = useState();
  const [load, setload] = useState(false);
  const [s, sets] = useState(null);
  const [c, setc] = useState(null);
  const [b, setb] = useState(null);

  const t = localStorage.getItem("token");
  if (!t) {
    navigate("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const states = [
    { id: "Delhi", name: "Delhi" },
    { id: "Mumbai", name: "Mumbai" },
    { id: "UP", name: "UP" }
  ];
  const cities = [
    { id: "New Delhi", stateId: "Delhi", name: "New Delhi" },
    { id: "old Delhi", stateId: "Delhi", name: "old Delhi" },
    { id: "Borivali", stateId: "Mumbai", name: "Borivali" },
    { id: "Bandra", stateId: "Mumbai", name: "Bandra" },
    { id: "Gurugram", stateId: "UP", name: "Gurugram" },
    { id: "Noida", stateId: "UP", name: "Noida" }
  ];
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setState(states);
  }, []);

  const handleState = (id) => {
    const dt = cities.filter((x) => x.stateId === id);
    setCity(dt);
  };

  const blooda = () => {
    setload(true);
    fetch(`https://9z2c0z.sse.codesandbox.io/blood/find/${s}/${c}/${b}`, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res2) => {
        if (res2.data) {
          // console.error("userdata", res2.data);
          setblood(res2.data);
        } else {
          setblood("");
          alert(res2.error);
        }
        setload(false);
      });
  };

  return (
    <div className="main_container">
      <nav className="navbar">
        <h1>Red Donor</h1>
        <button className="white_btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="div-12">
        <h1> Check Blood Availability</h1> <br />
        <br />
        <select
          id="bbstates"
          classname="form-control select-class"
          onChange={(e) => {
            handleState(e.target.value);
            sets(e.target.value);
          }}
        >
          <option value="null">Select State</option>
          {state && state !== undefined
            ? state.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No State"}
        </select>
        <br />
        <br />
        <select
          id="bbcities"
          onChange={(e) => setc(e.target.value)}
          classname="form-control select-class"
        >
          <option value="null">Select City</option>
          {city && city !== undefined
            ? city.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No City"}
        </select>
        <br />
        <br />
        <select
          id="bloodgrp"
          onChange={(e) => setb(e.target.value)}
          className="form-control select-class"
        >
          <option value="null">Select Blood Grp+</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <br />
        <button onClick={blooda}> Show</button>
        <br />
        <br />
        {load
          ? "loading..."
          : blood && (
              <>
                <h1 className="text-center bg-dark text-light p-2">
                  All blood bank
                </h1>
                <table>
                  <tr>
                    <th>Blood Bank Name</th>
                    <th>Blood Group</th>
                    <th>Available Unit</th>
                    <th>Phone </th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip </th>
                  </tr>
                  {blood.map((a) => (
                    <>
                      <tr>
                        <td>{a.name}</td>
                        <td>{a.blood_type}</td>
                        <td>{a.unit_available}</td>
                        <td>{a.phone_number} </td>
                        <td>{a.address}</td>
                        <td>{a.city}</td>
                        <td>{a.state}</td>
                        <td>{a.zip} </td>
                      </tr>
                    </>
                  ))}
                </table>
              </>
            )}
      </div>
    </div>
  );
};

export default Main;
