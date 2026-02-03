import React, { useState } from "react";
import Form from "./components/Form";

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // field-level validation (LIVE)
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim().length < 3
          ? "First name must be at least 3 characters"
          : "";

      case "lastName":
        return value.trim().length < 3
          ? "Last name must be at least 3 characters"
          : "";

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Invalid email address" : "";

      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters"
          : "";

      default:
        return "";
    }
  };

  // handle input + live validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMessage = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  // full-form validation (ON SUBMIT)
  const validate = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // dummy api call
  const fakeApiCall = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 1500)
    );

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fakeApiCall();
      console.log("API success:", response);
      alert("Form submitted successfully ✅");
    } catch (error) {
      console.error("API error:", error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      formData={formData}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}

export default FormPage;
