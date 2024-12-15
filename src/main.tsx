//import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import App from './App';
import ErrorPage from './Pages/error-page';
import ProductDetailPage from './Pages/product-detail-page';
import { ShoppingCartProvider } from './context';
import { createRoot } from 'react-dom/client';
import './index.css';
import CategoriesProductsPage from './Pages/categories-products-page';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "categories/:id/products", element: <CategoriesProductsPage/> }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
    <ShoppingCartProvider>
        <RouterProvider router={router}/>
    </ShoppingCartProvider>
); 

