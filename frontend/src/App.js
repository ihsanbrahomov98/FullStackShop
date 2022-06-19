import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import LoginForm from './components/LoginForm';
import AllProductsPage from './pages/products/AllProductsPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingleProduct from './pages/singleProductPage/SingleProduct';
import AdminDashBoard from './pages/adminDashBoard/AdminDashBoard';
import CartBody from './components/forms/cartCompnents/CartBody';
import WomanProductsPage from './pages/products/WomanProductsPage';
import ManProductPage from './pages/products/ManProductPage';
import AccessoriesPage from './pages/products/AccessoriesPage';
import ChildProductsPage from './pages/products/ChildProductPage';
import SportProductsPage from './pages/products/SportProductsPage';
import AdminCreateProduct from './components/forms/AdminCreateProduct';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/products/all" element={<AllProductsPage />} />
          <Route path="/products/all/:id" element={<SingleProduct />} />
          <Route path="/products/woman" element={<WomanProductsPage />} />
          <Route path="/products/woman/:id" element={<SingleProduct />} />
          <Route path="/products/man" element={<ManProductPage />} />
          <Route path="/products/man/:id" element={<SingleProduct />} />
          <Route path="/products/child" element={<ChildProductsPage />} />
          <Route path="/products/child/:id" element={<SingleProduct />} />
          <Route path="/products/sport" element={<SportProductsPage />} />
          <Route path="/products/sport/:id" element={<SingleProduct />} />
          <Route path="/products/accessories" element={<AccessoriesPage />} />
          <Route path="/products/accessories/:id" element={<SingleProduct />} />
          <Route path="/adminboard" element={<AdminDashBoard />} />
          <Route path="/cartpage" element={<CartBody />} />
          <Route path="/admin/create" element={<AdminCreateProduct />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
