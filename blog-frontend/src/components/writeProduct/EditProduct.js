// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import { TextField } from '../../../node_modules/@mui/material/index';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  /* 페이지 위 아래 여백 지정 */
  width: 1024px;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
// const QuillWrapper = styled.div`
//   /* 최소 크기 지정 및 padding 제거 */
//   .ql-editor {
//     padding: 0;
//     min-height: 320px;
//     font-size: 1.125rem;
//     line-height: 1.5;
//   }
//   .ql-editor.ql-blank::before {
//     left: 0px;
//   }
// `;

const EditorProduct = ({ title, body, tags, price, image, quantity , onChangeField, color, size }) => {

  const Title = styled.h3`
  font-size: 30px;
  `;


  // title: '',
  // body: '',
  // tags: [],
  // price : 0,
  // image : [],
  // quantity : 0,
 
  return (
    <EditorBlock>
      <Title>★관리자_제품 올리는 페이지★ </Title>
      <TitleInput
        label="title"
        placeholder="제품의 이름을 입력하세요"
        onChange={(e) => onChangeField({key : "title", value:e.target.value})}
        value={title}
      />
      <TitleInput
        label="body"
        placeholder="제품의 내용을 입력하세요"
        onChange={(e) => onChangeField({key : "body", value:e.target.value})}
        value={body}
      />
      <TextField
        label="price"
        placeholder="제품의 가격을 입력하세요"
        onChange={(e) => onChangeField({key : "price", value:e.target.value})}
        value={price}
      />
      <TitleInput
        label="image"
        placeholder="제품의 이미지를 넣으세요"
        onChange={(e) => onChangeField({key : "image", value:e.target.value})}
        value={image}
      />
      <TextField
        label="quantity"
        placeholder="제품의 수량을 입력하세요"
        onChange={(e) => onChangeField({key : "quantity", value:e.target.value})}
        value={quantity}
      />
      <TextField
        label="color"
        placeholder="제품의 색깔을 입력하세요"
        onChange={(e) => onChangeField({key : "color", value:e.target.value})}
        value={color}
      />
      <TextField
        label="size"
        placeholder="제품의 사이즈 입력하세요"
        onChange={(e) => onChangeField({key : "size", value:e.target.value})}
        value={size}
      />
    </EditorBlock>
  );
};

export default EditorProduct;