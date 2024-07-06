import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Section = styled(Box)(({ theme }) => ({
  margin: "50px 0px",
  padding: theme.spacing(4, 0),
  textAlign: "center",
}));

const StepBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: "black",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: "48px",
  color: "#398fff",
}));

const HowToReferSection = (props) => {
  const { setOpen } = props;

  return (
    <Section>
      <Container>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            color: "black",
          }}
        >
          How Do I <span style={{ color: "#398fff" }}>Refer?</span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} style={{ marginTop: "48px" }}>
            <StepBox elevation={3}>
              <IconWrapper>
                <PersonAddAltIcon style={{ fontSize: "48px" }} />
              </IconWrapper>
              <Typography variant="body1">
                Submit referrals easily via our website's referral section.
              </Typography>
            </StepBox>
          </Grid>
          <Grid item xs={12} md={4} style={{ marginTop: "48px" }}>
            <StepBox elevation={3}>
              <IconWrapper>
                <ReceiptIcon style={{ fontSize: "48px" }} />
              </IconWrapper>
              <Typography variant="body1">
                Earn rewards once your referral joins an Accredian program.
              </Typography>
            </StepBox>
          </Grid>
          <Grid item xs={12} md={4} style={{ marginTop: "48px" }}>
            <StepBox elevation={3}>
              <IconWrapper>
                <BusinessCenterIcon style={{ fontSize: "48px" }} />
              </IconWrapper>
              <Typography variant="body1">
                Both parties receive a bonus 30 days after program enrollment.
              </Typography>
            </StepBox>
          </Grid>
        </Grid>
        <Box mt={15}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setOpen(true)}
          >
            Refer Now
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default HowToReferSection;
