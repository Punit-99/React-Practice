// Dynamic Form Creation

import { useState } from "react";

const FormComponet = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  //   Common Way to Handle Value
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  //   const handleValueChange = (e) => {
  //     console.log(e.target.name);

  //     setValue(e.target.value);
  //   };
  //   const handleEmailChange = (e) => {
  //     console.log(e.target.name);

  //     setEmail(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, email);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  return (
    <>
      <div>FormComponet</div>
      <br />
      <div className="form-field" style={{ display: "flex", gap: "10px" }}>
        <form action="">
          <input
            name="name"
            value={formData.name}
            id="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormComponet;
