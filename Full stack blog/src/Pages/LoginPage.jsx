import React from "react";
import "../App.css"

const LoginPage = () => {
  return (
    <>
      <form className="login">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
