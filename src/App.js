import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setEmail(e.target.value);
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
        value
      )
    ) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };
  return (
    <div className="App">
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={inputChangeHandler}
        />
        <p className="error">{error && error}</p>
      </div>
    </div>
  );
}

export default App;
