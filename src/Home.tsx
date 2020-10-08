import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/demo1">
        <h4>Demo 1</h4>
      </Link>

      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
