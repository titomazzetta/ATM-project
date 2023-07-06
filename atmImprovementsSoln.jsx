const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="number-input" type="number" width="200" onChange={onChange}></input>
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;

  const balanceStyle = {
    display: 'inline-block',
    border: totalState !== 0 ? (totalState > 0 ? '2px solid green' : '2px solid red') : 'none',
    padding: '10px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const labelStyle = {
    marginBottom: '10px',
  };

  const selectStyle = {
    width: '200px',
    marginBottom: '10px',
  };

  const submitButtonStyle = {
    backgroundColor: '#0c80f3',
    border: '6px solid #0ff166',
    borderRadius: '10px',
    width: '150px',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    alignSelf: 'center',
  };

  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <>
        <h2 id="total" style={balanceStyle}>{status}</h2>
        <br />
        <label style={labelStyle}>Select an action below to continue</label>
        <br />
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select" style={selectStyle}>
          <option id="no-selection" value=""></option>
          <option id="deposit-selection" value="Deposit">
           Deposit
          </option>
          <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option>
        </select>
        {atmMode && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
          />
        )}
        <input type="submit" disabled={!validTransaction} value="Submit" id="submit-input" style={submitButtonStyle} />
      </>
    </form>
  );
};

ReactDOM.render(<Account />, document.getElementById('root'));
