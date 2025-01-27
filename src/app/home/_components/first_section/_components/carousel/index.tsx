import React, { useState } from "react";
import styles from "./index.module.scss";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "@/app/components";
import { backIcon, nextIcon } from "@/app/constants";
import Image from "next/image";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  rank?: number;
}

interface ApiResponse {
  results: Movie[];
}

const fetchAllContent = async (type: string): Promise<any[]> => {
  const endpoint = type === "Movies" ? "movie/now_playing" : "tv/on_the_air";

  const response: AxiosResponse<ApiResponse> = await axios.get(
    `https://api.themoviedb.org/3/${endpoint}?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzE4MDU2NjcwZmI1NDg2MGYxOGFlY2VlODdjNjAwNiIsIm5iZiI6MTcyOTUzMzYwMi45NjQxMzgsInN1YiI6IjY0MzA5MDlkOTVjMGFmMDExMzcwY2MwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fW51fj2XzuFFpm9IXxUmcyRwl1t3MWX5ypWcYYiVEbg",
      },
    }
  );
  return response.data.results.slice(0, 10);
};

const MovieCarousel = ({ selectedType }: { selectedType: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [selectedType],
    queryFn: () => fetchAllContent(selectedType),
  });

  console.log(data)
  if (isLoading) {
    return <div style={{ color: "red", textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>
        Error: {error.message}
      </div>
    );
  }

  const sortedMovies = data?.sort((a, b) => b?.popularity - a?.popularity);

  sortedMovies?.forEach((movie, index) => {
    movie.rank = index + 1;
  });

  const scrollLeft = () => {
    const movieContainer = document.getElementById("movie-container");
    movieContainer?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const movieContainer = document.getElementById("movie-container");
    movieContainer?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", marginTop: "10px" }}>
      <div className={styles.movie_container}>
     
          {sortedMovies?.map((movie) => (
            <div key={movie.id} className={styles.movie_card_container}>
              <MovieCard movie={movie} rank={movie.rank} />
            </div>
          ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            bottom: "50%",
            cursor: "pointer",
          }}
        >
          <div style={{ backgroundColor: "#B2BEB5", borderRadius: "20%" }}>
            <Image src={backIcon} width={30} height={30} alt="back" />
          </div>
        </div>
        <div
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            bottom: "50%",
            cursor: "pointer",
          }}
        >
          <div style={{ backgroundColor: "#B2BEB5", borderRadius: "20%" }}>
            <Image src={nextIcon} width={30} height={30} alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
