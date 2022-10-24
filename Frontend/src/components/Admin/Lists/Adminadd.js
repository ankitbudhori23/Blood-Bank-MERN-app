import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Adminadd = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.firstname && data.lastname && data.email && data.password) {
      let regresult = await fetch(
        "https://9z2c0z.sse.codesandbox.io/admin/register",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      regresult = await regresult.json();
      // console.log(regresult);
      if (regresult.error) {
        alert(regresult.error);
      } else {
        alert("Admin added");
      }
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <div>
        <div>
          <div></div>
          <div>
            <form onSubmit={handleSubmit}>
              <h1>Add Admin</h1>
              <Form.Group className="mb-2" controlId="formGridAddress1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstname"
                  onChange={handleChange}
                  value={data.firstname}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGridAddress1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGridAddress1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Adminadd;
