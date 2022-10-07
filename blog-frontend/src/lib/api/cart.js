import client from './client';

// 리스트
export const cartList = (userId) =>
    client.get(`/api/cart/list/${userId}`);


// 상품 추가
export const cartAdd = ({ userId,productId,title,price,image,quantity,color,size }) =>
    client.patch(`/api/cart/add/${userId}`,{ productId,title,price,image,quantity,color,size} );

// 상품 삭제
export const cartRemove = ({ userId,productId }) =>
client.patch(`/api/cart/remove/${userId}`,{ productId } );