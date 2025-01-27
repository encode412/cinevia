"use client";
import React from "react";
import { Button, styled } from "@mui/material";

interface CustomButtonProps {
  children?: React.ReactNode;
  width?: string;
  fontSize?: string | number;
  padding?: string | number;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  outline: "none",
  fontWeight: 500,
  fontSize: 14,
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#B8001F",
  "&:hover": {
    backgroundColor: "#8F0013",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  width = "fit-content",
  padding = "6px 14px",
  type,
  className,
  onClick,
}) => {
  return (
    <PrimaryButton
      type={type}
      onClick={onClick}
      variant="contained"
      className={className}
      sx={{
        width: width,
        padding: padding,
        fontFamily: "var(--font-netflix-sans-regular)",
      }}
    >
      {children}
    </PrimaryButton>
  );
};
export default CustomButton;
