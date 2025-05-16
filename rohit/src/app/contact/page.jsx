"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  let router = useRouter();
  const handleRouting = (value) => {
    router.push(value);
  };
  return (
    <div>
      <h1>This is MY Contact Page</h1> <br />
      {/* <hr /> */}
      <Link href="./home">Home</Link> <br /> <br />
      <Link href={"./about"}>About</Link>
      {/* <hr />
     <button style={{marginLeft:"20px",marginTop:"20px"}} onClick={()=>router.push("./home")}>Home</button> <br /><br />
     <button style={{marginLeft:"20px",marginTop:"20px"}} onClick={()=>router.push("./about")}>About</button> */}
      <hr />
      <button
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => handleRouting("./home")}
      >
        Home
      </button>{" "}
      <br />
      <br />
      <button
        style={{ marginLeft: "20px", marginTop: "20px" }}
        onClick={() => handleRouting("./about")}
      >
        About
      </button>
      <hr /> <hr />
      {/* Nested Routing */}
      <div>
        <br />
        <Link href="/contact/company">
          <span>Company</span>
        </Link>{" "}
        <br />
        <br />
        <button onClick={() => handleRouting("/contact/employees")}>
          Employee
        </button>
      </div>
    </div>
  );
};

export default Contact;
