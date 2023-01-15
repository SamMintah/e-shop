import React from 'react';

const SalesWidgets = ({ products }) => {
  return (
    <div className="flex flex-wrap -mx-6">
      {products?.map((product) => (
        <div className="w-1/3 px-6 py-4" key={product.name}>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-lg font-medium">{product.name}</div>
            <div className="text-sm text-gray-600">
              Orders: {product.orders}
            </div>
            <div className="text-4xl font-medium text-indigo-600 mt-2">
              ${product.sales}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesWidgets;
