import React from 'react';
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/home/Announcement";
import Footer from "../../components/home/Footer";
import Newsletter from "../../components/home/Newsletter";
import HeaderContainer from "../../containers/common/HeaderContainer";

const ProductViewerBlock = styled(Responsive)`
margin-top: 4rem;
`;

const ProductHead = styled.div`
border-bottom: 1px solid ${palette.gray[2]};
padding-bottom: 3rem;
margin-bottom: 3rem;
h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
}
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const ProductContent = styled.div`
 font-size: 1.3125rem;
 color: ${palette.gray[8]};
`;



const ProductViewer = ({ product, error, loading, actionButtons }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return<ProductViewerBlock>존재하지 않는 상품페이지 입니다.</ProductViewerBlock>;
    }
    return <ProductViewerBlock>오류 발생!</ProductViewerBlock>
  }

  //로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !product) {
    return null;
  }

  const { title, body, tags, price, image, quantity, publishedDate } = product;
  return (
    <ProductViewerBlock>
      <ProductHead>
        <h1>{title}</h1>
        {/* <ImgContainer image={image} /> */}
        <SubInfo
          publishedDate={publishedDate}
          hasMarginTop
          image={image}
          quantity={quantity}
          price={price}
        />
        <Tags tags={tags} />
      </ProductHead>


      <Container>
        <Announcement />
        <HeaderContainer />
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>데님 점프슈트</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </Desc>
            <Price>30,000￦</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>색깔</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>사이즈</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>장바구니 추가</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>


      {actionButtons}
      <ProductContent dangerouslySetInnerHTML={{ __html: body }} />
    </ProductViewerBlock>
    
  );
};

export default ProductViewer;