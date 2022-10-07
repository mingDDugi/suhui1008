import Router from 'koa-router';
import posts from './posts';
import auth from './auth';
import products from './products';
import cart from './cart';


const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/products', products.routes());
api.use('/cart',cart.routes());

//라우터를 내보내~
export default api;

// http://localhost:4000/api/products 다음 주소 지정 방식 포스트맨에서