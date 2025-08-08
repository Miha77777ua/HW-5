import styled from "styled-components"
import { RecipeItem } from "./RecipeItem";

const List = styled.ul`
  display: flex;
  gap: 25px;
  justify-content: center;
  padding: 0;
  flex-wrap: wrap;
`;

export const RecipesList = ({ data }) => {
  return (
    <List>
      {data.map((el, id) => (
        <RecipeItem info={el} key={id} />
      ))}
    </List>
  )
}

