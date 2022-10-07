import Router from 'koa-router';
import * as productsCtrl from './products.ctrl';

const products = new Router();

products.get("/", productsCtrl.list); //전체 리스트
products.post("/", productsCtrl.write);  // 상품 작성
products.get("/:productId", productsCtrl.read); //상세페이지
products.delete("/:productId", productsCtrl.remove); // 상품 삭제
products.patch("/:productId", productsCtrl.update); // 상품 수정


export default products;