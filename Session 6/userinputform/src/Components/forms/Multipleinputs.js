import React, { useState } from "react";
import "./CSS/style.css";
const Multipleinputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...setUserRegistration, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id:new Date().getTime().toString()};
      console.log(records)
    setRecords([...records, newRecord]);
    console.log(records);
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  }
  return (
    <div className="container">
        <h2>Register here</h2>
        <hr />
      <form action=""onSubmit={handleSubmit}>
        <div>
        
          <label htmlFor="username">User Name</label>
          <input
            type="text" placeholder="Enter your Name"
            autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text" placeholder="Enter your Email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text" placeholder="Enter your Phone"
            autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password" placeholder="Enter your Password"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {records.map((curElem) => {
          const { id, username, email, phone, password } = curElem;
          return (
            <div className="showDAtaStyle" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};
export default Multipleinputs;
