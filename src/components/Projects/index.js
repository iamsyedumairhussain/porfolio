import { Box, Typography } from "@mui/material";
import React from "react";
import Canary7 from "./component/Canary7";
import DubaiCustoms from "./component/DubaiCustoms";
import KNPC from "./component/KNPC";
import Orion from "./component/Orion";
import MyFBAPrep from "./component/MyFBAPrep";
import InjazAcademy from "./component/InjazAcademy";
import AliaAcademy from "./component/AliaAcademy";

const index = () => {
  return (
    <Box>
      <Typography textAlign="center" variant="h4" letterSpacing={5}>
        PROJECTS
      </Typography>
      <Canary7 />
      <DubaiCustoms />
      <KNPC />
      <Orion />
      <MyFBAPrep />
      <InjazAcademy />
      <AliaAcademy />
    </Box>
  );
};

export default index;
