import React from "react";
import ShippingToInfo from "./shipping-info";
import ShippingMethod from "./shipping-method";

function Shipping() {
  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto sm:w-full">
      <ShippingToInfo />
      <ShippingMethod />
    </div>
  );
}

export default Shipping;
