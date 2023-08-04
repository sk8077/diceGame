import styled from "styled-components";
import { Button } from "../styled/Button";

// eslint-disable-next-line react/prop-types
const StartGame = ({toggle}) => {
  return (  
    <Container>   
      <img src="./images/dices.png" alt="" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>  
  );
};

export default StartGame; 

const Container = styled.div`
margin-left:300px;
  max-width: 1180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content h1{
    font-size:96px;
    white-space: nowrap;
  }
`;

