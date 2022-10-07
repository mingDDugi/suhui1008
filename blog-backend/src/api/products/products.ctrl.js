import Product from "../../models/product";
import mongoose from "mongoose";
import Joi from 'joi';
// import sanitizeHtml from 'sanitize-html';
const { ObjectId } = mongoose.Types;


// 상품 목록
export const list = async (ctx) => {
  try {
    ctx.body = await Product.find();
  }catch(e) {
    ctx.throw(100,e);
  }
};


 // 상품 작성하기
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required() 가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
    price : Joi.number(),
    image : Joi.string().required(),
    quantity : Joi.number(),
    size: Joi.array().items(Joi.string()),
  });

    // 검증 후, 검증 실패시 에러처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
      ctx.status = 400; // Bad Request
      ctx.body = result.error;
      return;
    }
    const newProduct = new Product(ctx.request.body);
    try{
      await newProduct.save();
      ctx.body = newProduct;
    }catch(e) {
      ctx.throw(100,e);
    }
  };


// 상품 상세페이지 보기
export const read = async (ctx) => {
  const {productId} = ctx.params;
  try{
    const findProduct = await Product.findById(productId);
    ctx.body = findProduct;
  }catch(e) {
    ctx.throw(100,e);
  }
};


// 상품 삭제하기
export const remove = async (ctx) => {
  const {productId} = ctx.params;
  try{
    await Product.findByIdAndDelete(productId).exec();;
    ctx.body = "삭제완료";
  }catch(e) {
    ctx.throw(100,e);
  }
};


// 상품 수정하기
export const update = async (ctx) => {
  const schema = Joi.object().keys({
  title: Joi.string().required(), // required() 가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()), // 문자열로 이루어진 배열
    price : Joi.number(),
    image : Joi.array().items(Joi.string()),
    quantity : Joi.number(),
    size: Joi.array().items(Joi.string()),
  });
  
  // 검증 후, 검증 실패시 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const {productId} = ctx.params;
  try{
    const findProduct = await Product.findByIdAndUpdate(productId, ctx.request.body, {new:true});
    ctx.body = findProduct;
  }catch(e) {
    ctx.throw(e);
  }
};


export const getProductById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  try {
    const product = await Product.findById(id);
    // 포스트가 존재하지 않을 때
    if (!product) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.product = product;
    return next();
  } catch (e) {
    ctx.throw(100, e);
  }
};