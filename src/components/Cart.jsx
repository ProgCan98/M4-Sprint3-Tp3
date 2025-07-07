import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext.js';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para modificar la cantidad de un producto en el carrito
  const updateQuantity = (productId, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        {isCartOpen ? 'Ocultar Carrito' : 'Mostrar Carrito'}
      </button>
      {isCartOpen && (
        <div className="border rounded-lg p-4 shadow-md min-h-[200px]">
          {cart.length === 0 ? (
            <p className="text-gray-600">El carrito está vacío.</p>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2"
                  >
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm sm:text-base disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2 text-lg">{item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 text-sm sm:text-base"
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  Total: ${calculateTotal()}
                </h3>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
