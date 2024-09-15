import { Button, Typography, Grid, Box } from "@mui/material";
import aliacademy from "../../../assets/images/projects/aliacademy/aliacademy.png";
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
        display={{ xs: "none", md: "block" }}
      >
        <img
          style={{ marginY: "10px" }}
          height={400}
          width={400}
          src={aliacademy}
          alt="aliacademy"
        />
      </Grid>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          letterSpacing={2}
          marginTop={10}
          color="#34495e"
          variant="h4"
        >
          ALIA ACADEMY
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          Nestled within the vibrant tapestry of the Arab world, Alia Academy
          stands as a sanctuary of holistic wellness, beckoning seekers of
          equilibrium to embark on a transformative journey of self-discovery.
          Within its hallowed halls, ancient wisdom and modern science converge
          in a harmonious symphony, offering a myriad of educational pathways to
          cultivate holistic well-being.
        </Typography>
        <Typography color="#707B7C" marginTop={1} variant="body1">
          From immersive classes steeped in the traditions of yore to dynamic
          workshops exploring the cutting-edge realms of integrative medicine,
          Alia Academy serves as a nexus where the past and present intersect,
          illuminating the path toward optimal health and vitality. Here, the
          ethos of wholeness permeates every facet of learning, nurturing not
          only the physical body but also nurturing the depths of the soul and
          the expanses of the mind.
        </Typography>
        <Typography color="#707B7C" marginTop={1} variant="body1">
          It's a place where the whispers of ancient healers mingle with the hum
          of contemporary research, fostering an environment where individuals
          are empowered to reclaim agency over their health and happiness. At
          Alia Academy, the journey transcends mere education; it's a sacred
          odyssey—a pilgrimage towards the embodiment of one's highest
          potential, where each step taken is a testament to the inherent
          interconnectedness of all facets of existence. As visitors traverse
          the corridors of knowledge, they are enveloped in an atmosphere of
          reverence and curiosity, guided by the collective wisdom of
          generations past and the innovative spirit of the present. Within
          these walls, they find not only instructors but also mentors, not only
          classrooms but also sanctuaries for introspection and growth.
        </Typography>
        <Box marginTop={3}>
          <Button
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
            Learn more
          </Button>
          <Button
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
            View product
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EachProject;
