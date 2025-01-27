"use client";
import { CustomTypography } from "@/app/components";
import styles from "./index.module.scss";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import MovieCarousel from "./_components/carousel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 1000 * 60 * 60,
    },
  },
});

const FirstSection = () => {
  const [showing, setShowing] = useState("Movies");
  const [country, setCountry] = useState("Global");

  const handleContentTypeChange = (event: any) => {
    setShowing(event.target.value);
  };

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <div className={styles.container}>
      <CustomTypography
        variant="h3"
        fontFamily="var(--font-netflix-sans-medium)"
      >
        Trending now
      </CustomTypography>
      <Stack
        // direction="row"
        spacing={1}
        className={styles.stack_content}
        
      >
        <div className={styles.select_container}>
          <select
            value={showing}
            onChange={handleContentTypeChange}
            className={styles.select}
          >
            <option value="Movies" className={styles.option}>
              Movies
            </option>
            <option value="Tv Shows" className={styles.option}>
              TV Shows
            </option>
          </select>
        </div>
        <div className={styles.select_container}>
          <select
            value={country}
            onChange={handleCountryChange}
            className={styles.select}
          >
            <option value="Global" className={styles.option}>
              Global
            </option>
          </select>
        </div>
      </Stack>
      <QueryClientProvider client={queryClient}>
        <MovieCarousel selectedType={showing} />
      </QueryClientProvider>
    </div>
  );
};

export default FirstSection;
