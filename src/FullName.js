import React, { useState } from "react";
import "./FullName.css";

const FullName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submissions, setSubmissions] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmissions([...submissions, { firstName, lastName }]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <br/><br/>
        <label>
        <strong> First Name = </strong> 
         &nbsp;<input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br /><br/>
        <label>
        <strong> Last Name = </strong> 
        &nbsp;<input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
      <br/><br/>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.firstName}</td>
              <td>{submission.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullName;
