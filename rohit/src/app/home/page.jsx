import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
     <Link href='./about'>About Page</Link> <br /> <br />
    <Link href="./contact">Contact Page</Link>
    </div>
  )
}

export default Home;
