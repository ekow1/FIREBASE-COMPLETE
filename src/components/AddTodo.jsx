import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import "../App.css";
import { db } from "../firebase/config";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      title,
      date,
      text,
      id: uuid(),
      timestamp: serverTimestamp(),
    };
    try {
      await setDoc(doc(db, "todos", newUser.id), newUser);
    } catch (error) {
      console.log(error);
    }
    props.newUser({ title, date, text });
    setTitle("");
    setDate("");
    setText("");
  };

  return (
    <div>
      <Form style={{ width: "18rem", margin: "2rem" }} onSubmit={handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingNameCustom"
            type="text"
            placeholder="Full Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingPasswordCustom">Todo Title</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingNameCustom"
            type="date"
            placeholder="Phone"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="floatingNameCustom">Date Added</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            style={{ height: "400px" }}
            id="floatingLocationCustom"
            type="text"
            placeholder="Location"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label htmlFor="floatingLocationCustom">Note</label>
        </Form.Floating>

        <Button
          class="app-form-button"
          variant="primary"
          type="submit"
          style={{ width: "auto", margin: "2rem" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
