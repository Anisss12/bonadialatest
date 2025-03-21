"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./slice";
import { nanoid } from "nanoid";
import { useState } from "react";

const UserComponent = () => {
  const [inputData, setInputData] = useState("");
  const [notify, setNotify] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users); // Access the users array correctly

  const handleAddUser = () => {
    if (inputData === "") {
      setNotify("please type something");
    } else {
      const newUser = { name: inputData };
      setNotify("");

      dispatch(addUser(newUser));
      setNotify("Item added");
    }

    setTimeout(() => {
      setNotify("");
    }, 3000);
  };

  return (
    <div style={{ padding: "2vw" }}>
      <h4 style={{ color: "white" }}>{notify}</h4>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button type="submit" onClick={handleAddUser}>
        Add User
      </button>
      <ul>
        {users.map((user) => (
          <li style={{ color: "white" }} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
