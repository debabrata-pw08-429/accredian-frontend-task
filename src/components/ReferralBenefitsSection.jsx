import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import { tabledata } from "../data/staticdata";

const Sidebar = styled(Box)({
  width: "30%",
  backgroundColor: "#fff",
  padding: "16px",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  overflow: "auto",
});

const TableBox = styled(Box)({
  width: "70%",
  padding: "16px",
  overflow: "auto",
});

const SidebarItem = styled(ListItem)(({ selected }) => ({
  backgroundColor: selected ? "#ddeafc" : "transparent",
  "&:hover": {
    backgroundColor: "#ddeafc",
  },
  cursor: "pointer",
}));

const ReferralBenefitsSection = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All Programs");
  const { setOpen } = props;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          margin: "90px auto 30px auto",
          color: "black",
          textAlign: "center",
        }}
      >
        What Are The{" "}
        <span style={{ color: "#398fff" }}>Referral Benefits?</span>
      </Typography>
      <Container
        sx={{ display: "flex", my: 10, height: "65vh", alignItems: "center" }}
      >
        <Sidebar sx={{ height: "100%" }}>
          <List component="nav">
            {Object.keys(tabledata).map((category) => (
              <SidebarItem
                button
                key={category}
                selected={selectedCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                <ListItemText primary={category} />
              </SidebarItem>
            ))}
          </List>
        </Sidebar>
        <TableBox sx={{ height: "100%" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "#afcef7",
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#1350A0",
                      fontWeight: "bold",
                    }}
                  >
                    Program
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1350A0",
                      fontWeight: "bold",
                    }}
                  >
                    Referrer Bonus
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1350A0",
                      fontWeight: "bold",
                    }}
                  >
                    Referee Bonus
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata[selectedCategory].map((course) => (
                  <TableRow key={course.program}>
                    <TableCell>{course.program}</TableCell>
                    <TableCell>{course.referrerBonus}</TableCell>
                    <TableCell>{course.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableBox>
      </Container>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#1A73E8", color: "#fff" }}
          onClick={() => setOpen(true)}
        >
          Refer Now
        </Button>
      </Box>
    </Box>
  );
};

export default ReferralBenefitsSection;
