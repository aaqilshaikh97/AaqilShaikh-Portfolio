import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MainCard from "../../components/AkCard/MainCard";
import AkTypography from "../../components/AKTypography/typography";
import colors from "../../assets/base/colors";
import MyDetailsCard from "./components/MyDetailsCard";
function Dashboard() {
  return (
    <>
      <Box style={{ backgroundColor: colors.background, height: "100vh" }}>
        <Grid container spacing={2} pt={8}>
          <Grid item xs={1}></Grid>
          <Grid item xs={12} sm={12} md={2} m={2} p={2}>
            <MainCard
              contentSX={{ padding: "20px" }}
              boxShadow
              sx={{
                margin: "auto",
                backgroundColor: colors.background,
                borderRadius: "15px",
                boxShadow: colors.boxShadow,
              }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <MyDetailsCard />
              </Box>{" "}
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={12} md={8} m={2} p={2}>
            <MainCard
              contentSX={{ padding: "20px" }}
              sx={{
                margin: "auto",
                backgroundColor: colors.background,
                borderRadius: "15px",
                boxShadow: colors.boxShadow,
              }}
            >
              <AkTypography
                variant="h1"
                color={colors.white}
                align="center"
                size="subtitle"
                fontWeight="bold"
              >
                grid 3
              </AkTypography>
            </MainCard>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
