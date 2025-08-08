import styled from "styled-components"

const DifficultyList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 15px
`;

const DifficultyBox = styled.div`
  padding: 15px 10px;
  border-radius: 20px;
  background-color: white;
  width: 250px;
  color: black;
`;

const DifficultyItem = styled.li`
  border-radius: 20px;
  background-color: ${props => !props.$active ? "#fff7d9" : "#f96f6f"};
  padding: 5px 10px;
  color: ${props => !props.$active ? "black" : "white"};
`;

export const Difficulty = ({ difficulty }) => {
  return (
    <DifficultyBox>
      <h3>Difficulty</h3>
      <DifficultyList>
        <DifficultyItem $active={difficulty === 1 ? true : false}>
          Easy
        </DifficultyItem>
        <DifficultyItem $active={difficulty === 2 ? true : false}>
          Medium
        </DifficultyItem>
        <DifficultyItem $active={difficulty === 3 ? true : false}>
          Hard
        </DifficultyItem>
      </DifficultyList>
    </DifficultyBox>
  )
}

