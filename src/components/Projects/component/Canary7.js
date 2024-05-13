import { Button, Typography, Grid, Box } from "@mui/material";
import canary7 from "../../../assets/images/projects/canary7/canary7.png";
import canary7_2 from "../../../assets/images/projects/canary7/canary7-2.jpg";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const EachProject = () => {
  return (
    <Grid container marginY={3}>
      <Grid
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
      >
        <img
          style={{ borderRadius: 10, marginY: "10px" }}
          height={150}
          width={450}
          src={canary7}
          alt="canary7"
        />
        <img
          style={{ borderRadius: 10, marginTop: "25px" }}
          height={200}
          width={500}
          src={canary7_2}
          alt="canary7"
        />
      </Grid>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography color="#707B7C" marginTop={10} variant="body1">
          We're Canary7 Warehouse Management System The smart, flexible and
          scalable WMS that transforms the efficiency & productivity at the
          heart of your business. Canary7 is the definitive WMS system that
          allows you streamline all of your fulfilment operations by managing
          your staff, inventory, order management, picking, putaway, shipping,
          returns and more.
        </Typography>
        <Box marginTop={2}>
          <Typography display="inline-block" color="#707B7C" variant="body1">
            <DoubleArrowIcon
              sx={{ marginX: 1, color: "#73C6B6" }}
              fontSize="medium"
            />
            Cloud-Based WMS
          </Typography>

          <Typography display="inline-block" color="#707B7C" variant="body1">
            <DoubleArrowIcon
              sx={{ marginX: 1, color: "#73C6B6" }}
              fontSize="medium"
            />
            Desired Integration Options
          </Typography>

          <Typography display="inline-block" color="#707B7C" variant="body1">
            <DoubleArrowIcon
              sx={{ marginX: 1, color: "#73C6B6" }}
              fontSize="medium"
            />
            User Interface & Expert Training
          </Typography>

          <Typography display="inline-block" color="#707B7C" variant="body1">
            <DoubleArrowIcon
              sx={{ marginX: 1, color: "#73C6B6" }}
              fontSize="medium"
            />
            360° View of All Operations
          </Typography>
        </Box>
        <Box marginTop={3}>
          <Button
            sx={{
              ":hover": {
                color: "black",
              },
              color: "whitesmoke",
              backgroundColor: "#117864",
              borderRadius: 20,
            }}
            size="small"
            variant="outlined"
          >
            Learn more
          </Button>
          <Button
            sx={{
              ":hover": {
                color: "black",
              },
              color: "whitesmoke",
              backgroundColor: "#117864",
              borderRadius: 20,
              marginLeft: 1,
            }}
            size="small"
            variant="outlined"
          >
            View product
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EachProject;
