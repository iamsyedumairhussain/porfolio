import { Box, Typography } from "@mui/material";
import React from "react";
import Canary7 from "./component/Canary7";
import DubaiCustoms from "./component/DubaiCustoms";
import KNPC from "./component/KNPC";
import Orion from "./component/Orion";
import MyFBAPrep from "./component/MyFBAPrep";
import InjazAcademy from "./component/InjazAcademy";
import AliaAcademy from "./component/AliaAcademy";
import Divider from "@mui/material/Divider";

const index = () => {
  return (
    <Box>
      <Typography marginY={5} textAlign="center" variant="h4" letterSpacing={5}>
        PROJECTS
      </Typography>
      <Canary7 />
      <Divider variant="middle" />
      <DubaiCustoms /> <Divider variant="middle" />
      <KNPC /> <Divider variant="middle" />
      <Orion /> <Divider variant="middle" />
      <MyFBAPrep /> <Divider variant="middle" />
      <InjazAcademy /> <Divider variant="middle" />
      <AliaAcademy /> <Divider variant="middle" />
    </Box>
  );
};

export default index;
