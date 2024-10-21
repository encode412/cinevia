import React from "react";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

interface CustomTypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "caption";
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  className?: string;
  sx?: SxProps;
}

const sizes = {
  h1: "clamp(4.1rem, 20vw, 3.8rem)",
  h2: "clamp(2.8rem, 15vw, 2.8rem)",
  h3: "clamp(2.2rem, 12vw, 2.2rem)",
  body1: "1.5rem",
  body2: "1.2rem",
  caption: "1rem",
};

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  variant = "caption",
  color = "#FFFFFF",
  fontFamily,
  fontSize,
  className,
  sx,
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      className={className}
      sx={{
        fontFamily: fontFamily || "var(--font-netflix-sans-regular)",
        fontSize: fontSize || sizes[variant],
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
