import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const NumberSelector = ({error,setError, selectedNumber,setSelectedNumber} ) => {
  
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler=(value)=>{
    setSelectedNumber(value) 
    setError(""); 
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => {
          return ( 
            <Box
              isSelected={value === selectedNumber}
              key={i}
              onClick={() => numberSelectorHandler(value)}
            >
              {value} 
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error{
    color: red;
  }
  .flex { 
    display: flex;
    gap:24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
