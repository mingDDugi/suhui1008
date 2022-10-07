import styled from "styled-components";
import { Send } from "../../../node_modules/@mui/icons-material/index";
import { mobile } from "../../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #263353;
    display: flex;align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;
    color: white;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color:white;
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #263353;
    color: #fff44a;
    &:hover {
      cursor: pointer;
    }
`;

const Newsletter =() => {
    return (
        <Container>
            <Title>새소식</Title>
            <Desc>요즘 유행하는 제품들 빠른 소식 받기</Desc>
            <InputContainer>
            <Input placeholder="이메일주소"/>
            <Button>
                <Send />
            </Button>

            </InputContainer>
        </Container>
    )
}

export default Newsletter;
