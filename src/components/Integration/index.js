import React from "react";
import { Grid, Container, Typography, Button, Box } from "@mui/material";
import shopify from "../../assets/images/integrations/shopify.png";
import woocommerce from "../../assets/images/integrations/woocommerce.png";
import magento from "../../assets/images/integrations/magento.png";
import bigcommerce from "../../assets/images/integrations/bigcommerce.png";
import salesforce from "../../assets/images/integrations/salesforce.png";
import wix from "../../assets/images/integrations/wix.png";
import squarespace from "../../assets/images/integrations/squarespace.png";
import sap from "../../assets/images/integrations/sap.png";
import Divider from "@mui/material/Divider";

const index = () => {
  const navigate = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView();
    }
  };
  return (
    <Container sx={{ marginY: 8 }}>
      <Divider />
      <Typography
        marginTop={8}
        textAlign="center"
        variant="h5"
        fontWeight="bold"
      >
        Transform Your E-commerce Operations with Seamless Integration Solutions
      </Typography>
      <Typography marginTop={3} textAlign="center" variant="body1">
        In today’s dynamic digital marketplace, efficient integration between
        e-commerce platforms and carrier services is crucial for ensuring a
        smooth and scalable operation. Our comprehensive e-commerce channel and
        carrier integration service is designed to bridge the gap between your
        online store and logistics, enhancing your business's efficiency,
        accuracy, and customer satisfaction
      </Typography>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="top"
        spacing={3}
        marginY={1}
        marginTop={6}
        container
      >
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} padding={1} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={shopify} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={woocommerce} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={magento} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={bigcommerce} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={salesforce} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={wix} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={squarespace} />
          </Box>
        </Grid>
        <Grid textAlign="center" boxSizing="border-box">
          <Box marginBottom={{ xs: 3, md: 0 }} sx={{ width: 140 }}>
            <img alt="" height={50} width={50} src={sap} />
          </Box>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Button
          onClick={() => navigate("Contact")}
          sx={{
            "&:hover": {
              backgroundColor: "whitesmoke",
              color: "black",
              border: "1px solid whitesmoke",
            },
            marginTop: 5,
            paddingX: 5,
            textAlign: "center",
            border: "1px solid whitesmoke",
            color: "whitesmoke",
            backgroundColor: "#2E86C1",
            borderRadius: 10,
          }}
        >
          Lets talk !
        </Button>
      </Box>

      <Divider sx={{ marginTop: 8 }} />
    </Container>
  );
};

export default index;
