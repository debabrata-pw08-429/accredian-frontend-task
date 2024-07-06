import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import referralBanner from "../Images/referralBanner.png";
import { faqs } from "../data/staticdata";

const FAQSection = () => {
  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", my: 15 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Frequently Asked <span style={{ color: "#398fff" }}>Questions</span>
      </Typography>
      <Box sx={{ my: 7.5 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "grey" }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <img
          src={referralBanner}
          alt="FAQ related"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default FAQSection;
