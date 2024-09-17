import { Typography, Grid, Box } from "@mui/material";
import injazacademy2 from "../../../assets/images/projects/injazacademy/injazacademy3.jpg";
import injazacademy_icon from "../../../assets/images/projects/injazacademy/injazacademy_icon.jpg";
import React from "react";

const EachProject = () => {
  return (
    <Grid container marginY={3}>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          letterSpacing={2}
          marginTop={{ md: 4 }}
          color="#34495e"
          variant="h4"
          marginLeft={{ md: 5 }}
        >
          INJAZ ACADEMY
        </Typography>
        <Typography
          marginLeft={{ md: 5 }}
          color="#707B7C"
          marginTop={2}
          variant="body1"
        >
          INJAZ Bahrain is a non-profit organization that was established in
          2005 as part of Junior Achievement Worldwide with the aim of
          empowering young people to own their economic success and be prepared
          for today's business challenges. INJAZ Bahrain delivers hands on,
          immersive learning in work readiness, financial literacy,
          entrepreneurship, sustainability, STEM, digital literacy, and more.
        </Typography>
        <Typography
          color="#707B7C"
          marginTop={1}
          variant="body1"
          marginLeft={{ md: 5 }}
        >
          With the help of its partners and volunteers, INJAZ Bahrain impacts
          thousands of students every year bringing them closer to the real
          world and opening their minds to their own potential.
        </Typography>
        <Grid spacing={2} marginY={2} container>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={injazacademy_icon}
                width={30}
                height={30}
                alt="fbaprep"
              />
              <Typography color="#21618c" variant="body1">
                Work readiness
              </Typography>
              <Typography marginTop={1} variant="body2">
                Preparing Youth for the Jobs of the Future
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={injazacademy_icon}
                width={30}
                height={30}
                alt="fbaprep"
              />
              <Typography color="#21618c" variant="body1">
                Financial literacy
              </Typography>
              <Typography marginTop={1} variant="body2">
                Developing Financial Independence
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} marginTop={{ xs: 2, md: 0 }}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={injazacademy_icon}
                width={30}
                height={30}
                alt="fbaprep"
              />
              <Typography color="#21618c" variant="body1">
                Entrepreneurship
              </Typography>
              <Typography marginTop={1} variant="body2">
                Cultivating an Entrepreneurial Mindset
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
        display={{ xs: "none", md: "block" }}
      >
        <img
          style={{ borderRadius: 10, marginTop: "10px" }}
          height={450}
          width={600}
          src={injazacademy2}
          alt="injazacademy2"
        />
      </Grid>
    </Grid>
  );
};

export default EachProject;
