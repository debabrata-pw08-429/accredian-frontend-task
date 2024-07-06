const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
};

const validateForm = (form, setErrors) => {
  let tempErrors = {};
  if (!form.referrer) tempErrors.referrer = "Referrer name is required";
  if (!form.referrerEmail || !validateEmail(form.referrerEmail))
    tempErrors.referrerEmail = "Valid email is required";
  if (!form.referee) tempErrors.referee = "Referee name is required";
  if (!form.refereeEmail || !validateEmail(form.refereeEmail))
    tempErrors.refereeEmail = "Valid email is required";
  if (!form.refereeContact || !validatePhoneNumber(form.refereeContact))
    tempErrors.refereeContact = "Valid contact number is required";
  if (!form.refereeAddress) tempErrors.refereeAddress = "Address is required";
  if (!form.field) tempErrors.field = "Field selection is required";
  if (!form.course) tempErrors.course = "Course selection is required";
  setErrors(tempErrors);
  return Object.keys(tempErrors).length === 0;
};

export { validateForm };
