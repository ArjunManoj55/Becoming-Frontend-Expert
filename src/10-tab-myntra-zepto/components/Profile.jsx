import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;
  const handleDataChange = (e, item) => {
    setData(prevState => ({
        ...prevState,
        [item]:e.target.value

    })) 
  }
  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=> handleDataChange(e, "name")} /> 
        {errors.name}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e)=> handleDataChange(e, "email")} />
         {errors.email}
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e)=> handleDataChange(e, "age")} />
         {errors.age}
      </div>
    </div>
  );
};

export default Profile;
