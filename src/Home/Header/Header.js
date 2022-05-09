import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="text-center">
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link className="text-white" as={Link} to="addnewcar">
                    Add New Car
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    as={Link}
                    to="manageinventory"
                  >
                    Manage Cars
                  </Nav.Link>
                  <Nav.Link className="text-white" as={Link} to="mycars">
                    My Cars
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="btn btn-outline-white text-white"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Nav.Link className="text-white" as={Link} to="register">
                    Register
                  </Nav.Link>
                  <Nav.Link className="text-white" as={Link} to="login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
