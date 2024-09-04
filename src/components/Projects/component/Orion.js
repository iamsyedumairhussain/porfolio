import { Typography, Grid, Box } from "@mui/material";
import orion2 from "../../../assets/images/projects/orion/orion2.webp";
import React from "react";
import product_catalogue from "../../../assets/images/projects/orion/product_catalogue.png";
import artificial_intelligence from "../../../assets/images/projects/orion/artificial_intelligence.png";
import secure_payment from "../../../assets/images/projects/orion/secure_payment.png";
import customer_interaction from "../../../assets/images/projects/orion/customer_interaction.png";
import order_management from "../../../assets/images/projects/orion/order_management.png";
import customer_support from "../../../assets/images/projects/orion/customer_support.png";

const EachProject = () => {
  return (
    <Grid container marginY={3}>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography
          marginLeft={5}
          color="#707B7C"
          marginTop={10}
          variant="body1"
        >
          Orion - a pioneering metaverse platform tailored specifically for
          businesses and enterprises.Orion bridges the gap between current
          metaverse platforms and enterprises’ expectations of a comprehensive
          3D digital channel that adheres to their security and customer service
          policies. With extensive experience working with top-tier government
          entities and large enterprises, the company comprehends the
          requirements and expectations of businesses for an all-encompassing 3D
          channel.
        </Typography>
        <Grid marginLeft={{ xs: 0, md: 3 }} spacing={2} marginY={2} container>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={product_catalogue}
                width={50}
                height={50}
                alt="product_catalogue"
              />
              <Typography marginTop={1} variant="body2">
                Product catalogue management
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={artificial_intelligence}
                width={50}
                height={50}
                alt="artificial_intelligence"
              />
              <Typography marginTop={1} variant="body2">
                AI powered knowledge base
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={secure_payment}
                width={50}
                height={50}
                alt="secure_payment"
              />
              <Typography marginTop={1} variant="body2">
                Secure payment gateway
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={customer_interaction}
                width={50}
                height={50}
                alt="customer_interaction"
              />
              <Typography marginTop={1} variant="body2">
                Customer interaction
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={order_management}
                width={50}
                height={50}
                alt="order_management"
              />
              <Typography marginTop={1} variant="body2">
                Automated Order management
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ boxShadow: 2 }}
              padding={1}
              color="#707B7C"
              textAlign="center"
            >
              <img
                src={customer_support}
                width={50}
                height={50}
                alt="customer_support"
              />
              <Typography marginTop={1} variant="body2">
                Customer support management
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
          style={{ borderRadius: 10, marginTop: "25px" }}
          height={400}
          width={600}
          src={orion2}
          alt="orion2"
        />
      </Grid>
    </Grid>
  );
};

export default EachProject;
