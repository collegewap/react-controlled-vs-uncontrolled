import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert("Email: " + inputRef.current.value);
  };
  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" ref={inputRef} />
          <p className="error">Error</p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledComponent;
