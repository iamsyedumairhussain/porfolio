import React from "react";
import "../../footer.css";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import facebook from "../../assets/images/footer/facebook.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import github from "../../assets/images/footer/github.png";
import instagram from "../../assets/images/footer/instagram.png";
import gmail from "../../assets/icons/gmail.png";

const Footer = () => {
  const generateQuickLink = () => {
    const content = [
      { title: "Web application development", link: "/mern-stack" },
      { title: "Mobile application development", link: "/programming" },
      { title: "API development", link: "/blockchain" },
      { title: "Third party integration", link: "/cloud-computing" },
      { title: "Ecommerce channel integration", link: "/cloud-computing" },
      { title: "Software documentation", link: "/devops" },
      {
        title: "Custom application development",
        link: "/software-engineering",
      },
    ];

    let generatedLinks = [];
    generatedLinks = content.map((linkData, key) => {
      return (
        <p key={key} style={{ marginTop: 3 }} className="footer-company-about">
          {linkData.title}
        </p>
      );
    });

    return generatedLinks;
  };
  return (
    <footer className="footer-distributed">
      <Grid container spacing={5}>
        <Grid item md={1}></Grid>
        <Grid item xs={12} md={4}>
          <div className="">
            <p className="footer-company-about">
              <span>Offering summary</span>
            </p>
            <p style={{ marginTop: 10 }} className="footer-company-about">
              I specialize in MERN stack development, providing a range of
              services to help your business thrive. Whether you need a web
              application, a website, or a custom software solution, I can build
              it for you. I also offer API development to connect different
              systems, along with ecommerce and third-party integration to
              enhance your online presence. My goal is to create responsive,
              scalable, and secure systems that are perfectly tailored to your
              specific needs.
            </p>

            <p className="footer-links">All rights reserved</p>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <p className="footer-company-about">
              <span>Services</span>
            </p>
            <Grid color="gray" item xs={12} md={12}>
              <List>{generateQuickLink("content")}</List>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="">
            <p className="footer-company-about">
              <span>Contact Us</span>
              {"We're"} here to bring your digital vision to life! If you have
              an exciting web application project in mind, questions about our
              services, or simply want to discuss how we can help your business
              thrive online, {"we'd"} love to hear from you.
            </p>

            <div className="footer-icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100088257166763"
              >
                <img alt="default" src={facebook} width={20} height={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/syedumairhussain1998/"
              >
                <img alt="default" src={linkedin} width={20} height={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/_syedumairhussain/"
              >
                <img alt="default" src={instagram} width={20} height={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/syedumairh1998"
              >
                <img alt="default" src={github} width={20} height={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:syedumairhussain1998me@gmail.com"
              >
                <img alt="default" src={gmail} width={20} height={20} />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
