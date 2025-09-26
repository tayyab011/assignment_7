import React from "react";
import "../App.css";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#010202",
      }}
    >
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loader;
