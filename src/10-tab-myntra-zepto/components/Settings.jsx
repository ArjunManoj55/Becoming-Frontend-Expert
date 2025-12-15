import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleThemeChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.value,
    }));
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        dark
      </label>

      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={handleThemeChange}
        />
        light
      </label>
    </div>
  );
};

export default Settings;
