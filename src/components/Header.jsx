import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import accredianLogo from "../Images/accredianLogo.png";
import "../App.css";

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#EEF5FF",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#398fff",
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2, 0),
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const NavList = styled(Box)(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MobileNavList = styled(List)(({ theme }) => ({
  width: 250,
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <NavBar position="static">
        <Typography variant="body1">
          Navigate your ideal career path with tailored expert advice
          <Button color="primary" sx={{ fontWeight: "bold", paddingLeft: 1 }}>
            Contact Expert
          </Button>
        </Typography>
      </NavBar>
      <AppBar position="static" color="default">
        <Container>
          <Toolbar disableGutters>
            <HeaderBox className="displayFlex">
              <LogoBox>
                <img
                  src={accredianLogo}
                  alt="Accredian Logo"
                  style={{ width: "110px", height: "50px" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  href="https://accredian.com/whyaccredian"
                >
                  Courses
                  <ExpandMoreIcon />
                </Button>
              </LogoBox>
              <NavList component="ul" className="navList">
                <Box component="li">
                  <Typography variant="body1">Refer & Earn</Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">Resources</Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1">About us</Typography>
                </Box>
                <Box component="li">
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://accredian.com/login"
                  >
                    Login
                  </Button>
                </Box>
                <Box component="li">
                  <Button variant="contained" color="primary">
                    Try for free
                  </Button>
                </Box>
              </NavList>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </HeaderBox>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        <MobileNavList>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Refer & Earn" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="About us" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              href="https://accredian.com/login"
            >
              Login
            </Button>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href="https://accredian.com/whyaccredian"
            >
              Courses
            </Button>
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <Button variant="contained" color="primary" fullWidth>
              Try for free
            </Button>
          </ListItem>
        </MobileNavList>
      </Drawer>
    </>
  );
};

export default Header;
