import "./App.css";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddUser from "./components/AddTodo";
import UserData from "./components/TodoData";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  collection,
  orderBy,
  query,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase/config";
import { useDispatch } from "react-redux";
import { addUser } from "./components/actions/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "todos"), orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        dispatch(addUser(users));
      });
    };

    readData();
  }, []);

  // const addUser = (user) => {
  //    user.id = Math.floor((Math.random() * 1000000
  //    ) + 1);
  //   setUsers([...users, user]);
  // }

  // const deleteUser = (id) => {
  //   setUsers(users.filter(user => user.id !== id));
  // }

  // const editUser = (id, updateUser) => {
  //   setUsers(users.map(user => user.id === id ? updateUser : user));
  // }

  return (
    <div clas>
      <Container className=" mx-auto">
        <Row>
          <Col md={6}>
            <AddUser />
          </Col>

          <Col md={6}>
            <UserData deleteUser editUser />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
