import React, { useState } from "react";
import Profile from "./components/Profile";
import Intrests from "./components/Intrests";

function Tab() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    intrests: [],
  });

  //tab switcher
  const [currentTab, setCurrentTab] = useState(0);

  console.log(currentTab);

  const handleChange = (e, item) => {

    

    setFormData((prev) => ({
      ...prev,
      // form
      [item]: e.target.value,
      //intrests
      intrests: check

    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      {currentTab === 0 && (
        <Profile
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}

      {currentTab === 1 && <Intrests
        formData={formData}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />}

      <button onClick={() => setCurrentTab(currentTab - 1)}>go back</button>

      <button onClick={() => setCurrentTab(currentTab + 1)}>next</button>
    </div>
  );
}

export default Tab;
