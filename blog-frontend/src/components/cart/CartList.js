import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../common/Button';
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import Payment from '../pay/payment';
// import { SettingsBackupRestoreSharp } from '../../../node_modules/@material-ui/icons/index';
// import cart from '../../modules/cart';
// import { CategoryRounded } from '../../../node_modules/@material-ui/icons/index';


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
    color: #263353;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;


// const TopTexts = styled.div`
// `;

// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;



const Container2 = styled.div`
  flex:2;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// const ProductColor = styled.div`
 
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;


const PriceDetail = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
// `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const AmountContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  font-weight: 700;
  margin: 0px 5px;
`;

const ButtonHandle = styled.button`
  width: 20px;
  height: 20px;
  padding: none;
  border: none;
  background-color: #1d3a8c;
  cursor: pointer;
  font-weight: 300;
  &:hover{
      background-color: #9a85b2;
  }
`;

const ButtonText = styled.div`
  color: white;
  width: 13px;
  height: 13px;
  padding-right:10px;

`;




const Summary = styled.div`
  background-color:white;
  box-shadow: 2px 2px 2px 2px gray;
  flex: 1;
  border-radius: 20px;
  padding: 40px;
  height: 480px;
`;

const SummaryTitle = styled.span`
  font-weight: 200;
  color:#1d3a8c;
`;

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryText = styled.span`
  color:gray;
  padding-right: 2px;
  font-size: 15px;
  font-weight: 600;
`;
const SummaryItemText = styled.span`
font-weight: 500;
`;

const SummaryItemPrice = styled.span``;

const RemoveContainer = styled.div`
width: 100px;
display: flex;
justify-content: center;
align-items: center;
padding-right: 40px;
`;

const RemoveButton = styled.div`
width: 40px;
  height: 30px;
  padding: 4px;
  border: none;
  font-size: 15px;
  justify-content: center;
  background-color:#263353;
  cursor: pointer;
  font-weight: 300;
  &:hover{
      background-color: #9a85b2;
  }
`;

const ButtonText2 = styled.span`
  color: white;
  
`;





const CartItem = ({ cart, onCartRemoveHandler,user,product }) => {
  // const navigate = useNavigate();
// console.log(user._id);
// console.log(product.ProductId);

  
  const [ setNumber ] = useState(0);
  const handleClick = (op) => {
  if(op === "+"){
    setNumber({} + 1);
  }else {
    setNumber({}- 1);
  }
  }
  

  return(
    <Info>
            <Product>
              <ProductDetail>
              <Image src={cart.image}/>
                <Details>
                  <ProductName>
                    제품명 : {cart.title}
                  </ProductName>
                  <ProductId>
                  제품 ID : {cart.productId}<br/>
                  사이즈 : {cart.size}<br/>
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                수량 :
                <AmountContainer>
                <ButtonHandle><ButtonText
                  onClick={() => handleClick("+")}> +
                </ButtonText></ButtonHandle> &nbsp;
                <h2> {cart.quantity}</h2>
                  &nbsp;<ButtonHandle><ButtonText
                  onClick={() => handleClick("-")}> -
                </ButtonText></ButtonHandle>
              </AmountContainer>
                </ProductAmountContainer>
                <ProductPrice>{cart.price} won</ProductPrice>
              </PriceDetail>
              <RemoveContainer>
              <RemoveButton><ButtonText2 
              onClick={ () => onCartRemoveHandler(cart.productId)}
              >삭제</ButtonText2></RemoveButton>
              </RemoveContainer>
            </Product>
            <Hr />
          </Info>
  )
}


const CartList = ({ error, loading, cart, onCartRemoveHandler }) => {
  const navigate = useNavigate();
  let total = 0;
  
  // const total = productId =>{
  //   const addQty = cart.map(cart => {
  //     if (productId === cart.id && cart.quantity < 10) {
  //       return {...cart, quantity: cart.quantity + 1};
  //     } else return cart;
  //   });
  //   SettingsBackupRestoreSharp(addQty);
  // };

  return (

    <Container>
      {Array.isArray(cart) ? cart.map(cart => (
      // total += cart.price;
      total += cart.price * cart.quantity
    )) : null};
      <Wrapper>
        <Title><h4>내 장바구니</h4></Title>
        <Top>
          <Button onClick={() => navigate("/productList")} >쇼핑 계속하기</Button>
          {/* <TopTexts>
            <TopText>장바구니(-)</TopText>
            <TopText>찜 목록(0)</TopText>
          </TopTexts> */}
        </Top>

        <Bottom>

          <Container2>
          {Array.isArray(cart)
          ? cart.map(cart => (
            <CartItem cart={cart} onCartRemoveHandler={onCartRemoveHandler}/>
          ))
        : null}
          </Container2>

          <Summary>
            <SummaryTitle><h1>주문 요약</h1></SummaryTitle>
            <SummaryItem>
              <SummaryItemText>합계</SummaryItemText>
              <SummaryItemPrice>{total}￦</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>배송 예정일</SummaryItemText>
              <SummaryItemPrice>2~3일 소요</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>택배비</SummaryItemText>
              <SummaryItemPrice>3,000￦ </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>
                30,000원 이상 구매시 무료 / 제주 추가 4,000원, 제주 외 도서지역 추가 8,000원 /제주 +4,000원 / 도서 산간 +8,000원
                </SummaryText>
            </SummaryItem><br/>
            <SummaryItem type="total">
              <SummaryItemText>합계</SummaryItemText>
              <SummaryItemPrice>{total + 3000}￦</SummaryItemPrice>
            </SummaryItem>
            <Payment total={(total + 3000)}>결제하기</Payment>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartList;
