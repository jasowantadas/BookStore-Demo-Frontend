import React, { useState } from "react";
import "./AlertForm.css";

const AlertForm = ({ onCancel, onAdd }) => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");

  const handleCancel = () => {
    // Reset form fields and call onCancel callback
    setField1("");
    setField2("");
    setField3("");
    onCancel();
  };

  const handleAdd = () => {
    // Validate that all fields are filled
    if (field1.trim() === "" || field2.trim() === "" || field3.trim() === "") {
      alert("All fields are required!");
      return;
    }

    // Validate that field3 is a number
    if (isNaN(field3)) {
      alert("Field 3 must be a number!");
      return;
    }

    // Call onAdd callback with the form data
    onAdd({ title: field1, author: field2, yearPublished: Number(field3) });

    // Reset form fields
    setField1("");
    setField2("");
    setField3("");
  };

  return (
    <div className="alert-form">
      <label>
        Book Title:
        <input
          type="text"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
          required
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
          required
        />
      </label>
      <label>
        Publish Date:
        <input
          type="number"
          value={field3}
          onChange={(e) => setField3(e.target.value)}
          required
        />
      </label>
      <div className="button-container">
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default AlertForm;
