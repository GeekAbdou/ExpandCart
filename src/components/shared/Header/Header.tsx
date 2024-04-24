import { Link, NavLink } from "react-router-dom";
import { UserNav } from "@/components/ECommerce/index";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
const { headerContainer, headerLogo } = styles;

const Header = () => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const fetchLogo = async () => {
      const logoModule = await import("@/assets/img/logo.png");
      setLogo(logoModule.default);
    };

    fetchLogo();
  }, []);

  return (
    <header>
      <div className={headerContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={headerLogo} />
        </Link>
        <UserNav />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="primary"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" role="navigation">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="shop">
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
