import { Link, NavLink } from "react-router-dom";
import { UserNav } from "@/components/ECommerce/index";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { authLogout } from "@/store/auth/authSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);
  const isLoggedIn = accessToken !== null;

  const [logo, setLogo] = useState("");

  const handleLogout = () => {
    dispatch(authLogout());
  };

  useEffect(() => {
    const fetchLogo = async () => {
      const logoModule = await import("@/assets/img/logo.png");
      setLogo(logoModule.default);
    };

    fetchLogo();
  }, []);

  return (
    <header className={styles.headerContainer}>
      <Container>
        <div className={styles.topHeaderContainer}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </Link>
          <UserNav />
        </div>
      </Container>
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
              {!isLoggedIn && (
                <>
                  <Nav.Link as={NavLink} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register">
                    Register
                  </Nav.Link>
                </>
              )}
              {isLoggedIn && (
                <div className={styles.userWelcome}>
                  <span>{`Hi ${user?.firstName} !`}</span>
                  <Button onClick={handleLogout} variant="secondary">
                    Logout
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
