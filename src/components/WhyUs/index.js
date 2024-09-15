import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import code from "../../assets/images/whyus/code.png";
import deployment from "../../assets/images/whyus/deployment.png";
import database from "../../assets/images/whyus/database.png";
import document from "../../assets/images/whyus/document.png";
import analytics from "../../assets/images/whyus/analytics.png";
import support from "../../assets/images/whyus/support.png";

const index = () => {
  return (
    <Grid marginTop={10} container marginY={3}>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Box marginLeft={5} color="#707B7C">
          <Typography marginY={2} variant="h4">
            What you'll get ?
          </Typography>
          <Typography marginY={2} variant="body1">
            {
              "As your software developer, I will provide the following deliverables for your web application: the complete source code, detailed documentation, design assets, testing materials, deployment details, database schema and backup procedures, security configurations, necessary software licenses, project management artifacts, training and support resources, analytics setup, and legal compliance documentation."
            }
          </Typography>
        </Box>
      </Grid>
      <Grid marginTop={2} padding={3} boxSizing="border-box" xs={12} md={6}>
        <Grid spacing={2} paddingLeft={{ md: 2 }} marginY={2} container>
          <Grid item md={3} xs={12}>
            <Box
              padding={1}
              color="#707B7C"
              sx={{ boxShadow: 3 }}
              textAlign="center"
            >
              <img src={code} width={70} height={70} alt="oil_refinery" />
              <Typography variant="body1">Source code</Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 3 }}
              textAlign="center"
            >
              <img src={database} width={70} height={70} alt="gas_processing" />
              <Typography variant="body1">Database</Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 3 }}
              textAlign="center"
            >
              <img
                src={deployment}
                width={70}
                height={70}
                alt="local_marketing"
              />
              <Typography variant="body1">Deployment</Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 3 }}
              textAlign="center"
            >
              <img src={support} width={70} height={70} alt="local_marketing" />
              <Typography variant="body1">Support</Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 3 }}
              textAlign="center"
            >
              <img
                src={document}
                width={70}
                height={70}
                alt="local_marketing"
              />
              <Typography variant="body1">Documentation</Typography>
            </Box>
          </Grid>{" "}
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ boxShadow: 3 }}
              textAlign="center"
            >
              <img
                src={analytics}
                width={70}
                height={70}
                alt="local_marketing"
              />
              <Typography variant="body1">Analytics</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
