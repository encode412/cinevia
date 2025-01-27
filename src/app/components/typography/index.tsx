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

const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(max-width: 991px)",
  desktop: "(min-width: 992px)",
};

const sizes = {
  h1: {
    mobile: "clamp(2rem, 10vw, 2rem)",
    tablet: "clamp(3.5rem, 15vw, 3.5rem)",
    desktop: "clamp(4.1rem, 20vw, 3.8rem)",
  },
  h2: {
    mobile: "clamp(1.3rem, 8vw, 1.3rem)",
    tablet: "clamp(2.5rem, 12vw, 2.5rem)",
    desktop: "clamp(2.8rem, 15vw, 2.8rem)",
  },
  h3: {
    mobile: "clamp(1.2rem, 7vw, 1.2rem)",
    tablet: "clamp(2rem, 10vw, 2rem)",
    desktop: "clamp(2.2rem, 12vw, 2.2rem)",
  },
  body1: {
    mobile: "1.2rem",
    tablet: "1.3rem",
    desktop: "1.5rem",
  },
  body2: {
    mobile: "1rem",
    tablet: "1.1rem",
    desktop: "1.2rem",
  },
  caption: {
    mobile: "0.9rem",
    tablet: "1rem",
    desktop: "1rem",
  },
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
        fontSize: {
          xs: sizes[variant].mobile,
          sm: sizes[variant].tablet,
          md: sizes[variant].desktop,
        },

        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
