import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1> <br />
      <hr />
 <Link href='./home'>Home</Link>  <br /> <br />
 <Link href='./contact'>Contact</Link>
    </div>
  )
}

export default About
