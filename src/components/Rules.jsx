import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer id="rules"> 
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p> 
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin: 40px auto ;
  h1 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
