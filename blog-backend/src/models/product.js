import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: String,
    body: String,
    tags: [String], //문자열로 이루어진 배열
    price: Number,
    image: String,
    quantity: Number,
    size: {
        type : Array,
        default : ["220","230", "240","250","260","270",]
    },
    publishedDate: {
    type: Date,
    default: Date.now(), // 현재 날짜를 기본값으로 지정
    },
});

const Product = mongoose.model('Product', ProductSchema); //모델 생성
export default Product;