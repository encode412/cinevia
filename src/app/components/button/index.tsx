"use client";
import React from "react";
import { Button, styled } from "@mui/material";

interface CustomButtonProps {
  children?: React.ReactNode;
  width?: string;
  fontSize?: string | number;
  padding?: string | number;
}

const PrimaryButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  outline: "none",
  fontWeight: 500,
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#B8001F",
  "&:hover": {
    backgroundColor: "#8F0013",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  width = "fit-content",
  fontSize = 14,
  padding = '6px 14px', 
}) => {
  return (
    <PrimaryButton 
      variant="contained" 
      sx={{ 
        width: width, 
        fontSize: fontSize,
        padding: padding,
        fontFamily:"var(--font-netflix-sans-medium)"
      }}
    >
      {children}
    </PrimaryButton>
  );
};
export default CustomButton;