import React from "react";
// import SellContainer from "../../Containers/SellContainer/SellContainer";
import "./Sell.css";
import SellRecord from "../../Components/SellRecord/SellRecord";

const Sell = () => {
  return (
    <div className="sell-background-img">
      <div className="sell-main-body">
        <h1 className="sell-heading">Properties to Sell</h1>
        <div className="sell-container-div">
          {/* <SellContainer /> */}
          <SellRecord/>
        </div>
      </div>
    </div>
  );
};

export default Sell;
