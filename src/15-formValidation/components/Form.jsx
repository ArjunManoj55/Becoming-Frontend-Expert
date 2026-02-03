import React from "react";

function Form({ formData, errors, onChange, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Register</h2>

      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={onChange}
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
      </div>

      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={onChange}
        />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default Form;
