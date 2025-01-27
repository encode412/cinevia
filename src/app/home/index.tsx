import React from "react";
import styles from "./index.module.scss";
import { Navbar } from "../components/";
import {
  FirstSection,
  HeroSection,
  SecondSection,
  ThirdSection,
} from "./_components";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home_section}>
        <Container maxWidth="lg">
          <div className={styles.container}>
            <div className={styles.nav__container}>
              <Navbar />
            </div>
            <HeroSection />
          </div>
        </Container>
      </div>
      <div className={styles.mid_section}>
        <Container maxWidth="lg">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
