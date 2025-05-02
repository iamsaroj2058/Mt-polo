import React from 'react';

const CardDetails = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Product Image on Top */}
      <img
        className="w-full h-64 object-cover"
        src="/shapes/round.png"
        alt="Product"
      />

      {/* Product Info Below */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">Round Glasses</h2>
        <p className="text-gray-700 mt-2">
          Lightweight, comfortable, and trendy round eyeglass frames perfect for daily wear.
        </p>
        <p className="text-yellow-600 text-lg font-bold mt-4">$59.99</p>
      </div>
    </div>
  );
};

export default CardDetails;
