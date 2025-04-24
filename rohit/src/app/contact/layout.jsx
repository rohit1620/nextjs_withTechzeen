"use client"
import { usePathname } from "next/navigation"

export default function Layout({children}){
    const currentPath= usePathname()
    return(
       
        <>
       { currentPath!=="/contact/company"?<h1>Comman Layout for Contact Page</h1>:null} 
        {children}
        </>
    )
}