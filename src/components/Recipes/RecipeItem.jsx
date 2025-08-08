import styled from "styled-components";
import { Info } from "./Info";
import { Difficulty } from "./Difficulty";

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  background-color: ${props => !props.$hard ? "transparent" : "#e44235"};
  color: ${props => !props.$hard ? "black" : "white"};

  &:before {
    content: "🔥";
    display: ${props => !props.$hard ? "none" : "block"};
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 60px;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const RecipeItem = ({ info }) => {
  return (
    <Item $hard={info.difficulty === 3 ? true : false}>
      <Image src={info.img} alt="Image" />
      <Title>{info.name}</Title>
      <Info info={info} />
      <Difficulty difficulty={info.difficulty} />
    </Item>
  )
}

