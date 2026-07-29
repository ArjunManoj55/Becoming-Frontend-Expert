import React, { useState } from 'react'
import Profile from './components/Profile'

function Tab() {

  const[formData, setFormData] = useState({
    name: "",
    age:"",
    sex: ""
  })

  const handleChange = (e, item) => {

    setFormData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));

  };

  const handleSubmit = () => {
    console.log(formData);
  }
  
  return (
    <div>
      
    <Profile formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>


    </div>
  )
}

export default Tab