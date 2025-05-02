import React from 'react';

const CardDetails = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/shapes/round.png"
            alt="Product"
          />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">Round Glasses</h2>
          <p className="text-gray-700 mt-2">Lightweight, comfortable, and trendy round eyeglass frames perfect for daily wear.</p>
          <p className="text-yellow-600 text-lg font-bold mt-4">$59.99</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
