import React from "react";

const Intrests = ({ data, setData, errors }) => {
  const { intrests } = data;

  const handleChange = (e) => {
    const value = e.target.name;

    const updated = intrests.includes(value)
      ? intrests.filter((item) => item !== value)
      : [...intrests, value];
    setData((prev) => ({ ...prev, intrests: updated }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={intrests.includes("coding")}
            onChange={handleChange}
          />
          coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="surf"
            checked={intrests.includes("surf")}
            onChange={handleChange}
          />
          surf
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={intrests.includes("music")}
            onChange={handleChange}
          />
          music
        </label>
      </div>
      {errors.intrests}
    </div>
  );
};

export default Intrests;
