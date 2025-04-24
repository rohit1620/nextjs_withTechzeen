// "use client"
// import { useRouter } from "next/navigation"

import Link from "next/link"



const Employee = () => {
//    let router= useRouter()
  return (
    <>
      <h1>Employee Contact Page</h1>
     {/* <button onClick={()=>router.push("./contact")}>Go Back</button> */}
     <Link href="/contact">Employee</Link>

    </>
  )
}

export default Employee
