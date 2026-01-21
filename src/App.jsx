import React, { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Sales from './pages/Sales';
import { useProducts } from './hooks/useProducts';
import { useCategories } from './hooks/useCategories';
import { useSales } from './hooks/useSales';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const productState = useProducts();
  const categoryState = useCategories();
  const salesState = useSales(productState.products, productState.updateProduct);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard
          {...productState}
          salesStats={salesState.stats}
          sales={salesState.sales}
        />;
      case 'products':
        return <Products {...productState} categories={categoryState.categories} />;
      case 'categories':
        return <Categories {...categoryState} />;
      case 'sales':
        return <Sales products={productState.products} updateProduct={productState.updateProduct} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <span className="text-4xl mb-4">🚧</span>
            <h3 className="text-xl font-bold">Under Construction</h3>
            <p>The {activePage} page is currently being built.</p>
            <button
              onClick={() => setActivePage('dashboard')}
              className="mt-4 text-sky-600 hover:underline"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="antialiased">
      <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
        {renderPage()}
      </DashboardLayout>
    </div>
  );
}

export default App;
