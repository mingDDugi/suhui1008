import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as productsAPI from '../lib/api/products';
import { takeLatest } from 'redux-saga/effects';


const INITIALIZE = 'productwrite/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'productwrite/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_PRODUCT,
  WRITE_PRODUCT_SUCCESS,
  WRITE_PRODUCT_FAILURE,
] = createRequestActionTypes('productwrite/WRITE_PRODUCT'); // 상품 작성
const [
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
] = createRequestActionTypes('productwrite/UPDATE_PRODUCT'); // 제품 수정
const SET_ORIGINAL_PRODUCT = 'productwrite/SET_ORIGINAL_PRODUCT';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));


export const writeProduct = createAction(WRITE_PRODUCT, ({  title, body, tags, price, image, quantity, size  }) => ({
  title, body, tags, price, image, quantity, size
}));

export const updateProduct = createAction(
  UPDATE_PRODUCT,
  ({ id, title, body, tags, price, image, quantity, size  }) => ({
    id, title, body, tags, price, image, quantity, size
  }),
);
export const setOriginalProduct = createAction(SET_ORIGINAL_PRODUCT, product => product);

// 사가 생성
const writeProductSaga = createRequestSaga(WRITE_PRODUCT, productsAPI.writeProduct);
const updateProductSaga = createRequestSaga(UPDATE_PRODUCT, productsAPI.updateProduct);

export function* productwriteSaga() {
  yield takeLatest(WRITE_PRODUCT, writeProductSaga);
  yield takeLatest(UPDATE_PRODUCT, updateProductSaga);
}


const initialState = {
  title: '',
  body: '',
  tags: [],
  price : 0,
  image : [],
  quantity : 0,
  size: [],
  product: null,
  productError: null,
  originalProductId: null,
};



const productwrite = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_PRODUCT]: state => ({
      ...state,
      // product와 productError를 초기화
      product: null,
      productError: null,
    }),
    // 포스트 작성 성공
    [WRITE_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    // 포스트 작성 실패
    [WRITE_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError,
    }),
    [UPDATE_PRODUCT_SUCCESS]: ( state, { payload: product }) => ({
      ...state,
      product,
    }),
    [UPDATE_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError,
    }),
    [SET_ORIGINAL_PRODUCT]: (state, { payload: product }) => ({
      ...state,
      // title: product.title,
      // body: product.body,
      // tags: product.tags,
      // price: product.price,
      image: product.image,
      // quantity: product.quantity,
      // originalProductId: product._id,
    }),
  },
  initialState,
);



export default productwrite;