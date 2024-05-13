import { Button, Typography, Grid, Box } from "@mui/material";
import knpc from "../../../assets/images/projects/knpc/knpc.jpg";
import knpc2 from "../../../assets/images/projects/knpc/knpc2.jpg";
import oil_refinery from "../../../assets/images/projects/knpc/oil_refinery.png";
import gas_processing from "../../../assets/images/projects/knpc/gas_processing.png";
import local_marketing from "../../../assets/images/projects/knpc/local_marketing.png";
import React from "react";

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
          height={250}
          width={250}
          src={knpc}
          alt="knpc"
        />
        <img
          style={{ borderRadius: 10, marginTop: "25px" }}
          height={250}
          width={500}
          src={knpc2}
          alt="knpc2"
        />
      </Grid>
      <Grid padding={3} boxSizing="border-box" xs={12} md={6}>
        <Typography color="#707B7C" marginTop={10} variant="body1">
          The Kuwait National Petroleum Company is the national oil refining
          company of Kuwait. Established in October 1960, KNPC handles the
          responsibility of oil refining, gas liquefaction, and distribution of
          petroleum goods within the local market.
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          KNPC implements the"Sustainability" concept in all activities. The
          company realizes that its role is not restricted to Oil Refining & Gas
          Processing, but is extended to include main fields of Social,
          Economic, Environmental & Governance. Hence, the company makes major
          contributions to the society in which it works within.
        </Typography>
        <Typography color="#707B7C" marginTop={2} variant="body1">
          It also ensures the safety and welfare of all employees and society
          while maintaining the environment. The “Sustainability Report,” issued
          by KNPC every other year, is verified by an international 3rd party.
        </Typography>
        <Grid spacing={2} marginY={2} container>
          <Grid item md={3} xs={12}>
            <Box
              padding={1}
              color="#707B7C"
              sx={{ borderColor: "#707B7C" }}
              borderRadius={2}
              border={1}
              textAlign="center"
            >
              <img
                src={oil_refinery}
                width={70}
                height={70}
                alt="oil_refinery"
              />
              <Typography fontWeight="bolder" variant="body2">
                Oil refinery
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ borderColor: "#707B7C" }}
              borderRadius={2}
              border={1}
              textAlign="center"
            >
              <img
                src={gas_processing}
                width={70}
                height={70}
                alt="gas_processing"
              />
              <Typography fontWeight="bolder" variant="body2">
                Gas processing
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              color="#707B7C"
              padding={1}
              sx={{ borderColor: "#707B7C" }}
              borderRadius={2}
              border={1}
              textAlign="center"
            >
              <img
                src={local_marketing}
                width={70}
                height={70}
                alt="local_marketing"
              />
              <Typography fontWeight="bolder" variant="body2">
                Local marketing
              </Typography>
            </Box>
          </Grid>
        </Grid>
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
