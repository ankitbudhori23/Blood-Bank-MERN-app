import React, { useState, useEffect } from "react";
import "./User.css";

export default function Userlist() {
  const [user, setuser] = useState();
  const [load, setload] = useState(false);

  useEffect(() => {
    const alluser = () => {
      setload(true);
      fetch("https://9z2c0z.sse.codesandbox.io/user/", {
        method: "GET",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res2) => {
          // console.error("userdata", res2.data);
          setuser(res2.data);
          setload(false);
        });
    };
    alluser();
  }, []);

  return (
    <>
      <h1 className="text-center bg-dark text-light p-2">User list</h1>
      {load
        ? "loading..."
        : user && (
            <table>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Created At</th>
              </tr>
              {user.map((a) => (
                <>
                  <tr>
                    <td>{a.firstname}</td>
                    <td>{a.lastname}</td>
                    <td>{a.email}</td>
                    <td>{a.createdAt} </td>
                  </tr>
                </>
              ))}
            </table>
          )}
    </>
  );
}
