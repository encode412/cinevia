import styles from "./index.module.scss";
import { CustomTypography } from "@/app/components";
import FeatureCard from "./_components/feature_card";

const SecondSection = () => {
  return (
    <div>
      {" "}
      <CustomTypography
        variant="h3"
        fontFamily="var(--font-netflix-sans-medium)"
        sx={{
          textAlign: "start",
        }}
      >
        More reasons to join
      </CustomTypography>
      <div className={styles.card_container}>
        <FeatureCard
          title="Enjoy on your TV"
          description="Watch on Smart TVs, Playstation, XBox, ChromeCast, Apple TV, Bluray players, and more"
        />
        <FeatureCard
          title="Download your shows to watch offline"
          description="Watch on Smart TVs, Playstation, XBox, ChromeCast, Apple TV, Bluray players, and more"
        />
        <FeatureCard
          title="Watch everywhere"
          description="Watch on Smart TVs, Playstation, XBox, ChromeCast, Apple TV, Bluray players, and more"
        />
        <FeatureCard
          title="Create profiles for kids"
          description="Watch on Smart TVs, Playstation, XBox, ChromeCast, Apple TV, Bluray players, and more"
        />
      </div>
    </div>
  );
};

export default SecondSection;
