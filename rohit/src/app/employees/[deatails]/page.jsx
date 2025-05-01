"use client";

import { use } from "react";

const DynamicRoute = ({ params }) => {
  const { deatails } = use(params);
  console.log(deatails);

  return (
    <div>
      <h2>This is Dynamic Route</h2>
      <h3>Name:{deatails}</h3>
    </div>
  );
};

export default DynamicRoute;
