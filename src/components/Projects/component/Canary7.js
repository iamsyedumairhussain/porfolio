import { Button, Typography, Grid, Box } from "@mui/material";
import canary7 from "../../../assets/images/projects/canary7/canary7.png";
import canary7_2 from "../../../assets/images/projects/canary7/canary7-2.webp";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const EachProject = () => {
  return (
    <Grid container marginY={{ md: 3 }}>
      <Grid
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
        display={{ xs: "none", md: "block" }}
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
          height={500}
          width={600}
          src={canary7_2}
          alt="canary7"
        />
      </Grid>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          letterSpacing={2}
          marginTop={{ md: 10 }}
          color="#34495e"
          variant="h4"
        >
          CANARY7
        </Typography>

        <Typography marginTop={2} color="#707B7C" variant="body1">
          Canary7 is a cloud-based warehouse management tool that addresses the
          challenges inherent in modern warehousing operations. Drawing on years
          of industry experience and expertise in software development, Canary7
          offers a comprehensive solution designed to evolve alongside the
          dynamic demands of the supply chain.
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          One of its core features is stock rotation, which helps businesses
          reduce revenue losses by efficiently managing product obsolescence.
          Moreover, Canary7 simplifies integration with existing systems,
          eliminating the need for costly and time-consuming software
          integrations. Its user interface is intuitive, backed by expert
          training, ensuring smooth operation and reducing the likelihood of
          software glitches or navigation difficulties.
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          The platform provides a 360° view of all warehouse operations,
          irrespective of size or demand, offering enhanced inventory management
          capabilities. Accessibility is facilitated through responsive design,
          enabling users to access the system from any device with an internet
          connection. Additionally, Canary7 is committed to continuous
          improvement, regularly updating its features and tools to remain
          future-proofed and aligned with industry best practices.
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
