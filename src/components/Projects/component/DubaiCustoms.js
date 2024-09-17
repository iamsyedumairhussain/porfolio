import { Button, Typography, Grid, Box } from "@mui/material";
import dubaicustoms from "../../../assets/images/projects/dubaicustoms/DubaiCustoms.png";
import DCHeadquarter from "../../../assets/images/projects/dubaicustoms/DCHeadquarter2.jpg";
import React from "react";

const EachProject = () => {
  return (
    <Grid container marginY={3}>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Box marginLeft={5} color="#707B7C">
          <Typography
            letterSpacing={2}
            marginTop={10}
            color="#34495e"
            variant="h4"
          >
            DUBAI CUSTOMS
          </Typography>
          <Typography marginY={2} variant="body1">
            Dubai Customs plays a crucial role in Dubai's development by
            promoting sustainable growth and enhancing the city's global
            reputation. Established over a century ago, it ensures smooth and
            fair trade by facilitating customs procedures, preventing smuggling,
            and collecting revenues.
          </Typography>
          <Typography marginY={2} variant="body1">
            As "the Gateway to Dubai's Prosperity," Dubai Customs aims to lead
            globally in supporting legitimate trade while protecting society and
            fostering economic development. It achieves this through adherence
            to international standards and agreements, and by embracing
            innovation and technology.
          </Typography>
          <Typography marginY={2} variant="body1">
            Through its eTransformation strategy, Dubai Customs has pioneered
            electronic and smart services, making it the first government
            department to offer 100% smart services via smartphones. This
            commitment to innovation ensures efficient and state-of-the-art
            services for its customers, contributing to Dubai's continuous
            advancement.
          </Typography>{" "}
          <Box marginTop={3}>
            <Button
              sx={{
                ":hover": {
                  color: "black",
                },
                color: "whitesmoke",
                backgroundColor: "#2471A3",
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
                backgroundColor: "#2471A3",

                marginLeft: 1,
              }}
              size="small"
              variant="outlined"
            >
              View product
            </Button>
          </Box>
        </Box>
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
          style={{ borderRadius: 10, marginY: "10px" }}
          height={150}
          width={450}
          src={dubaicustoms}
          alt="dubaicustoms"
        />
        <img
          style={{ borderRadius: 10, marginTop: "25px" }}
          height={400}
          width={560}
          src={DCHeadquarter}
          alt="DCHeadquarter"
        />
      </Grid>
    </Grid>
  );
};

export default EachProject;
