import { Button, Typography, Grid, Box } from "@mui/material";
import aliacademy from "../../../assets/images/projects/aliacademy/aliacademy.png";
import React from "react";

import nutrition from "../../../assets/images/projects/aliacademy/nutrition.png";
import lecture from "../../../assets/images/projects/aliacademy/notes.png";
import program from "../../../assets/images/projects/aliacademy/medical-staff.png";

const EachProject = () => {
  return (
    <Grid container marginY={{ md: 3 }}>
      <Grid
        item
        textAlign="center"
        padding={3}
        boxSizing="border-box"
        xs={12}
        md={6}
        display={{ xs: "none", md: "block" }}
      >
        <img
          style={{ marginY: "10px" }}
          height={400}
          width={400}
          src={aliacademy}
          alt="aliacademy"
        />
        <Grid
          spacing={2}
          marginY={2}
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={3} xs={12}>
            <Box
              padding={1}
              color="#707B7C"
              sx={{ boxShadow: 2 }}
              textAlign="center"
            >
              <img src={nutrition} width={70} height={70} alt="oil_refinery" />
              <Typography marginTop={1} variant="body2">
                Health nutrition
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 2 }}
              textAlign="center"
            >
              <img src={lecture} width={70} height={70} alt="gas_processing" />
              <Typography marginTop={1} variant="body2">
                Health lectures
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 2 }}
              textAlign="center"
            >
              <img src={program} width={70} height={70} alt="local_marketing" />
              <Typography marginTop={1} variant="body2">
                Health programs
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          letterSpacing={2}
          marginTop={{ xs: 4, md: 10 }}
          color="#34495e"
          variant="h4"
        >
          ALIA ACADEMY
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          Alia Academy, located in the heart of the Arab world, is a center for
          holistic wellness, inviting people to explore and find balance in
          their lives. It combines ancient knowledge with modern science to
          offer various educational programs focused on improving overall
          well-being.
        </Typography>
        <Typography color="#707B7C" marginTop={1} variant="body1">
          Alia Academy offers a blend of traditional and modern wellness
          approaches through immersive classes and dynamic workshops in
          integrative medicine. It serves as a place where the past and present
          come together to guide people toward better health and vitality. The
          focus is on holistic learning, nurturing the body, soul, and mind.
        </Typography>
        <Typography color="#707B7C" marginTop={1} variant="body1">
          Alia Academy is a place where ancient healing wisdom meets modern
          research, creating an environment that empowers individuals to take
          control of their health and happiness. The experience goes beyond
          education—it's a personal journey toward realizing one's full
          potential. Every step reflects the deep connection between all aspects
          of life. As visitors explore, they are surrounded by respect and
          curiosity, guided by both the wisdom of the past and the innovation of
          the present. At Alia Academy, they find not just teachers, but
          mentors, and not just classrooms, but spaces for reflection and
          personal growth.
        </Typography>
        <Box marginTop={3}>
          <Button
            onClick={() => window.open("https://aliaacademy.com")}
            sx={{
              ":hover": {
                color: "black",
                borderColor: "#CB4335",
              },
              borderColor: "#CB4335",
              color: "whitesmoke",
              backgroundColor: "#CB4335",
            }}
            size="small"
            variant="outlined"
          >
            View product
          </Button>
          <Button
            onClick={() => window.open("https://aliaacademy.com/courses")}
            sx={{
              ":hover": {
                color: "black",
                borderColor: "#CB4335",
              },
              borderColor: "#CB4335",
              color: "whitesmoke",
              backgroundColor: "#CB4335",

              marginLeft: 1,
            }}
            size="small"
            variant="outlined"
          >
            {" "}
            View courses
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EachProject;
