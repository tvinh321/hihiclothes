import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import { Register } from "./register-styles";

const SignInAndSignUp = () => (
  <Register>
    <SignIn />
    <SignUp />
  </Register>
);

export default SignInAndSignUp;
