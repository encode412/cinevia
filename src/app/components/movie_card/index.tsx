import { Movie } from "@/app/home/_components/first_section/_components/carousel";
import styles from "./index.module.scss";
import Image from "next/image";
import React from "react";

interface MovieCardProps {
  movie: Movie;
  rank?: number;
}
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard: React.FC<MovieCardProps> = ({ movie, rank }) => {
  return (
    <div className={styles.card_container}>
      <img
        src={`${TMDB_IMAGE_BASE_URL}${movie?.poster_path}`}
        className={styles.image}
        alt={movie?.title}
      />
      <div className={styles.rank}>{rank}</div>
    </div>
  );
};

export default MovieCard;
