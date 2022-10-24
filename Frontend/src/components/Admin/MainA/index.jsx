import styles from "./styles.module.css";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import Userlist from "../Lists/Userlist";
import Addbb from "../Lists/Addbb";
import BloodB from "../Lists/BloodB";
import Adminadd from "../Lists/Adminadd";
import Contact from "../Lists/Contact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainA = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    navigate("/");
  };
  const [a, seta] = useState(0);

  return (
    <div className={styles.maina_container}>
      <nav className={styles.navbar}>
        <h1>Red Donor</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <br />
      <br />
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2"> Admin Portal</h1>
          <Col md={4}>
            <ButtonGroup vertical style={{ minHeight: "500px" }}>
              <Button onClick={() => seta(1)}>All Users</Button>
              <Button onClick={() => seta(2)}>All Blood Banks</Button>
              <Button onClick={() => seta(5)}>Contact Form</Button>
              <Button onClick={() => seta(3)}>Add New Blood Bank</Button>
              <Button onClick={() => seta(4)}>Add New Admin </Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            {a === 1 && (
              <>
                <Userlist />
              </>
            )}
            {a === 2 && (
              <>
                <BloodB />
              </>
            )}
            {a === 3 && (
              <>
                <Addbb />
              </>
            )}
            {a === 4 && (
              <>
                <Adminadd />
              </>
            )}
            {a === 5 && (
              <>
                <Contact />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainA;
