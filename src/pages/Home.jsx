import React from "react";
import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { CgAddR } from "react-icons/cg";
import Spinner from "../components/Spinner";
import AlertForm from "../components/AlertForm";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [triggerChange, setTriggerChange] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Somthing went Wrong");
      });
  }, [triggerChange]);
  const handleCancel = () => {
    setShowForm(false);
  };
  const handleAdd = async (data) => {
    console.log("Form data:", data);
    try {
      const response = await axios.post("http://localhost:5555/books/", data);
      console.log("POST request successful:", response.data);
      setTriggerChange(!triggerChange);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
    setShowForm(false);
  };

  return (
    <div className="parent">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {books.map((e) => {
            return (
              <Cards
                id={e._id}
                title={e.title}
                author={e.author}
                yearPublished={e.yearPublished}
                key={e._id}
                triggerChange={setTriggerChange}
              />
            );
          })}
          <CgAddR onClick={() => setShowForm(true)} className="plus-icon" />
          {showForm && <AlertForm onCancel={handleCancel} onAdd={handleAdd} />}
        </>
      )}
    </div>
  );
};

export default Home;
