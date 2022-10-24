import React, { useState, useEffect } from "react";
import "./User.css";

export default function BloodB() {
  const [blood, setblood] = useState();
  const [load, setload] = useState(false);
  const [popup, setpopup] = useState(false);
  const [id, setid] = useState();
  const [unit_available, setunit] = useState("");

  const allblood = () => {
    setload(true);
    fetch("https://9z2c0z.sse.codesandbox.io/blood/", {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        // console.error("userdata", res2.data);
        setblood(res.data);
        setload(false);
      });
  };

  useEffect(() => {
    allblood();
  }, []);

  const deleteb = (a) => {
    fetch(`https://9z2c0z.sse.codesandbox.io/blood/${a}`, {
      method: "delete",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res2) => {
        allblood();
        alert("one decord deleted");
      });
  };

  const editvalue = async () => {
    await fetch(`https://9z2c0z.sse.codesandbox.io/blood/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        unit_available
      })
    })
      .then((res) => res.json())
      .then((res) => {
        setpopup(false);
        setunit();
        allblood();
        alert("one decord Edited");
        // console.error("userdata", res);
      });
  };

  return (
    <>
      <h1 className="text-center bg-dark text-light p-2">All blood bank</h1>
      {load
        ? "loading..."
        : blood && (
            <table>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Available Unit</th>
                <th>Phone </th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip </th>
                <th>Edit</th>
                <th>Delete</th>
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
                    <td
                      className="edit_tb"
                      onClick={() => {
                        setpopup(true);
                        setid(a._id);
                      }}
                    >
                      Edit
                    </td>
                    <td className="delete_tb" onClick={() => deleteb(a._id)}>
                      Delete
                    </td>
                  </tr>
                </>
              ))}
            </table>
          )}
      {popup && (
        <div className="epopup">
          <button
            onClick={() => {
              setpopup(false);
              setunit("");
            }}
          >
            X
          </button>
          <input
            type="text"
            placeholder="Available Unit"
            value={unit_available}
            onChange={(e) => setunit(e.target.value)}
          />
          <button onClick={editvalue}>Submit</button>
        </div>
      )}
    </>
  );
}
