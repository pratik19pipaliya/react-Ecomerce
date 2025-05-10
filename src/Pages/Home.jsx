import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
      <h2>Which page do you want to go?</h2>
      <Link to="/product">Go to Product Page</Link>
      <br />
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}

export default Home;
