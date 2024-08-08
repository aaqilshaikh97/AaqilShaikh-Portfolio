import React from "react";
import { styled, shouldForwardProp } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { darken } from "polished";
import colors from "../../assets/base/colors";
import { sizeStyles } from "../../assets/base/constants";
// StyledButton component with customColor handled correctly
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "customColor",
})(({ customColor }) => {
  const backgroundColor =
    colors[customColor] || customColor || colors.positionButton;
  return {
    backgroundColor,
    "&:hover": {
      backgroundColor: customColor
        ? darken(0.1, backgroundColor)
        : darken(0.1, colors.positionButton),
    },
    "&:active": {
      backgroundColor: customColor
        ? darken(0.2, backgroundColor)
        : darken(0.2, colors.positionButton),
    },
    boxShadow: `0px 1px 2px ${colors.boxShadow}`,
  };
});

const AkButton = ({ variant, color, size = "medium", children, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      customColor={color}
      size={size}
      {...props}
      sx={{ borderRadius: 2 }}
    >
      {children}
    </StyledButton>
  );
};

export default AkButton;
