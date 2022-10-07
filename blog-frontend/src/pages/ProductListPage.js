import React from 'react';
import Announcement from '../components/home/Announcement';
import HeaderContainer from '../containers/common/HeaderContainer';
import ProductListContainer from '../containers/products/ProductListContainer';
import ProductsHome from '../components/home/ProductsHome';
import Footer from '../components/home/Footer';
import Newsletter from '../components/home/Newsletter';
import ProductListHead from '../components/products/ProductListHead';
// import PaginationContainer from '../containers/posts/PaginationContainer';

const ProductListPage = () => {
    return (
    <>
        <Announcement />
        <HeaderContainer />
        <ProductListHead />
        <ProductListContainer />
        <ProductsHome />
        <Newsletter/>
        <Footer />
    </>
    );
};

export default ProductListPage;