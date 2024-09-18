import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";
import styles from "./index.module.css";
import videoBg from "../../assets/videos/background5.mp4";
import Grid from "@mui/material/Grid";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import gmail from "../../assets/icons/gmail.png";
import instagram from "../../assets/images/footer/instagram.png";
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
        <Box
          position={{ xs: "relative", md: "absolute" }}
          color={{ xs: "black", md: "white" }}
          className={styles.content}
        >
          <Navbar />
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignContent="center"
          >
            <Grid item xs={12} md={10}>
              <Box textAlign="center" padding={2} boxSizing="border-box">
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
                  sx={{ marginLeft: 5, marginTop: 1 }}
                  variant="h5"
                  lineHeight={{ md: 1.5 }}
                  letterSpacing={{ md: 1 }}
                >
                  Software engineer - Full stack engineer
                </Typography>
                <Typography
                  color="#D6DBDF"
                  sx={{ marginTop: 3 }}
                  variant="body1"
                  lineHeight={{ md: 1.5 }}
                  letterSpacing={{ md: 1 }}
                >
                  Hey folks! It's great to have you stop by!. My name is Umair.
                  I am a dedicated Full Stack Javascript Engineer with over 3
                  years of experience specializing in MERN, MEAN, and MEVN
                  stacks. My expertise lies in developing and delivering
                  high-quality web and mobile software products, focusing on
                  microservices, RESTful services, and e-commerce integration.
                  My contributions have led to improvement in system efficiency
                  through seamless integration of front-end and back-end
                  technologies. I am committed to maintaining robust
                  documentation, rigorous testing processes, and achieving
                  bug-free deployments. My work is driven by a passion for
                  automation and scalability.
                </Typography>
                <Typography
                  color="#D6DBDF"
                  sx={{ marginTop: { xs: 1, md: 2 } }}
                  variant="body1"
                  lineHeight={{ md: 1.5 }}
                  letterSpacing={{ md: 1 }}
                >
                  My journey as a Full Stack Engineer has encompassed pivotal
                  roles in logistics, e-commerce, and banking sectors.I have
                  successfully delivered high-impact projects for Gulf
                  government entities, significantly enhancing operational
                  efficiencies and facilitating seamless integration of
                  blockchain and ecommerce technologies across various sectors.
                  I optimized operations through microservices and RESTful
                  services. In e-commerce, I crafted seamless user experiences
                  and robust payment gateways. In banking, I ensured security
                  compliance and developed financial applications. Adapting to
                  each sector's nuances, I've consistently delivered innovative
                  solutions that exceed expectations. Excited to team up and
                  make waves together! Let's get started on crafting brilliance!
                </Typography>
                <Box marginLeft={3} marginTop={4}>
                  <Box className={styles.footerIcons}>
                    <a
                      style={{ marginLeft: 5 }}
                      href="https://www.facebook.com/profile.php?id=100088257166763"
                    >
                      <img
                        alt="default"
                        src={facebook}
                        width={30}
                        height={30}
                      />
                    </a>
                    <a
                      style={{ marginLeft: 5 }}
                      href="https://github.com/syedumairh1998"
                    >
                      <img alt="default" src={github} width={30} height={30} />
                    </a>
                    <a
                      style={{ marginLeft: 5 }}
                      href="https://www.linkedin.com/in/syedumairhussain1998/"
                    >
                      <img
                        alt="default"
                        src={linkedin}
                        width={30}
                        height={30}
                      />
                    </a>
                    <a
                      style={{ marginLeft: 5 }}
                      href="mailto:syedumairhussain1998me@gmail.com"
                    >
                      <img alt="default" src={gmail} width={30} height={30} />
                    </a>
                    <a style={{ marginLeft: 5 }} href="/">
                      <img
                        alt="default"
                        src={instagram}
                        width={30}
                        height={30}
                      />
                    </a>
                  </Box>
                  <Box paddingBottom={{ xs: 5, md: 0 }} marginTop={3}>
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
                      services
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
