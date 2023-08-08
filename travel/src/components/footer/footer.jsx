import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {

    const sectionStyles = {
        fontSize: "1rem", 
        color: "rgb(9, 120, 134)",
        fontFamily: "cursive", 
      };
      const boldHeadingStyles = {
        ...sectionStyles,
        fontWeight: "bold", 
        fontSize: "2rem", 
        color: "rgb(9, 120, 134)",
        fontFamily: "cursive",
      };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgb(112, 204, 231)",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={boldHeadingStyles}>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" style={sectionStyles}>
            We are your dedicated partners in
           exploring the world and making your travel dreams a reality. With a passion
           for adventure and a commitment to quality, we curate exceptional travel
           experiences that leave you with unforgettable memories..
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={boldHeadingStyles}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" style={sectionStyles}>
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary" style={sectionStyles}>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary" style={sectionStyles}>
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={boldHeadingStyles}>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center"
           sx={{
            fontSize: "2rem", // Font size set to 2rem
            color: "rgb(9, 120, 134)", // Font color set to rgb(9, 120, 134)
            fontFamily: "cursive", // Font family set to cursive
          }}>
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Herdoy Holidays
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
