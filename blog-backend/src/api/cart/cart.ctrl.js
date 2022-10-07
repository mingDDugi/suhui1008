import User from "../../models/user";


// 장바구니 목록
export const list = async (ctx) => {
  const {userId} = ctx.params;
  try {
    const findCart = await User.findById(userId);
    ctx.body = findCart.cart;
  }catch(e) {
    ctx.body = e;
    console.log(e);
  }
};


// 상품 추가하기
export const add = async (ctx) => {
  const { userId } = ctx.params;
  try{
    const cartAdd = await User.findByIdAndUpdate(
      userId,
      {$push : {cart : ctx.request.body}},
      {new : true}
    )
    ctx.body=cartAdd;
  }catch(e) {
      ctx.body = e;
      console.log(e);
    }
};


/* DELETE /api/cart/remove/:userid */
export const remove = async (ctx) => {
  const { userId } = ctx.params;
  const { productId } = ctx.request.body;
  //  유저아이디와 제품 아이디 보여주기
  try{
    const cartRemove = await User.findByIdAndUpdate(
      userId,
      {$pull : {cart : {productId : productId}}},
      {new : true}
    )
    ctx.body=cartRemove
  }catch(e) {
    ctx.body = e;
    console.log(e);
  }
};