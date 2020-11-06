import React from "react";
import clickstream from "../assets/design/clickstream.png";
import discover_1 from "../assets/design/discover_1.png";
import malloc_3 from "../assets/design/malloc_3.png";

export const Design_Overall = () => (
  <div className="py-5 my-5 w-100 h-100 d-flex flex-column ">
    <div className="w-100 px-5 d-flex flex-row align-items-center justify-space-between">
      <img src={clickstream} alt="clickstream icon" style={{height: '60vh'}} />
      <img src={discover_1} alt="clickstream icon" style={{height: '60vh'}} />
      <img src={malloc_3} alt="clickstream icon" style={{height: '60vh'}}  />
    </div>
  </div>
)

export default Design_Overall;