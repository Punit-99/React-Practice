import { useState } from "react";
import CommonForm from "../common-form/commonForm";
import { registerFormElements } from "../../../config/configIndex";

const Register = () => {
  const initialRegisterState = {
    name: "",
    password: "",
    email: "",
  };

  const [registerFormData, setRegisterFormData] =
    useState(initialRegisterState);

  function onHandleSubmit(e) {
    e.preventDefault();
    //api call

    setRegisterFormData(initialRegisterState);
  }
  return (
    <CommonForm
      formControls={registerFormElements}
      formData={registerFormData}
      setFormData={setRegisterFormData}
      buttonText={"Register"}
      onHandleSubmit={onHandleSubmit}
    />
  );
};

export default Register;
