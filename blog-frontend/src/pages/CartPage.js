import React from 'react';
import Announcement from '../components/home/Announcement';
import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/home/Footer';
import CartContainer from '../containers/cart/CartContainer';

const CartPage = () => {
    return (
    <>
        <Announcement />
        <HeaderContainer />
        <CartContainer /> 
        <Footer />
    </>
    );
};

export default CartPage;