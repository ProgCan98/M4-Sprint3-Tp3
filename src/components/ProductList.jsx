import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.js'; // Ajusta la ruta según tu estructura

const ProductList = () => {
  const { cart, setCart } = useContext(CartContext);

  // Lista de productos predefinidos con solo id, name, y price
  const products = [
    { id: 1, name: 'Camiseta Deportiva', price: 29.99 },
    { id: 2, name: 'Zapatillas Running', price: 89.99 },
    { id: 3, name: 'Pelota de Fútbol', price: 19.99 },
  ];

  // Función para agregar un producto al carrito o aumentar su cantidad
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

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
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div
              key={product.id}
              className="border rounded-lg p-2 shadow-md hover:shadow-lg transition min-h-[250px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
                >
                  Agregar al Carrito
                </button>
                {quantity > 0 && (
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm sm:text-base disabled:opacity-50"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2 text-lg">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-sm sm:text-base"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="w-full mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-sm sm:text-base"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">
          Carrito: {cart.length} productos
        </h3>
        <p className="text-xl font-semibold mt-2">Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ProductList;
