import React from "react";
import "../../footer.css";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/footer/logo.png";
import facebook from "../../assets/images/footer/facebook.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import github from "../../assets/images/footer/github.png";
import instagram from "../../assets/images/footer/instagram.png";

const Footer = () => {
  const generateQuickLink = (linkPassed) => {
    const quickLinks = [
      { title: "Home", link: "/" },
      { title: "Programming", link: "/programming" },
      { title: "Development", link: "/software-development" },
      { title: "Interview Questions", link: "/interview-questions" },
      { title: "CheatSheet", link: "/cheatsheet" },
      { title: "Technology", link: "/technology" },
      { title: "About Us", link: "/about-us" },
    ];
    const content = [
      { title: "MERN stack", link: "/mern-stack" },
      { title: "Programming", link: "/programming" },
      { title: "Blockchain", link: "/blockchain" },
      { title: "DevOps", link: "/devops" },
      { title: "Cloud computing", link: "/cloud-computing" },
      { title: "Software Engineering", link: "/software-engineering" },
    ];

    let generatedLinks = [];
    const links = linkPassed === "quickLinks" ? quickLinks : content;
    if (linkPassed === "quickLinks") {
      generatedLinks = links.map((linkData, key) => {
        return (
          <a key={key} href={linkData.link} style={{ color: "gray" }}>
            <p style={{ marginTop: 3 }} className="footer-company-about">
              {linkData.title}
            </p>
          </a>
        );
      });
    } else {
      generatedLinks = links.map((linkData, key) => {
        return (
          <p
            key={key}
            style={{ marginTop: 3 }}
            className="footer-company-about"
          >
            {linkData.title}
          </p>
        );
      });
    }
    return generatedLinks;
  };
  return (
    <footer className="footer-distributed">
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <div className="">
            <p style={{ marginTop: 10 }} className="footer-company-about">
              Explore a world of cutting-edge technology, expert analysis, and
              innovative solutions right here on our IT blogs. Whether{" "}
              {"you're"} a tech enthusiast, a seasoned IT professional, or just
              curious about the latest digital trends, our blog is your go-to
              destination. Stay up-to-date with the rapidly evolving tech
              landscape as our team of experienced writers, industry experts,
              and passionate tech enthusiasts cover a wide range of topics.
            </p>

            <p className="footer-links">RoomOfCode © 2023</p>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="">
            <div>
              <p className="footer-company-about">
                <span>Quick Links</span>
              </p>
              <Grid color="gray" item xs={12} md={6}>
                <List>{generateQuickLink("quickLinks")}</List>
              </Grid>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="">
            <div>
              <p className="footer-company-about">
                <span>Content we cover</span>
              </p>
              <Grid color="gray" item xs={12} md={6}>
                <List>{generateQuickLink("content")}</List>
              </Grid>
            </div>
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
              <a href="/">
                <img alt="default" src={facebook} width={20} height={20} />
              </a>
              <a href="/">
                <img alt="default" src={linkedin} width={20} height={20} />
              </a>
              <a href="/">
                <img alt="default" src={instagram} width={20} height={20} />
              </a>
              <a href="/">
                <img alt="default" src={github} width={20} height={20} />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
