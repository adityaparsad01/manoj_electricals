import React from "react";
import { Helmet } from "react-helmet";
import { FaBeer } from "react-icons/fa";

function about() {
  return (
    <>
      <Helmet>
        <title>About || Manoj Electricals</title>
        <meta name="title" content="it all About Information" />
      </Helmet>
      <div className="container-fluid bg-light mt-4 text-center">
        <h2 className="text-primary">About Us</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-light">
            <h1>
              Hello <FaBeer />
            </h1>
          </div>
          <div className="col bg-dark">
            <h1 className="text-primary">World</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
