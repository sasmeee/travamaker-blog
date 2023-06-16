import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="ct-container">
      <p className="ct-title">
        Contact <span>Here</span>
      </p>
      <form className="ct-content" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
          placeholder="Enter Name"
        />
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}
          value={data.email}
          placeholder="example@gmail.com"
        />
        <input
          type="phone"
          name="phone"
          id=""
          onChange={handleChange}
          value={data.phone}
          placeholder="+94"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          value={data.message}
          placeholder="Type here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
