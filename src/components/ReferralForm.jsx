import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import WarningIcon from "@mui/icons-material/Warning";
import { courses } from "../data/staticdata";
import { validateForm } from "../utils/formValidations";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "&.Mui-error": {
    backgroundColor: "#ffe6e6",
  },
}));

const ErrorMessage = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "red",
  marginTop: theme.spacing(0.5),
}));

const ReferEarnLandingPage = (props) => {
  const [form, setForm] = useState({
    referrer: "",
    referrerEmail: "",
    referrerMessage: "",
    referee: "",
    refereeEmail: "",
    refereeContact: "",
    refereeAddress: "",
    field: "",
    course: "",
  });
  const [errors, setErrors] = useState({});
  const { open, setOpen } = props;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm(form, setErrors)) {
      console.log("Form-Data :: ", form);
      const BACKEND_URL = `https://accredian-backend-task-j3zr.onrender.com/api/referral`;

      try {
        const response = await fetch(BACKEND_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Success :: ", data);

        handleClose();
        setForm({
          referrer: "",
          referrerEmail: "",
          referrerMessage: "",
          referee: "",
          refereeEmail: "",
          refereeContact: "",
          refereeAddress: "",
          field: "",
          course: "",
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Typography variant="h4" align="center" color="black">
            Referral Form
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Referrer Details</Typography>
                <StyledTextField
                  error={!!errors.referrer}
                  name="referrer"
                  label="Referrer Name"
                  type="text"
                  fullWidth
                  value={form.referrer}
                  onChange={handleChange}
                  required
                />
                {errors.referrer && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.referrer}</span>
                  </ErrorMessage>
                )}
                <StyledTextField
                  error={!!errors.referrerEmail}
                  name="referrerEmail"
                  label="Referrer Email"
                  type="email"
                  fullWidth
                  value={form.referrerEmail}
                  onChange={handleChange}
                  required
                />
                {errors.referrerEmail && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.referrerEmail}</span>
                  </ErrorMessage>
                )}
                <StyledTextField
                  error={!!errors.referrerMessage}
                  name="referrerMessage"
                  label="Custom Message"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  value={form.referrerMessage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Referee Details</Typography>
                <StyledTextField
                  error={!!errors.referee}
                  name="referee"
                  label="Referee Name"
                  type="text"
                  fullWidth
                  value={form.referee}
                  onChange={handleChange}
                  required
                />
                {errors.referee && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.referee}</span>
                  </ErrorMessage>
                )}
                <StyledTextField
                  error={!!errors.refereeEmail}
                  name="refereeEmail"
                  label="Referee Email"
                  type="email"
                  fullWidth
                  value={form.refereeEmail}
                  onChange={handleChange}
                  required
                />
                {errors.refereeEmail && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.refereeEmail}</span>
                  </ErrorMessage>
                )}
                <StyledTextField
                  error={!!errors.refereeContact}
                  name="refereeContact"
                  label="Referee Contact"
                  type="text"
                  fullWidth
                  value={form.refereeContact}
                  onChange={handleChange}
                  required
                />
                {errors.refereeContact && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.refereeContact}</span>
                  </ErrorMessage>
                )}
                <StyledTextField
                  error={!!errors.refereeAddress}
                  name="refereeAddress"
                  label="Referee Address"
                  type="text"
                  fullWidth
                  value={form.refereeAddress}
                  onChange={handleChange}
                  required
                />
                {errors.refereeAddress && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.refereeAddress}</span>
                  </ErrorMessage>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Field</InputLabel>
                  <Select
                    name="field"
                    value={form.field}
                    onChange={handleChange}
                    error={!!errors.field}
                  >
                    {Object.keys(courses).map((field) => (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.field && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.field}</span>
                  </ErrorMessage>
                )}
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Course</InputLabel>
                  <Select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    disabled={!form.field}
                    error={!!errors.course}
                  >
                    {form.field &&
                      courses[form.field].map((course) => (
                        <MenuItem key={course} value={course}>
                          {course}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.course && (
                  <ErrorMessage>
                    <WarningIcon fontSize="small" />
                    <span>{errors.course}</span>
                  </ErrorMessage>
                )}
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReferEarnLandingPage;
