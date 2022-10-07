import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import *as cartAPI from '../lib/api/cart';
import { takeLatest } from 'redux-saga/effects';


//액션 타입 정의
const [
    LIST_CART,
    LIST_CART_SUCCESS,
    LIST_CART_FAILURE,
] = createRequestActionTypes('cart/LIST_CART');

const [
    ADD_CART,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE,
] = createRequestActionTypes('cart/ADD_CART');

const [
    REMOVE_CART,
    REMOVE_CART_SUCCESS,
    REMOVE_CART_FAILURE,
] = createRequestActionTypes('cart/REMOVE_CART');


//액션 함수 정의
export const listCart = createAction(LIST_CART, userId => userId);
export const cartAdd = createAction(ADD_CART, 
    ({ userId,
        productId,
         product,quantity,size}) => ({
    userId,
    productId : productId,
    title : product.title,
    price : product.price,
    image : product.image,
    quantity : quantity,
    size : size,
  }));

  export const cartRemove = createAction(REMOVE_CART,
    ({ userId,
        productId,}) => ({
    userId,
    productId,
  }));





//사가 생성
const setCart = createRequestSaga(LIST_CART,cartAPI.cartList);
const addSaga = createRequestSaga(ADD_CART,cartAPI.cartAdd);
const removeSaga = createRequestSaga(REMOVE_CART,cartAPI.cartRemove);

export function* CartSaga() {
    yield takeLatest(LIST_CART, setCart);
    yield takeLatest(ADD_CART, addSaga);
    yield takeLatest(REMOVE_CART, removeSaga);
};


//초기값 생성 리덕스 생성
const initialState = {
    cart: null,
    error: null,
};

const cart = handleActions(
    {   //카트 리스트 성공
        [LIST_CART_SUCCESS]: (state, {payload: cart}) => ({
            ...state,
            cart,
        }),
        //카트 리스트 실패
        [LIST_CART_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),

        // 카트 추가 성공
        [ADD_CART_SUCCESS]: (state, {payload: cart}) => ({
            ...state,
            cart,
        }),
        // 카트 추가 실패
        [ADD_CART_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),

        // 카트 삭제 성공
        [REMOVE_CART_SUCCESS]: (state, {payload: cart}) => ({
            ...state,
            cart,
        }),
        // 카트 삭제 실패
        [REMOVE_CART_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),

    },
    initialState,
);

export default cart;