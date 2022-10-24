import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Addbb() {
  const [data, setData] = useState({
    name: "",
    blood_type: "",
    unit_available: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.name &&
      data.blood_type &&
      data.unit_available &&
      data.phone_number &&
      data.zip
    ) {
      let a = await fetch("https://9z2c0z.sse.codesandbox.io/blood/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      a = await a.json();
      // console.log(a);
      if (a.error) {
        alert(a.error);
      } else {
        alert("Data added");
      }
    } else {
      alert("All Fields are required");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Blood Bank Name</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              value={data.name}
              type="text"
              placeholder="Blood Bank Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Blood Type</Form.Label>
            <Form.Control
              name="blood_type"
              onChange={handleChange}
              value={data.blood_type}
              type="text"
              placeholder="Blood Type"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Available Unit</Form.Label>
            <Form.Control
              name="unit_available"
              onChange={handleChange}
              value={data.unit_available}
              type="text"
              placeholder="Available Unit"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              name="phone_number"
              onChange={handleChange}
              value={data.phone_number}
              type="text"
              placeholder="Phone"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            onChange={handleChange}
            value={data.address}
            type="text"
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              onChange={handleChange}
              value={data.city}
              type="text"
              placeholder="City"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="state"
              onChange={handleChange}
              value={data.state}
              type="text"
              placeholder="State"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              onChange={handleChange}
              value={data.zip}
              type="text"
              placeholder="Zip"
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
