import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

export default function OutlinedCard(props) {
  return (
    <Box sx={{ width: 350 }}>
      <Card elevation={0}>
        <Box textAlign="center">
          <img src={props.image} width={50} height={50} alt="web" />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
