"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {
  const [isButtonDisable, setIsButtonDisable] = React.useState(false);
  const [toastDetails, setToastDetails] = React.useState({
    message: "",
    severity: "",
    showToast: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setIsButtonDisable(true);
    const email = event.target.email.value;
    const name = event.target.name.value;
    const message = event.target.message.value;
    if (!email || !name || !message) {
      setIsButtonDisable(false);
      return setToastDetails((prevState) => ({
        ...prevState,
        message: "Please provide all the fields",
        severity: "error",
        showToast: true,
      }));
    }
    if (!regExp.test(email)) {
      setIsButtonDisable(false);
      return setToastDetails((prevState) => ({
        ...prevState,
        message: "Please provide a valid email address",
        severity: "error",
        showToast: true,
      }));
    }
    emailjs
      .sendForm(
        "service_rcfywqj",
        "template_30o90z9",
        event.target,
        "ih6C2ghjMSfkU8HVJ"
      )
      .then(
        (result) => {
          if (result && result.text) {
            setIsButtonDisable(false);
            setToastDetails((prevState) => ({
              ...prevState,
              message: "Your email has been sent successfully.",
              severity: "success",
              showToast: true,
            }));
            event.target.reset();
          }
        },
        (error) => {
          setIsButtonDisable(false);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastDetails((prevState) => ({
      ...prevState,
      showToast: false,
    }));
  };

  return (
    <>
      <Snackbar
        open={toastDetails.showToast}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          severity={toastDetails.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toastDetails.message}
        </Alert>
      </Snackbar>
      <CssBaseline />
      <Box>
        <Box textAlign="center">
          <Typography fontWeight="bold" variant="h4" color="#2E4053">
            {" "}
            Message us{" "}
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: { sm: 400 } }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="from_name"
            label="Name"
            type="name"
            id="name"
            autoComplete="current-name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="from_email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            id="outlined-multiline-static"
            fullWidth
            required
            name="message"
            label="Message"
            multiline
            rows={4}
            placeholder="Write something ..."
          />
          <Button
            disabled={isButtonDisable}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}
