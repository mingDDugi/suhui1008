import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { Search, ShoppingCartOutlined, InsertComment, PlaylistAdd, } from "../../../node_modules/@mui/icons-material/index";

// import { Search, ShoppingCartOutlined, InsertComment, 
//   // AddCircleOutline, Badge,
  
//   PlaylistAdd, } from "../../../node_modules/@mui/icons-material/index";




const HeaderBlock = styled.div`
  height: 105px;
  top:0;
  position: fixed; //이거 키면 계속 딸려옴ㅋㅋ
  z-index: 30;
  width: 100%;
  background: #263353;
  background-image: url('../assets/seed11.jpg');
  /* box-shadow:0px 2px 4px rgba(0, 0, 0, 0.08); */
`;




// /**Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */
// const Wrapper = styled(Responsive)`
// height: 5rem;
// display: flex;
// align-items: center;
// justify-content: center; /*자식 엘리먼트 사이에 여백을 최대로 설정*/
// .logo {
//     font-size: 1.125rem;
//     font-weight: 800;
//     letter-spacing: 2px;
// }
// .right {
//     display: flex;
//     align-items: center;
// }
// `;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
height: 100px;
`;
const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Title = styled.div`
margin-bottom: -30px;
/* font-size: 50px; */
cursor: pointer;
color: white;
`;

// Navbar 아래부터

// const Container = styled.div`
//   height: 100px;

// `;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center ;
  margin-top: 15px;
  `;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  `;

const Input = styled.input`
  border: none;
`;


const Center = styled.div`
  flex:1;
  text-align: center;
  `;

const Right= styled.div`
margin-top: 15px;
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-style: 14px;
cursor: pointer;
margin-left: 25px;
`;

const Icon = styled.div`
  color: #263353;
  padding: 0px;
`;





const Header = ({ user, onLogout, CartPage,products, changeInput}) => {
    const navigate = useNavigate();
    
    
    return (
    <>
        <HeaderBlock>
            <Wrapper>
               <Left>
                <SearchContainer>
                  <Input 
                  type = "text"
                  placeholder="Search"
                  onChange={(e) => {
                    changeInput(e);
                  }}
                />
                      <Search style={{ color: "gray", fontSize: 16 }} />
                </SearchContainer>
                </Left>
                <Center><Title>
                  
                  <img alt="이미지" src="../assets/Logo.jpg" onClick={() => navigate("/")}/>
                  
                  </Title></Center>
                <Right>
                {user ? (<>
                            <UserInfo>{user.username}</UserInfo>
                            <Button onClick={onLogout}>로그아웃</Button>
                            </>
                        ) : (
                            <div className="right">
                            <Button to="/login">로그인</Button>
                            </div>
                      )}
          <MenuItem>
          <Icon>
            {/* <Badge badgeContent={4} color="primary"> */}
            <InsertComment onClick={() => navigate("/postList")}/>&ensp;
            {/* <AddCircleOutline onClick={() => navigate("/writeProduct")}/> &ensp; */}
                          <PlaylistAdd onClick={() => navigate("/productList")}/>&ensp;
              <ShoppingCartOutlined onClick={() => navigate("/cart")}/>
            {/* </Badge> */}
            </Icon>
          </MenuItem>
        </Right>
            </Wrapper>
        </HeaderBlock>
        <Spacer/>
       
        </>
    )
}

export default Header;