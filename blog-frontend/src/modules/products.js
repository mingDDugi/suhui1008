import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
  } from '../lib/createRequestSaga';
  import * as productsAPI from '../lib/api/products';
  import { takeLatest } from 'redux-saga/effects';

// 액션 타입 정의
  const [
    LIST_PRODUCTS,
    LIST_PRODUCTS_SUCCESS,
    LIST_PRODUCTS_FAILURE,
  ] = createRequestActionTypes('products/LIST_PRODUCTS');
  
  const SEARCH_PRODUCT = "/products/SEARCH_PRODUCT";
  
  // 액션 함수 만들기
  export const listProducts = createAction(LIST_PRODUCTS,);
  export const searchProduct = createAction(SEARCH_PRODUCT);


  // saga 생성
  const listProductsSaga = createRequestSaga(LIST_PRODUCTS, productsAPI.listProducts);
    export function* ProductsSaga() {
    yield takeLatest(LIST_PRODUCTS, listProductsSaga);
  }
  
  
  const initialState = {
    products: null,
    error: null,
    lastPage: 1,
    ok: null,
  };
  
  
  
  const products = handleActions(
    {
      [LIST_PRODUCTS_SUCCESS]: (state, { payload: products}) => ({
        ...state,
        products,
      }),
      [LIST_PRODUCTS_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      }),
      [SEARCH_PRODUCT]: (state, { payload: ok }) => ({
        ...state,
        ok,
      }),
    },
    initialState,
  );
  
  
  
  export default products;
  
  