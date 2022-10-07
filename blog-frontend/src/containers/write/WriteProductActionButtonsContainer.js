import React, { useEffect } from 'react';
import WriteProductActionButtons from '../../components/write/WriteProductActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writeProduct, updateProduct } from '../../modules/productwrite';


const WriteProductActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, product, productError, originalProductId,
           price, image, quantity } = useSelector (({ productWrite }) => ({
      title: productWrite.title,
      body: productWrite.body,
      tags: productWrite.tags,
      product: productWrite.product,
      productError: productWrite.productError,
      originalProductId: productWrite.originalProductId,
      price : productWrite.price, 
      image : productWrite.image, 
      quantity : productWrite.quantity
    }),
  );



// 포스트 등록
  const onPublish = () => {
    if (originalProductId) {
      dispatch(updateProduct({ title, body, tags, id: originalProductId, price, image, quantity  }));
      return;
    }
    dispatch(
      writeProduct({
        title,
        body,
        tags,
        price,
        image,
        quantity,
      }),
    );
  };



// 취소
  const onCancel = () => {
    navigate(-1);
  };



// 성공 혹은 실패 시 할 작업
useEffect(() => {
  if (product) {
    navigate(`/productList`);
  }
  if (productError) {
    console.log(productError);
  }
}, [navigate, product, productError]);

return  <WriteProductActionButtons
onPublish={onPublish}
onCancel={onCancel}
isEdit={!!originalProductId}
/>;
};




export default WriteProductActionButtonsContainer;