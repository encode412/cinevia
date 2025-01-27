"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import useUserStore from "../lib/store";
import AuthWrapper from "../../../utils/authWrapper";
import { CustomButton } from "../components";
import DashboardNavbar from "./_components/navbar";
import DashboardHero from "./_components/hero_section";

const DashboardPage = () => {
  const { user, setUser, removeUser } = useUserStore();
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    removeUser();
  };

  console.log(user);
  return (
    <AuthWrapper>
      <div className={styles.container}>
        <DashboardNavbar />
        <DashboardHero />
        <CustomButton onClick={handleLogout}>Log out</CustomButton>
      </div>
    </AuthWrapper>
  );
};

export default DashboardPage;
