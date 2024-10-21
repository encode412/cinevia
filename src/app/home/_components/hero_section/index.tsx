"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import { CustomButton } from "@/app/components";
import CustomTypography from "@/app/components/typography";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${"/static/screenshots/material-ui/getting-started/templates/dashboard.jpg"})`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${"/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg"})`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: theme.palette.grey[700],
  }),
}));

export default function HeroSection() {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 32 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={4}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <CustomTypography
            variant="h1"
            fontFamily="var(--font-netflix-sans-bold)"
            sx={{
              textAlign: "center",
              fontSize: "clamp(4.1rem, 20vw, 3.8rem)",
            }}
          >
            Unlimited movies, TV shows, and more
          </CustomTypography>
          <CustomTypography
            variant="body2"
            sx={{
              textAlign: "center",
            }}
          >
            Starts at ₦2,200. Cancel anytime.
          </CustomTypography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "700px" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Email address"
              fullWidth
              sx={{
                width: "100%",
                textAlign: "center",
                "& .MuiInputBase-input": {
                  "&::placeholder": {
                    color: "#FFFFFF",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused": {
                    outline: "none",
                    border: "1px solid #FFFFFF",
                    boxShadow: "0 0 0 1px #FFFFFF",
                  },
                },
              }}
              slotProps={{
                input: {
                  sx: {
                    border: "1px solid #e8e8e8",
                    outline: "none",
                    fontWeight: "900",
                    padding: "6px",
                    "&:focus": {
                      border: "1px solid #FFFFFF",
                      boxShadow: "0 0 0 1px #FFFFFF",
                    },
                    "&::placeholder": {
                      color: "#FFFFFF",
                    },
                    color: "#FFFFFF",
                  },
                },
              }}
            />
            <CustomButton width="50%" fontSize={28}>
              Get started
            </CustomButton>
          </Stack>
          <CustomTypography
            sx={{ textAlign: "center" }}
          >
          Ready to watch? Enter your email to create or restart your membership.
          {" "}
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </CustomTypography>
        </Stack>
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
}
