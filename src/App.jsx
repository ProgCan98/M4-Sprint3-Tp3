import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 text-center font-bold text-2xl">
        🛒 Carrito de Compras
      </header>
      <main className="max-w-5xl mx-auto py-8">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
