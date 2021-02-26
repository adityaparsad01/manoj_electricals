import React from "react";
import { Helmet } from "react-helmet";

function about() {
  return (
    <>
      <Helmet>
        <title>About || Manoj Electricals</title>
        <meta name="title" content="it all About Information" />
      </Helmet>
      <h2 className="text-primary">About Us</h2>
    </>
  );
}

export default about;
