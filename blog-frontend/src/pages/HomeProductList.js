import styled from "styled-components";
import HeaderContainer from "../containers/common/HeaderContainer";
import Announcement from "../components/home/Announcement";
import ProductsHome from "../components/home/ProductsHome";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/home/Footer";

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
    color: #9a85b2;
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
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option` 
`;

const ProductListPageHome = () => {
    return (
        <Container>
            <Announcement />
            <HeaderContainer />
            <Title>제품 목록</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>제품 옵션: </FilterText>
                        <Select>
                            <Option disabled selected>
                            색깔
                            </Option>
                            <Option>흰색</Option>
                            <Option>검은색</Option>
                            <Option>빨간색</Option>
                            <Option>파란색</Option>
                            <Option>노란색</Option>
                            <Option>초록색</Option>
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
                </Filter>
                <Filter>
                    <FilterText>가격 옵션: </FilterText>
                        <Select>
                            <Option selected>가격대</Option>
                            <Option>가격↑ (높은 금액순)</Option>
                            <Option>가격↓ (낮은 금액순)</Option>
                        </Select>
                </Filter>
            </FilterContainer>
            <ProductsHome />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductListPageHome;