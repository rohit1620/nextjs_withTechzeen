import React from "react";

const DynamicMetadata = () => {
  return (
    <div>
      {/* <title>DynamicMetadata</title> */}
      <h1>This is dynamicMetadata page</h1>
    </div>
  );
};

export default DynamicMetadata;

export function generateMetadata() {
  return {
    title: "Your Dynamic MetaData",
    description: "this is very good project",
  };
}
