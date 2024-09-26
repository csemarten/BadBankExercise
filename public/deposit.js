function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);

  // Initialize balance from context on component mount
  useEffect(() => {
    if (ctx && ctx.user) {
      setBalance(ctx.user.balance || 100); // Set initial balance, default to 100 if undefined
    }
  }, [ctx]);

  function validateDeposit(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const handleDeposit = () => {
    if (!validateDeposit(balance, 'balance') || !validateDeposit(deposit, 'deposit')) {
      return;
    }



    const parsedDeposit = parseFloat(deposit);
    if (isNaN(parsedDeposit) || parsedDeposit <= 0) {
      setStatus('Error: Deposit must be a valid positive number.');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    const newBalance = parseFloat(balance) + parsedDeposit;
    console.log('Deposit with:', { newBalance });

    // Update balance in context
    ctx.updateBalance(newBalance); // Call the updateBalance method from context

    setBalance(newBalance);
    setStatus('Deposit successful! New Balance: $' + newBalance);
    setShow(false); // Hide the form after successful deposit
  };

  const clearForm = () => {
    setDeposit('');
    setShow(true);
    setStatus(''); // Clear status message
  };

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status} 
      body={show ? (
        <>
          Balance         $100 <br/>
          <br/>
          Deposit <br/>
          <input
            type="number"
            className="form-control"
            min ="0"
            max = "100000"
            step = "1"
            id="deposit"
            placeholder="Deposit Amount"
          /><br/>
          <button
            type="button" // Change to "button" to avoid form submission
            className="btn btn-light"
            onClick={clearForm}
          >            
          Deposit
          </button>

        </>
       ) : (
        <>
          <h5>Success</h5>
          //          <button
          type="button" // Change to "button"
           className="btn btn-light"
           onClick={clearForm}
          >
                    
              Deposited
          </button>
          
        </>
      )}
    />
  );
}

export default Deposit;