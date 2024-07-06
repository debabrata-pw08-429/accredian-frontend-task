import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { footerData } from "../data/staticdata";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1c1c1c",
        color: "#fff",
        py: 4,
        px: 2,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: "95%",
          margin: "auto",
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" gutterBottom style={{ color: "#398fff" }}>
            {footerData.title}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "lightgrey", mt: "-12px" }}
          >
            {footerData.tagLine}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2, mb: 1 }}>
            {footerData.callToAction}
          </Button>
          <Typography variant="caption" display="block" gutterBottom>
            {footerData.advisorCTA}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom style={{ color: "#398fff" }}>
            Programs
          </Typography>
          {footerData.programs.map((program, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 1 }}>
              {program}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom style={{ color: "#398fff" }}>
            Contact Us
          </Typography>
          {footerData.contactInfo.map((info, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: "lightgrey" }}>
                {info.label}
              </Typography>
              <Typography variant="body2">{info.value}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom style={{ color: "#398fff" }}>
            Accredian
          </Typography>
          {footerData.aboutLinks.map((link, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 1 }}>
              {link}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Box
        sx={{ mt: 4, borderTop: "1px solid #444", pt: 2, textAlign: "center" }}
      >
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          sx={{ mb: 3 }}
        >
          {footerData.copyright}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <Facebook />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <LinkedIn />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <Twitter />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <Instagram />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <YouTube />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
