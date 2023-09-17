import React, { useEffect, useState } from "react";
const Login = ({ onlogin }) => {
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const HndlEmail = (e) => {
    setEmail(e.target.value);
  };
  const HndlPasword = (e) => {
    setPasword(e.target.value);
  };
  useEffect(() => {
    if (email || pasword) {
      setError("Please provide both email and password");
    } else {
      setError("");
    }
  }, [email, pasword]);
  const HndlLogin = () => {
    if (email || pasword) {
      setError("enter mail and password");
      return;
    }
    if (email && pasword) {
      onlogin(email);
      setEmail("");
      setPasword("");
      setIsTyping(false)
    } else {
      setError("invalid mail and password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={HndlEmail}
            onInput={()=>setIsTyping(true)}
          />
        </div>
        <div className="input-group">
          <label>
            Password
            <input
              type="password"
              placeholder="password"
              value={pasword}
              onChange={HndlPasword}
            onInput={()=>setIsTyping(true)}
            />
          </label>
        </div>
        {error && !isTyping && <p className="error">{error}</p>}
        <button className="login-button" onClick={HndlLogin}>
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
