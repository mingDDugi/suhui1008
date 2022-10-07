import Router from 'koa-router';
import * as cartCtrl from './cart.ctrl';

const cart = new Router();

cart.get("/list/:userId", cartCtrl.list); //장바구니 리스트
cart.patch("/add/:userId", cartCtrl.add); // 상품 추가
cart.patch("/remove/:userId", cartCtrl.remove); // 상품 삭제


export default cart;