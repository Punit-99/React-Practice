import { useState } from "react";
import { loginFormElements } from "../../../config/configIndex";
import CommonForm from "../common-form/commonForm";

const Login = () => {
  const initialFormState = {
    email: "",
    password: "",
  };
  const [loginFormData, setLoginFormData] = useState(initialFormState);
  console.log(loginFormData);

  function onHandleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    // api login
    setLoginFormData(initialFormState);
  }
  return (
    <CommonForm
      formControls={loginFormElements}
      formData={loginFormData}
      setFormData={setLoginFormData}
      buttonText={"Login"}
      onHandleSubmit={onHandleSubmit}
    />
  );
};

export default Login;
