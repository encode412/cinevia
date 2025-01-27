import * as React from "react";
import styles from "./index.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CustomTypography } from "@/app/components";

interface FeatureCardProps {
  title: string;
  description: string;
  minWidth?: number;
  titleColor?: string;
  descriptionColor?: string;
  gradientColors?: { start: string; end: string };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  titleColor = "#ffffff",
  descriptionColor = "#d8d8d8",
}) => {
  return (
    <Card className={styles.card}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "24px",
        }}
      >
        <CustomTypography sx={{ fontSize: "22px" }} color={titleColor}>
          {title}
        </CustomTypography>
        <CustomTypography sx={{ fontSize: "14px" }} color={descriptionColor}>
          {description}
        </CustomTypography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
