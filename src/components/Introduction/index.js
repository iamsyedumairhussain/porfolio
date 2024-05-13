import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import styles from "./index.module.css";
import videoBg from "../../assets/videos/background2.mp4";
import Grid from "@mui/material/Grid";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import gmail from "../../assets/icons/gmail.png";
import developer from "../../assets/images/developer2.png";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontSize: "60px",
      fontWeight: "bold",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.mainDiv}>
        <Box
          display={{ xs: "none", md: "block" }}
          className={styles.overlay}
        ></Box>
        <Box display={{ xs: "none", md: "inline" }}>
          <video className={styles.video} src={videoBg} autoPlay loop muted />
        </Box>
        <Box color={{ xs: "black", md: "white" }} className={styles.content}>
          <Navbar />
          <Grid container>
            <Grid border="1px soiid white" item md={7}>
              <Box padding={2} boxSizing="border-box">
                <Typography
                  color="#D0D3D4"
                  letterSpacing={2}
                  fontWeight="bold"
                  variant="h3"
                >
                  SYED UMAIR HUSSAIN
                </Typography>
                <Typography
                  color="#D6DBDF"
                  fontWeight="bold"
                  sx={{ marginLeft: 3, marginTop: 1 }}
                  variant="h6"
                >
                  Senior software engineer - Full stack engineer
                </Typography>
                <Typography
                  color="#D6DBDF"
                  sx={{ marginLeft: 3 }}
                  variant="body2"
                >
                  Hey folks! It's great to have you stop by! I am Umair. I'm an
                  experienced full Stack Engineer specializing in MERN, MEAN &
                  MEVN stack development. Skilled in crafting robust APIs,
                  integration of third party APIs, orchestrating deployments
                  with Docker and Kubernetes, and seamlessly integrating
                  front-end and back-end components for optimal performance.
                </Typography>
                <Typography
                  color="#D6DBDF"
                  sx={{ marginLeft: 3, marginTop: 1 }}
                  variant="body2"
                >
                  My journey as a Full Stack Engineer has encompassed pivotal
                  roles in logistics, e-commerce, and banking sectors. In
                  logistics, I optimized operations through microservices and
                  RESTful services. In e-commerce, I crafted seamless user
                  experiences and robust payment gateways. In banking, I ensured
                  security compliance and developed financial applications.
                  Adapting to each sector's nuances, I've consistently delivered
                  innovative solutions that exceed expectations. Excited to team
                  up and make waves together! Let's get started on crafting
                  brilliance!
                </Typography>
                <Box marginLeft={3} marginTop={2}>
                  <Box className={styles.footerIcons}>
                    <a href="/">
                      <img
                        alt="default"
                        src={facebook}
                        width={25}
                        height={25}
                      />
                    </a>
                    <a href="/">
                      <img alt="default" src={github} width={25} height={25} />
                    </a>
                    <a href="/">
                      <img
                        alt="default"
                        src={linkedin}
                        width={25}
                        height={25}
                      />
                    </a>
                    <a href="/">
                      <img alt="default" src={gmail} width={25} height={25} />
                    </a>
                  </Box>
                  <Box>
                    <Box marginTop={2}>
                      <Button
                        className={styles.btn}
                        sx={{
                          "&:hover": {
                            backgroundColor: "whitesmoke",
                            color: "black",
                            border: "1px solid whitesmoke",
                          },
                          border: "1px solid whitesmoke",
                          color: "whitesmoke",
                        }}
                      >
                        Lets talk !
                      </Button>
                      <Button
                        className={styles.btn}
                        sx={{
                          "&:hover": {
                            backgroundColor: "whitesmoke",
                            color: "black",
                            border: "1px solid whitesmoke",
                          },
                          marginLeft: 2,
                          border: "1px solid white",
                          color: "whitesmoke",
                        }}
                        variant="outlined"
                      >
                        View services
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box
                marginTop={4}
                display={{ xs: "none", md: "flex" }}
                justifyContent="center"
                alignItems="center"
              >
                <img alt="default" src={developer} width={280} height={400} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
