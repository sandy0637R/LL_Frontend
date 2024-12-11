import React from "react";
import Plumber from "../../Components/Workers/Plumber";
import Painter from "../../Components/Workers/Painter";
import Electrician from "../../Components/Workers/Electrician";
import Builder from "../../Components/Workers/Builder";
import "./WorkerPage.css";
const Workers = () => {
  return (
    <div className="workerpage-background">
      <center>
        <h1 className="worker-main-heading">Workers</h1>
      </center>
      <div className="worker-containers" style={{ marginTop: "0px" }}>
        <Builder />
      </div>
      <div className="worker-containers">
        <Painter />
      </div>
      <div className="worker-containers">
        <Plumber />
      </div>
      <div className="worker-containers">
        <Electrician />
      </div>
    </div>
  );
};

export default Workers;
