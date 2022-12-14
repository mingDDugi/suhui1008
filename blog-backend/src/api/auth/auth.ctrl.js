import Joi from '../../../node_modules/joi/lib/index';
import User from '../../models/user';
// import Product from '../../models/product';

/*
  POST /api/auth/register
  {
    "username" : "velopert",
    "password" : "mypass123"
  },
*/    //회원가입
export const register = async (ctx) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),  //required 필수로 넣는것. alphanum는 알파벳
    cart: Joi.string(),
  });
  const result = schema.validate(ctx.request.body);  //validate 유효하다
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  // const { username, password } = ctx.request.body;

  const username = ctx.request.body.username;
  const password = ctx.request.body.password;
  // const address = ctx.request.body.address;
  try {
    // username  이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }
    const user = new User({
      username,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장
    

    ctx.body = user.serialize();
        
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};


// POST /api/auth/login
// {
//   "username": "velopert",
//   "password": "mypass123"
// }      //로그인
export const login = async ctx => {
  const { username, password, 
    // address
   } = ctx.request.body;

// username, password가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }



try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, //7일
        httpOnly: true,
      });
  } catch (e) {
    ctx.throw(500, e);
  }
};


// GET /api/auth/check // 로그인 상태 확인
export const check = async ctx => {
    const { user } = ctx.state;
    if (!user) {
      // 로그인 중 아님
      ctx.status = 401; // Unauthorized
      return;
    }
    ctx.body = user;
};


// POST /api/auth/logout // 로그아웃
export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content 바디에는 아무것도 안뜸
};

export const cart = async ctx => {
  const { username, password, 
    // address, Product 
  } = ctx.request.body;


// username, password가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }
}