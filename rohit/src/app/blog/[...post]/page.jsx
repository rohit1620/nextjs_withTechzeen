"use client";

import React, { use } from "react";

const kitnebidalo = ({ params }) => {
  const { post } = use(params);
  console.log(params);

  return (
    <div>
      <h2>I am same here every conditions {post[0]}</h2>
      <h2>I am same here every conditions {post[1]}</h2>
      <h2>I am same here every conditions {post[2]}</h2>
    </div>
  );
};

export default kitnebidalo;
