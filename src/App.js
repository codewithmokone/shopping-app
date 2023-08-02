import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './components/Product';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Product />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
