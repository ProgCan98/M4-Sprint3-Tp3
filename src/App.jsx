// src/App.jsx

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext.jsx';
import ThemeButton from './components/ThemeButton.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <div
        id="rootElement"
        className="min-h-screen bg-gray-300 dark:bg-black text-black dark:text-white"
      >
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-3xl font-bold">Mi Carrito de Compras</h1>
        </header>
        <main className="container mx-auto p-4">
          <CartProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProductList />
              <Cart />
            </div>
            <ThemeButton />
          </CartProvider>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
