import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";

const netflixSansBold = localFont({
  src: "./fonts/NetflixSans-Bold.woff2",
  variable: "--font-netflix-sans-bold",
  weight: "100 900",
});
const netflixSansMedium = localFont({
  src: "./fonts/NetflixSans-Medium.woff2",
  variable: "--font-netflix-sans-medium",
  weight: "100 900",
});

const netflixSansRegular = localFont({
  src: "./fonts/NetflixSans-Regular.woff2",
  variable: "--font-netflix-sans-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cinevia",
  description: "Your one stop for all movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={customTheme}>
        <body 
          className={`${netflixSansBold.variable} ${netflixSansMedium.variable} ${netflixSansRegular.variable}`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}