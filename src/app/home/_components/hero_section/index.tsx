"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";

import { CustomButton } from "@/app/components";
import CustomTypography from "@/app/components/typography";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/lib/firebaseConfig";
import useUserStore from "@/app/lib/store";

const HeroSection = () => {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result?.user;

      const response = await fetch(user?.photoURL ?? "");
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result;

        setUser({
          id: user.uid,
          name: user.displayName || "",
          email: user.email || "",
          photo: base64String ?? null,
        });
      };
      reader.readAsDataURL(blob);

      setSignedIn(true);
      router.push("/dashboard");
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") {
        setError("");
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

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
          spacing={3}
          useFlexGap
          sx={{
            alignItems: "center",
            gap: "20px",
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <CustomTypography
            variant="h1"
            fontFamily="var(--font-netflix-sans-bold)"
            sx={{
              textAlign: "center",
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

          <CustomTypography sx={{ textAlign: "center" }}>
            Ready to watch? Sign up to begin or restart your membership.{" "}
            {/* <Link href="#" color="primary">
              Terms & Conditions
            </Link> */}
          </CustomTypography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "700px" } }}
          >
            <CustomButton
              width="30%"
              type="submit"
              className={styles.button_styles}
              onClick={handleGoogleSignIn}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "60%",
                  gap: "2px",
                }}
              >
                <span>Sign up</span>
                <GoogleIcon />
              </div>
            </CustomButton>
          </Stack>
          {error && <CustomTypography>{error}</CustomTypography>}
        </Stack>
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
};

export default HeroSection;
