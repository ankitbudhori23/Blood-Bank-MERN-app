import React, { useState, useEffect } from "react";
import "./User.css";

export default function Contact() {
  const [cont, setcont] = useState();
  const [load, setload] = useState(false);

  useEffect(() => {
    const alluser = () => {
      setload(true);
      fetch("https://9z2c0z.sse.codesandbox.io/contact/", {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res2) => {
          // console.error("userdata", res2.data);
          setcont(res2.data);
          setload(false);
        });
    };
    alluser();
  }, []);

  return (
    <>
      <h1 className="text-center bg-dark text-light p-2">Contact Form</h1>
      {load
        ? "loading..."
        : cont && (
            <table>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Blood GRP</th>
                <th>Unit Needed</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>ZIP</th>
              </tr>
              {cont.map((a) => (
                <>
                  <tr>
                    <td>{a.firstname}</td>
                    <td>{a.lastname}</td>
                    <td>{a.email}</td>
                    <td>{a.phone} </td>
                    <td>{a.blood}</td>
                    <td>{a.unit_needed}</td>
                    <td>{a.address}</td>
                    <td>{a.city} </td>
                    <td>{a.state}</td>
                    <td>{a.zip} </td>
                  </tr>
                </>
              ))}
            </table>
          )}
    </>
  );
}
