import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const onRoleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} onRoleDice={onRoleDice} />
      <div className="btns">
        <OutlineButton onClick={() => resetScore()}>Reset</OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding: 70px 100px 0 100px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
