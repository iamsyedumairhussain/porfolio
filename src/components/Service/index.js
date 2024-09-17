import { Box, Grid, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import web from "../../assets/icons/web.png";
import api from "../../assets/icons/api.png";
import database from "../../assets/icons/database.png";
import mobile from "../../assets/icons/mobile.png";
import documentation from "../../assets/icons/documentation.png";
import thirdparty from "../../assets/icons/third-party.png";

import React from "react";

const Services = () => {
  return (
    <Box id="Services" boxSizing="border-box" padding={2} marginTop={7}>
      <Typography textAlign="center" variant="h4" letterSpacing={5}>
        SERVICES
      </Typography>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        marginY={3}
        container
      >
        <Grid marginY={{ md: 3 }} item>
          <ServiceCard
            title="Web application development"
            image={web}
            description="Transform your ideas into reality with custom web applications designed to streamline your business processes and enhance user experience."
          />
        </Grid>
        <Grid marginY={{ md: 3 }} item>
          <ServiceCard
            title="Mobile application development"
            image={mobile}
            description="Elevate your business with personalized mobile apps tailored to your needs, ensuring seamless user experiences and enhanced engagement."
          />
        </Grid>
        <Grid marginY={{ md: 3 }} item>
          <ServiceCard
            title="Database design"
            image={database}
            description="Unlock the power of data with expertly designed databases, optimizing efficiency and enabling informed decision-making for your business."
          />
        </Grid>
        <Grid marginY={{ md: 3 }} item>
          <ServiceCard
            title="API integration"
            image={api}
            description="Seamlessly connect and optimize your systems with expert API integration services, ensuring smooth data flow and enhanced functionality for your applications."
          />
        </Grid>
        <Grid marginY={{ md: 3 }} item>
          <ServiceCard
            title="API & Project documentation"
            image={documentation}
            description="Crafting comprehensive API and project documentation to ensure clarity, efficiency, and seamless integration for your development projects."
          />
        </Grid>
        <Grid marginY={{ md: 3 }} item>
          <ServiceCard
            title="3rd party plugins"
            image={thirdparty}
            description="Simplify your development process with seamless integration of third-party plugins, accompanied by clear and concise documentation for effortless implementation and maintenance."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
