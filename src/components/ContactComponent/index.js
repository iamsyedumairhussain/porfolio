import React from "react";
import Grid from "@mui/material/Grid";
import contactus from "../../assets/images/contact/contactus.png";
import ContactForm from "../contact";

const ContactComponent = (props) => {
  return (
    <Grid
      id="Contact"
      container
      spacing={2}
      marginTop={{ md: 8 }}
      marginBottom={5}
    >
      <Grid
        display={{ xs: "none", sm: "block" }}
        marginTop={{ md: 10 }}
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
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={{ xs: 5, md: 10 }}
        xs={12}
        md={8}
      >
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default ContactComponent;
