"use client";
// import { tree } from "next/dist/build/templates/app-page";
import React, { useState, useEffect } from "react";
import Loader from "./loader";

async function myData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const LoadingData = () => {
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let fetchDataUser = await myData();
      setData(fetchDataUser);
      console.log(fetchDataUser);

      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <h1>Loading Data .....</h1>
          <Loader />
        </>
      ) : (
        data1.map((el) => {
          return (
            <ul>
              <li>{el.id}</li>
              <li>{el.title}</li>
            </ul>
          );
        })
      )}
    </div>
  );
};

export default LoadingData;
