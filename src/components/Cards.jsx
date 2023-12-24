import React from "react";
import axios from "axios";
import "./Cards.css";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Cards = ({ id, title, author, yearPublished, triggerChange }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5555/books/${id}`);
      console.log("DELETE Request Successful", response.data);
      triggerChange((prev) => !prev);
    } catch (error) {
      console.error("Error Deleting");
    }
  };
  return (
    <div className="element">
      Title: {title}
      <br />
      Author: {author}
      <br />
      Year: {yearPublished}
      <div className="buttons">
        <CiEdit />
        <MdDelete onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Cards;
