import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "boxicons/css/boxicons.min.css";
import { useDispatch } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function EditTodo({ userInfo, handleClose }) {
  const [title, setTitle] = useState(userInfo.title);
  const [date, setDate] = useState(userInfo.date);
  const [text, setText] = useState(userInfo.text);
  const [id, setId] = useState(userInfo.id);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userData = { id, date, text, title };
      const docRef = doc(db, "todos", userInfo.id);
      await updateDoc(docRef, userData);
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDate("");
    setText("");
    setId("");
    handleClose();
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
            id="floatingInputCustom"
            type="date"
            placeholder="+233 555 555 555"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="floatingInputCustom">Date Added</label>
        </Form.Floating>

        <Form.Floating>
          <Form.Control
            style={{ height: "100px" }}
            id="floatingLocationCustom"
            type="text"
            placeholder="Location"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label htmlFor="floatingLocationCustom">Note</label>
        </Form.Floating>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "auto", margin: "2rem" }}>
          <i class="bx bxs-save bx-flashing bx-fw"></i> Save
        </Button>
      </Form>
    </div>
  );
}

export default EditTodo;
