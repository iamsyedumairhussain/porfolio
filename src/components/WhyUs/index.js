import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";

const index = () => {
  return (
    <Grid container marginY={3}>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Box marginLeft={5} color="#707B7C" marginTop={10}>
          <Typography marginY={2} variant="h4">
            What you'll get ?
          </Typography>
        </Box>
      </Grid>
      <Grid
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
      ></Grid>
    </Grid>
  );
};

export default index;
