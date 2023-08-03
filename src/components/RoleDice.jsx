import styled from "styled-components";

const RoleDice = ({currentDice, onRoleDice}) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={onRoleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`}alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .dice {
    cursor: pointer;
  }
`;
