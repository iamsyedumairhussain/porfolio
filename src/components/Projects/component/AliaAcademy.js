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
      >
        <img
          style={{ marginY: "10px" }}
          height={300}
          width={300}
          src={aliacademy}
          alt="aliacademy"
        />
      </Grid>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography color="#707B7C" marginTop={10} variant="body1">
          Alia Academy is a place where people in the Arab world can go to learn
          about how to take care of themselves in a holistic way, meaning they
          focus on the whole person - body, mind, and spirit. They offer lots of
          different ways for people to learn, like classes where they teach
          about ancient healing practices and workshops where they talk about
          modern medicine that looks at everything together. The idea is to help
          people feel good in every part of themselves, so they can live their
          best lives. Whether it's through traditional methods or new ideas,
          Alia Academy is all about giving people the knowledge and tools they
          need to be healthy and happy.
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
                borderColor: "#CB4335",
              },
              borderColor: "#CB4335",
              color: "whitesmoke",
              backgroundColor: "#CB4335",
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
