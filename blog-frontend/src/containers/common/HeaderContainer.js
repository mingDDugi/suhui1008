// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { searchProduct } from '../../modules/products';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { user,products } = useSelector(({ user,products }) => ({
    user: user.user,
    products: products.products,

  }));
  
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  const changeInput = (e) => {
    dispatch(searchProduct(e.target.value));
  }


  return <Header 
    user={user}
    onLogout={onLogout}
    products={products}
    changeInput={changeInput}
    />;
};

export default HeaderContainer;
