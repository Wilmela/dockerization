import React from "react";
import { useTodoStore } from "../services/store";

const Form = () => {
  const [title, setTitle] = React.useState("");
  const { addTodo } = useTodoStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return alert("Fill in a task.");

    addTodo(title);
    setTitle(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={handleChange}
        style={inputStyle}
      />
      <button type="submit" style={btn}>
        Create
      </button>
    </form>
  );
};

export default Form;
const inputStyle = {
  padding: "10px",
  outline: "none",
  borderColor: "rgba(0, 0, 205, 0.2)",
  borderRadius: "30px",
  cursor: "pointer",
  width: "90%",
  marginTop: "50px",
};

const btn = {
  backgroundColor: "green",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "30px",
  width: "25%",
  cursor: "pointer",

  display: "flex",
  justifyContent: "center",
};
