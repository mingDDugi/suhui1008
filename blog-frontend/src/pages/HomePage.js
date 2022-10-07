import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Announcement from '../components/home/Announcement';
import Slider from '../components/home/Slider';
import Categories from '../components/home/Categories';
import ProductListContainer from '../containers/products/ProductListContainer';
import ProductsHome from '../components/home/ProductsHome';
// import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';
import White from '../components/home/White';


const HomePage = () => {
    return (
    <>
        <Announcement />
        <HeaderContainer />
        <Slider />
        <White />
        <Categories />
        <White />
        <ProductListContainer />
        <ProductListContainer />
        <ProductsHome/>
        <White />
        {/* <Newsletter/> */}
        <Footer/>
    </>
    );
};

export default HomePage;