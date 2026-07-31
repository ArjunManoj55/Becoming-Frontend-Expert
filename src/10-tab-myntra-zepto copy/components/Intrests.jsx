import React from "react";

function Intrests({ formData, onChange, handleSubmit }) {
  // const {intrests} = formData;

  return (
    <div>
      <div>
        coding
        <label>
          <input
            type="checkBox"
            name="code"
            checked={formData.intrests.includes("code")}
            onChange={(e) => handleChange(e, "code")}
          />
        </label>
      </div>
      <div>
        karate
        <label>
          <input
            type="checkBox"
            checked={formData?.intrests?.includes("karate")}
            onChange={(e) => handleChange(e, "karate")}
          />
        </label>
      </div>
      <div>
        <label>
          surf
          <input
            type="checkBox"
            checked={formData?.intrests?.includes("surf")}
            onChange={(e) => handleChange(e, "surf")}
          />
        </label>
      </div>
    </div>
  );
}

export default Intrests;
