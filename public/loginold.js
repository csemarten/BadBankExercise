import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { users, user, login, logout } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const account = users.find((existingUser) => existingUser.email === email);
    if (account && password === account?.password) {
      login(account);
      setEmail("");
      setPassword("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (user) {
    return (
      <div className="container">
        <h2>Welcome, {user.name}!</h2>
        <button className="btn btn-warning" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
  <Card
  bgcolor="primary"
  header="Create Account"
  body={show ? (  
          <>
          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
          </>
        ):(
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
          </>
        )}
/>
)
/*(
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );*/
}

export default Login;

