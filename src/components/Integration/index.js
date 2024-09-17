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
    <Container sx={{ marginY: { md: 8 } }}>
      <Divider />
      <Typography
        marginTop={{ md: 8, xs: 4 }}
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
        marginY={1}
        marginTop={6}
        container
        display={{ md: "flex" }}
        justifyContent={{ md: "center" }}
        alignItems={{ md: "center" }}
      >
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={shopify} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={woocommerce} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={magento} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={bigcommerce} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={salesforce} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={wix} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={50} width={50} src={squarespace} />
          </Box>
        </Grid>
        <Grid item xs={6} md={1} boxSizing="border-box">
          <Box textAlign="center" marginBottom={{ xs: 3, md: 0 }}>
            <img alt="" height={70} width={70} src={sap} />
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
            marginTop: { md: 5 },
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
