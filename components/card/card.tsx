import React from 'react';

const Card = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image */}
        <img
          src="/shapes/round.png"
          alt="Round Shape"
          className="w-full h-64 object-cover"
        />

        {/* Button */}
        <div className="p-4 text-center">
          <button className="text-black-600 underline text-lg font-medium hover:text-brown-800 transition-colors duration-300">
            Round
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
