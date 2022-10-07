import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], //문자열로 이루어진 배열
    publishedDate: {
        type: Date,
        default: Date.now(), // 현재 날짜를 기본값으로 지정
    },
    user: {
        _id: mongoose.Types.ObjectId, //MongoDB에서는 필요한 데이터를 통째로 집어넣
        username: String,
    },
});

const Post = mongoose.model('Post', PostSchema); //모델 생성
export default Post;