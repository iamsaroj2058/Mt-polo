import React from "react";
import Shopbyshape from "../../Section/Shape/shopbyshape";
import NewArrival from "../../Section/newArrival/NewArrival";
const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-48 md:h-[870px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/landing.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* Card Section */}
      <div className="mt-8 flex justify-center">
       <Shopbyshape/>
       
      </div>
        {/* NewArrival Section */}
        <div className="mt-8 flex justify-center">
       <NewArrival/>
       
      </div>
    </div>
  );
};

export default Landing;
