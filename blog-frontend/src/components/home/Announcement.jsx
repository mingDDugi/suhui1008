import styled from "styled-components";

const Container = styled.div`
margin-top: 100px;
    height: 30px;
    background-color: #1d3a8c;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: #7718cf;
    }
`

const Ad = styled.p`
  color:#e5f83a;
`;

const Announcement = () => {
  return (
    <Container>
        <Ad>여름 시즌 세일! 5만원 이상 구매시 ★10%세일★</Ad>
    </Container>
  )
}

export default Announcement;