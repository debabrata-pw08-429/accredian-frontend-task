import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import referImage from "../Images/anniversary.png";
import "../App.css";

const Section = styled(Box)(({ theme }) => ({
  backgroundColor: "#EEF5FF",
  padding: theme.spacing(4, 0),
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  maxWidth: "50%",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  maxWidth: "50%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    textAlign: "center",
  },
}));

const HeroSection = (props) => {
  const { setOpen } = props;

  return (
    <Section>
      <Container>
        <ContentBox className="heroSectionGap">
          <TextBox>
            <Typography
              variant="h2"
              sx={{
                color: "#1A202C",
                fontSize: { xs: "48px", md: "80px" },
                fontWeight: 700,
                lineHeight: { xs: "48px", md: "88px" },
                textAlign: "left",
              }}
              gutterBottom
            >
              Let’s Learn & Earn
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "24px", md: "40px" },
                fontWeight: 400,
                lineHeight: { xs: "48px", md: "65px" },
                textAlign: "left",
              }}
              gutterBottom
            >
              Get a chance to win up-to
              <span
                style={{
                  color: "#1a73e8",
                  fontSize: { xs: "36px", md: "54px" },
                  fontWeight: 700,
                  lineHeight: "65px",
                  paddingLeft: "11px",
                }}
              >
                Rs. 15,000
              </span>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Refer Now
            </Button>
          </TextBox>
          <ImageBox>
            <img
              src={referImage}
              alt="Refer & Earn"
              style={{ width: "100%", height: "auto" }}
            />
          </ImageBox>
        </ContentBox>
      </Container>
    </Section>
  );
};

export default HeroSection;
