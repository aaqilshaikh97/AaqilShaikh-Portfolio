import React from "react";
import Typography from "@mui/material/Typography";
import { styleSizes as TypographySizes } from "./../../assets/base/constants";
import { FontWeights } from "./../../assets/base/constants";

const AkTypography = ({
  variant,
  color,
  align,
  size,
  children,
  fontWeight,
  ...props
}) => {
  const fontSize = TypographySizes[size] || "1rem";
  const fontWeightValue = FontWeights[fontWeight] || "normal";

  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      style={{ fontSize, fontWeight: fontWeightValue }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default AkTypography;
