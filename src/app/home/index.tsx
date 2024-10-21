import React from "react";
import styles from "./index.module.scss";
import { Navbar } from "../components/";
import { HeroSection } from "./_components";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <section className={styles.home_section}>
      <Container maxWidth="lg">
        <div className={styles.container}>
          <div className={styles.nav__container}>
            <Navbar />
          </div>
          <HeroSection />
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
