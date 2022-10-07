import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import { useNavigate } from "../../../node_modules/react-router-dom/index";


const ProductListBlock = styled(Responsive)`
  margin-top: 1rem;
  width: 100%;
`;

const WriteProductButtonWrapper = styled.div`
width: 95%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-left: 90px;
`;

const Title = styled.span`
  font-size: 30px;
  color: #831013;
  margin-bottom: 100px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 5px;
    margin-right: 20px;
    font-size: 15px;
`;

const Option = styled.option`

`;



const Bt = styled.div`
margin-bottom: 50px;
`;



const ProductListHead = ({ products, showWriteButton,loading }) => {
    const navigate = useNavigate();
return (
  <ProductListBlock>
    <WriteProductButtonWrapper>
    <Title><h2>제품 목록</h2></Title>
    <Bt>
        <Button  onClick={() => navigate("/writeProduct")}>
        새 제품 올리기
      </Button>   
      </Bt>
    </WriteProductButtonWrapper>
    <FilterContainer>
    <Filter>
                    <FilterText>제품 옵션: </FilterText>
                        <Select>
                            <Option disabled selected>
                            색깔
                            </Option>
                            <Option value="흰색">흰색</Option>
                            <Option value="검은색">검은색</Option>
                            <Option value="빨간색">빨간색</Option>
                            <Option value="파란색">파란색</Option>
                            <Option value="노란색">노란색</Option>
                            <Option value="초록색">초록색</Option>
                        </Select>
                        <Select>
                            <Option disabled selected>
                            사이즈
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                </Filter>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <Filter>
                    <FilterText>가격 옵션: </FilterText>
                        <Select>
                            <Option selected>가격대</Option>
                            <Option>가격↑ (높은 금액순)</Option>
                            <Option>가격↓ (낮은 금액순)</Option>
                        </Select>
                </Filter>
            </FilterContainer>
  </ProductListBlock>
);
};


export default ProductListHead;