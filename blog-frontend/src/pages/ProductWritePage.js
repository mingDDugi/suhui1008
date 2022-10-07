import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import EditorProductContainer from '../containers/write/EditorProductContainer';
import TagBoxProductContainer from '../containers/write/TagBoxProductContainer';
import WriteProductActionButtonsContainer from '../containers/write/WriteProductActionButtonsContainer';
import Footer from '../components/home/Footer';


const ProductWritePage = () => {
  return (
    <>
      <HeaderContainer />
       <Responsive>
      <EditorProductContainer />
      <TagBoxProductContainer />
      <WriteProductActionButtonsContainer />
      <br/>
      <br/>
    </Responsive>
    <Footer />
    </>
  );
};



export default ProductWritePage;