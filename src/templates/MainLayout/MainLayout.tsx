import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "@/components/shared/index";
import styles from "./styles.module.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container className={styles.wrapper}>
        <div>
          <Outlet />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
