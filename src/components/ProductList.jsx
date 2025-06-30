// Aqui mostraremos los productos disponibles
import React from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Auriculares', price: 200 },
  { id: 3, name: 'Mouse', price: 50 },
];

const ProductList = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Productos disponibles</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
