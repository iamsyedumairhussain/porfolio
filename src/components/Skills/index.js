import { Box, Container, Grid, Typography } from "@mui/material";
import ux2 from "../../assets/images/skills/ux2.png";
import coding from "../../assets/images/skills/coding.png";
import tools from "../../assets/images/skills/tools.png";
import ecommerce from "../../assets/images/skills/ecommerce.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";

const Services = () => {
  return (
    <Box id="Skills" boxSizing="border-box" padding={2} marginTop={3}>
      <Typography textAlign="center" variant="h4" letterSpacing={5}>
        SKILLS
      </Typography>
      <Container sx={{ marginTop: 3 }}>
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="top"
          spacing={2}
          marginY={1}
          container
        >
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 350 }}>
              <Card
                sx={{
                  padding: 2,
                  color: "#34495E",
                  backgroundColor: "#FBFCFC",
                }}
                elevation={3}
              >
                {/* <Box textAlign="center">
                  <img src={ux} width={50} height={50} alt="ux" />
                </Box> */}
                <CardContent>
                  <Grid container>
                    <Grid textAlign="left" item xs={2}>
                      <img src={ux2} width={30} height={30} alt="ux" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        fontWeight="bolder"
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        FRONTEND DEVELOPMENT
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box fontSize={14}>
                    <Typography marginTop={2}>
                      Libraries and frameworks
                    </Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>React JS - Next JS</li>
                      <li>Vue JS - Nuxt JS</li>
                      <li>Angular JS </li>
                    </ul>
                    <Typography>State management</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>React redux / Redux toolkit</li>
                    </ul>
                    <Typography>CSS frameworks</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>Material UI</li>
                      <li>Boostrap</li>
                      <li>Tailwind CSS</li>
                      <li>Ant design</li>
                      <li> Chakra UI</li>
                    </ul>
                  </Box>
                  {/* <li>React JS - Next JS</li>
            <li>Vue JS - Nuxt JS</li>
            <li>Angular</li> */}
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 350 }}>
              <Card
                sx={{
                  padding: 2,
                  color: "#34495E",
                  backgroundColor: "#FBFCFC",
                }}
                elevation={3}
              >
                <CardContent>
                  <Grid container>
                    <Grid textAlign="left" item xs={2}>
                      <img src={ux2} width={30} height={30} alt="ux" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        fontWeight="bolder"
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        BACKEND DEVELOPMENT
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    fontWeight="bolder"
                    gutterBottom
                    variant="body1"
                    component="div"
                  ></Typography>
                  {/* <Typography marginTop={3}>Basics</Typography> */}
                  <Box fontSize={14}>
                    {/* <ul
                    style={{
                      display: "inline-block",
                      marginTop: 5,
                    }}
                  >
                    <li>HTML - CSS - Javascript / Typescript</li>
                  </ul> */}
                    <Typography marginTop={2}>
                      Libraries and frameworks
                    </Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>Node JS - Express JS</li>
                      <li>PHP - Laravel</li>
                    </ul>
                    <Typography>Databases</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>MS SQL - MySQL</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                      <li>CouchDB</li>
                      <li>Firebase</li>
                      <li>Redis</li>
                    </ul>
                    <Typography>Messaging Queue</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>RabbitMQ</li>
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 350, height: "100%" }}>
              <Card
                sx={{
                  padding: 2,
                  color: "#34495E",
                  backgroundColor: "#FBFCFC",
                }}
                elevation={3}
              >
                <CardContent>
                  <Grid container>
                    <Grid textAlign="left" item xs={2}>
                      <img src={ux2} width={30} height={30} alt="ux" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        fontWeight="bolder"
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        DEVELOPMENT TOOLS
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* <Typography marginTop={3}>Basics</Typography> */}
                  <Box fontSize={14}>
                    <Typography marginTop={2}>
                      Automation & Orchestration tools
                    </Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>Docker</li>
                      <li>Kubernetes</li>
                    </ul>
                    <Typography>Development architecture</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>Monolithic architecture</li>
                      <li>Microservice architecture</li>
                    </ul>
                    <Typography>Foundational understanding</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>AWS</li>
                      <li>Golang</li>
                      <li>C - C++</li>
                      <li>Python</li>
                      <li>Linux - Bash scripting</li>
                    </ul>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: 350 }}>
              <Card
                sx={{
                  padding: 2,
                  color: "#34495E",
                  backgroundColor: "#FBFCFC",
                }}
                elevation={3}
              >
                <CardContent>
                  <Grid container>
                    <Grid textAlign="left" item xs={2}>
                      <img src={ux2} width={30} height={30} alt="ux" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        fontWeight="bolder"
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        E-COMMERCE CHANNEL INTEGRATION
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* <Typography marginTop={3}>Basics</Typography> */}
                  <Box fontSize={14}>
                    {/* <ul
                    style={{
                      display: "inline-block",
                      marginTop: 5,
                    }}
                  >
                    <li>HTML - CSS - Javascript / Typescript</li>
                  </ul> */}
                    <Typography marginTop={2}>Integration features</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>Unified Customer Experience</li>
                      <li>Centralized Data Management</li>
                      <li>Cross-Channel Inventory Visibility </li>
                      <li>Personalization </li>
                      <li>Seamless Transactions </li>
                      <li>Flexible Fulfillment Options </li>
                      <li>Data Analytics and Insights </li>
                    </ul>
                    <Typography>Ecommerce channels</Typography>
                    <ul
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                      }}
                    >
                      <li>Shopify</li>
                      <li>WooCommerce </li>
                      <li>Magento </li>
                      <li>BigCommerce</li>
                      <li>Salesforce Commerce Cloud</li>
                      <li>Wix eCommerce</li>
                      <li>Squarespace Commerce</li>
                      <li>SAP Commerce Cloud & more.</li>
                    </ul>
                  </Box>
                  {/* <li>React JS - Next JS</li>
            <li>Vue JS - Nuxt JS</li>
            <li>Angular</li> */}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
