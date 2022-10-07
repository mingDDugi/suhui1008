import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';


const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn,postsCtrl.write); //라이브러리에  checkLoggedIn 컨트롤에 checkOwnPost

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

// 리팩토링 전
// posts.get('/', postsCtrl.list);
// posts.post('/', postsCtrl.write);
// posts.get('/:id', postsCtrl.checkObjectId.read);
// posts.delete('/:id', postsCtrl.checkObjectId.remove);
// posts.patch('/:id', postsCtrl.checkObjectId.update);

export default posts;