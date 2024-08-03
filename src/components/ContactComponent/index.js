import React from "react";
import Grid from "@mui/material/Grid";
import contactus from "../../assets/images/contact/contactus.png";
import ContactForm from "../contact";

const ContactComponent = (props) => {
  return (
    <Grid container spacing={2} marginTop={8} marginBottom={5}>
      <Grid
        display={{ xs: "none", sm: "block" }}
        marginTop={10}
        textAlign="right"
        item
        xs={12}
        md={4}
      >
        <img
          alt={props.imageAlt ? props.imageAlt : "about_roomofcode"}
          width={200}
          height={200}
          src={contactus}
        />
      </Grid>
      <Grid
        display="flex"
        justifyContent={{ xs: "center", sm: "center" }}
        alignItems={{ xs: "center", sm: "center" }}
        alignContent="center"
        marginTop={10}
        item
        xs={12}
        md={8}
      >
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default ContactComponent;
