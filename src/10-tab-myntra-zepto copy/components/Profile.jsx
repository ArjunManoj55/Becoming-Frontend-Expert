import React, { useState } from "react";

function Profile({ formData, handleSubmit, handleChange }) {
 
  return (
    <div>
      <div>
        <input value={formData.name} placeholder="name" onChange={(e) => handleChange(e, 'name')}></input>
      </div>
      <div>
        <input value={formData.age} placeholder="age" onChange={(e) => handleChange(e, 'age')}></input>
      </div>

      <div>
        <input value={formData.sex} placeholder="sex" onChange={(e) => handleChange(e, 'sex')}></input>
      </div>

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Profile;
