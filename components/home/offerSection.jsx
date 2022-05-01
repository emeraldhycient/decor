import React from "react";

function OfferSection() {
  return (
    <section
      className="h-fit md:h-[92vh]"
      style={{
        backgroundImage: `url(/images/sun.png)`,
        backgroundSize: "contain",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-fit mx-5 md:mx-auto md:w-10/12 "></div>
    </section>
  );
}

export default OfferSection;
