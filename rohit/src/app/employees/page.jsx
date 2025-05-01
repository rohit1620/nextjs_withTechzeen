import Link from "next/link";

const Employees = () => {
  return (
    <div>
      <h1>Employee Pages</h1>
      <ul>
        <li>
          <Link href="/employees/rohit">Rohit</Link>
        </li>
        <li>
          <Link href="/employees/ajay">Ajay</Link>
        </li>
        <li>
          <Link href="/employees/Ankush Malav">Ankush Malav</Link>
        </li>
      </ul>
    </div>
  );
};

export default Employees;
