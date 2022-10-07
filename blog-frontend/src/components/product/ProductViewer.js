// import React, { useState } from 'react';
import styled from "styled-components";
// import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import { useState } from "react";
import AskSizeGuideModal from "./AskSizeGuideModal";
import { mobile } from "../../responsive";
import { Add, Remove,
  SwapHoriz,
  Facebook,
  Instagram,
  Pinterest,
  Twitter, } from "../../../node_modules/@mui/icons-material/index";



const ProductViewerBlock = styled(Responsive)`
width: 100%;
/* margin-top: 4rem; */
${mobile({ padding: "10px", flexDirection:"column" })}
`;

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
 width: 200px;
  height: 380px;
  border: none;
  border-radius: 40px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px gray;
  flex: 0.4;
  padding: 20px 40px;
  justify-content: space-between;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.span`
 font-size: 40px;
 font-weight: 700;
 padding-bottom: 10px;

`;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 30%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  height: 0px;
`;

const FilterTitle = styled.span`
width: 70px;
  font-size: 20px;
  font-weight: 500;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 30px;
  align-items: center;
  font-weight: 700;
  margin: 0px 10px ;
`;



const Button = styled.button`
  padding-left: 30px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #1d3a8c;
  cursor: pointer;
  font-weight: 900;
  &:hover{
      background-color: #831013;
  }
`;

const ButtonHandle = styled.button`
  padding: 3px;
  border: none;
  border-radius: 10px;
  background-color: #1d3a8c;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #831013;
  }
`;




const SocialContainer = styled.div`
    display: flex;
    /* margin-left: 60px; */
   margin-top: 10px;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
`;



const Icon = styled.div`
  color: white;
`;

const Ja = styled.div`
  width: 100px;
  color: white;
`;

const Gid = styled.div`
display: flex;
  align-items: center;
  &:hover {
    text-decoration: line;
      cursor: pointer;
    
    }
`;

const SizeContainer = styled.div`
    width: 250px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
`;


// const SizeBox = styled.input`
//     margin-left: 10px;
//     width: 60px;
//     height: 40px;
//     border: 0.5px solid;
//     padding-top: 6px;
//     text-align: center;
//     /* padding: 2px; */
//     color: black;
//     cursor: pointer;
//     &:hover{
//       background-color: #f3c2bd;
//   }
// `;



const InputRadio = styled.label`
  & {
    input[type="radio"]{
      display: none;
      & + span {
        display: inline-block;
        
        width: 50px;
        height: 35px;
        line-height: 33px;
        font-weight: 500;
        text-align: center;
        color: #222222;
        border: 1px solid #9f9f9f;
        background: none;   
        cursor: pointer;
      }
      &:checked {
        & + span {
          color: #fff;
          border: 1px solid #fe1448;
          background: orange;
        }
      }
    }
  }
  width: 30%;
  background-color: none;
  text-align: center;
  margin : auto;
  border:none;
  padding: 15px 0px 15px 0px;
  cursor: pointer;
`;


const Sang = styled.img`
    width: 50%;
    margin-left: 450px;
`;


const ProductViewer =({ product, error, loading, onCartAddHandler, handleClick, quantity, onSizeHandler}) => {
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const onSizeModal = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    // onRemove();
  };
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return<ProductViewerBlock>존재하지 않는 제품 입니다.</ProductViewerBlock>;
    }
    return <ProductViewerBlock>오류 발생!</ProductViewerBlock>
  }

  //로딩 중이거나 아직 제품 데이터가 없을 때
  if (loading || !product) {
    return null;
  }
 
  return (
    <Container>
    <ProductViewerBlock>
       <Wrapper>
       <ImgContainer>
       <Image img src={product.image} alt="이미지" />
       </ImgContainer>
        <InfoContainer>
          Originals<br/>
        <Title>{product.title}</Title><br/>
        <Price>{product.price} won</Price>
        <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"></FilterColor>
                <FilterColor color="darkblue"></FilterColor>
                <FilterColor color="gray"></FilterColor>
              </Filter>
                
              <Filter>
                <FilterTitle>사이즈</FilterTitle>
                {!loading && product && (
              <SizeContainer>
              {product.size.map(size => (
                <InputRadio>
                    <input type="radio" name="sizecheck" size={size} key={size} onClick={()=>onSizeHandler(size)}/>
                    <span>{size}</span>
                  </InputRadio>
              ))}
                </SizeContainer>
              )}
                  </Filter>
                
            </FilterContainer>
            <Gid>
            <SwapHoriz onClick={() => onSizeModal()}/>사이즈 가이드
            <AskSizeGuideModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
            </Gid>
           
            <br/>
            <AddContainer>

            <AmountContainer>
                <ButtonHandle><Icon>
                  <Add onClick={() => handleClick("+")}/>
                </Icon></ButtonHandle> &nbsp;
                <h2>{quantity}</h2>&nbsp;
                  <ButtonHandle><Icon><Remove onClick={() => handleClick("-")}/></Icon></ButtonHandle>&emsp;
                  <Button onClick={() => onCartAddHandler()}><Ja>장바구니 추가</Ja></Button>  &emsp;
                 
                  <Button><Ja>결  제</Ja></Button>
              </AmountContainer>
            </AddContainer><br/>
            <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
          </InfoContainer>
       </Wrapper>
      </ProductViewerBlock>
      <Sang src="/assets/sangse.jpg" alt="이미지" />
      </Container>
      
  
  );
};

export default ProductViewer;