import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import MainCard from "../../components/AkCard/MainCard";
import SubCard from "../../components/AkCard/SubCard";
import AkButton from "../../components/AkButton";
import AkTypography from "../../components/AKTypography/typography";

function Home() {
  return (
    <div m={2}>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <MainCard
        title="Example Card Title"
        secondary={
          <AkButton color="secondary" variant="contained">
            Secondary
          </AkButton>
        }
        contentSX={{ padding: "20px" }}
        boxShadow
        sx={{
          maxWidth: "500px",
          margin: "auto",
          border: "none",
        }}
      >
        <Typography variant="body2">
          This is the content of the card. You can put any React nodes here,
          such as text, buttons, or other components.
        </Typography>
        <AkTypography
          variant="h1"
          color="primary"
          align="center"
          size="caption"
          fontWeight="regular"
        >
          Heading 1
        </AkTypography>
        <AkTypography
          variant="body1"
          color="textSecondary"
          size="bodySmall"
          fontWeight="light"
        >
          This is a body text example.
        </AkTypography>
        <AkTypography
          variant="caption"
          color="textDisabled"
          align="right"
          size="headingMedium"
        >
          This is a caption example.
        </AkTypography>
      </MainCard>
      <Box m={2} sx={{ p: 2 }}>
        <SubCard
          title="Sub Card Example"
          secondary={<button>Details</button>}
          contentSX={{ padding: "15px" }}
          sx={{
            border: "none",
          }}
        >
          <Typography variant="body2">
            This is a sub-section of the main dashboard card, useful for showing
            detailed information.
          </Typography>
          <AkButton color="secondary" variant="contained">
            Secondary
          </AkButton>
        </SubCard>
      </Box>
    </div>
  );
}

export default Home;
