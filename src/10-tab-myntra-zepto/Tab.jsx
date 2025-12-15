import React, { useState } from "react";
import Profile from "./components/Profile";
import Intrests from "./components/Intrests";
import Settings from "./components/Settings";
import "../10-tab-myntra-zepto/tab.css";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [errors, setErrors] = useState({
    name: "",
  });

  const [data, setData] = useState({
    name: "Arjun",
    age: "23",
    email: "arjun@gmail.com",
    intrests: ["surf", "coding"],
    theme: "dark",
  });

  // ---------------- VALIDATION LOGIC ---------------- //
  const validateProfile = () => {
    let newErrors = {};

    if (!data.name || data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const tabs = [
    { name: "Profile", component: Profile, validate: validateProfile },
    { name: "Intrests", component: Intrests, validate: () => true },
    { name: "Settings", component: Settings, validate: () => true },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  // ---------------- BUTTON HANDLERS ---------------- //
  const handleNextClick = () => {
    const isValid = tabs[activeTab].validate();

    if (!isValid) {
      console.log("Validation failed. Cannot move next.");
      return;
    }

    setActiveTab((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    console.log("Submit data:", data);
    alert("Form submitted! Check console");
  };

  return (
    <div>
      {/* ------------- TAB HEADERS ------------- */}
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>

      {/* ------------- TAB BODY ------------- */}
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>

      {/* ------------- BUTTONS ------------- */}
      <div style={{ marginTop: "20px" }}>
        {activeTab > 0 && (
          <button onClick={handlePrevClick} style={{ marginRight: "10px" }}>
            Previous
          </button>
        )}

        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}

        {activeTab === tabs.length - 1 && (
          <button
            onClick={handleSubmitClick}
            style={{ background: "green", color: "white" }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Tab;
