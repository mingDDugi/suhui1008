import React from 'react';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import CartPage from './pages/CartPage';
import HomeProductPage from './pages/HomeProductPage';
import HomeProductList from './pages/HomeProductList';
import ProductWritePage from './pages/ProductWritePage';
import ProductPage from '../src/pages/ProductPage';
import ProductListPage from '../src/pages/ProductListPage';
// import { Helmet } from 'react-helmet-async';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/@:username" element={<PostListPage />} />
      <Route path="/postList" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />}  />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />}  />
      <Route path="/@:username/:postId" element={<PostPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/productList" element={<ProductListPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/homeproduct" element={<HomeProductPage />} />
      <Route path="/homeproductList" element={<HomeProductList />} />
      <Route path="/writeProduct" element={<ProductWritePage />} />
    </Routes>
  );
};

export default App;