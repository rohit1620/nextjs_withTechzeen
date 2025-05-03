"use client";
import { useEffect, useState } from "react";

const UserClient = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      setValue(await data.json());
    }
    getData();
  }, []);
  return (
    <div>
      <h1>This is client user page</h1>
      {/* {console.log(value)} */}
      {value.map((el) => (
        <div
          key={el.id}
          style={{ border: "1px solid red", margin: "20px", padding: "20px" }}
        >
          <li>{el.name}</li>
          <li>{el.email}</li>
        </div>
      ))}
    </div>
  );
};

export default UserClient;
