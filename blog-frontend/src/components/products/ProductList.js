import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "../../../node_modules/@mui/icons-material/index";


const ProductListBlock = styled(Responsive)`
  margin-top: 1rem;
  width: 100%;
`;

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color:#263353;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;


const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
border-color: white;
position: relative;
`;

const Image = styled.img`
height: 75%;
margin-bottom: 90px;
z-index: 2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all 0.5s ease;
&:hover{
  background-color: #e9f5f5;
  transform:scale(1.1);
}
`;

const Container1 = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Container2 = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;


const ProductName = styled.div`
z-index:5;
position: absolute;
margin-top: 200px;
text-align: center;
color: #263353;
`;

const Price = styled.span`
font-size: 15px;
`;

const ProductTitle = styled.span`
font-size: 15px;
font-weight: 900;
`;

const ProductItem = ({ products }) => {
  const navigate = useNavigate();
return (

    <Container2>
        <Circle />
        <Image src={products.image}/>
        <ProductName><ProductTitle>{products.title}<br/></ProductTitle><Price>{products.price} won</Price></ProductName>
        <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined onClick={() => navigate(`/product/${products._id}`)}/> 
          {/* 여기 링크 각제품 상세페이지로 가게 고쳐 */}
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container2>

)};

// </ProductItemBlock>

const ProductList = ({ products, loading, error, showWriteButton }) => {
  //에러 발생 시
  if (error) {
      return <ProductListBlock>에러가 발생했습니다.</ProductListBlock>
  }

return (
<ProductListBlock>
    {!loading && products && (
      <Container1>
      {products.map(products => (
          <ProductItem products={products} key={products._id}/>
      ))}
      </Container1>
    )}
</ProductListBlock>
);
};


export default ProductList;