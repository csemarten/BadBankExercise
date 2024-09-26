function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validateLogin(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleLogin = () => {
    if (!validateLogin(email, 'email') || !validateLogin(password, 'password')) {
      return;
    }
    // Add login logic here, e.g., calling an API
    console.log('Logging in with:', { email, password });
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setShow(true);
  };

  return (
    <Card
      bgcolor="warning"
      header="Login"
      status={status}
      body={show ? (
        <>
          Email address<br/>
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          /><br/>
          Password<br/>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          /><br/>
          <button
            type="button" // Change to "button" to avoid form submission
            className="btn btn-light"
            onClick={handleLogin}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button
            type="button" // Change to "button"
            className="btn btn-light"
            onClick={clearForm}
          >
            Login
          </button>
        </>
      )}
    /
    
    
    
    
    
    >
  );
}

export default Login;