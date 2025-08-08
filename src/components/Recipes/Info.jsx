import styled from "styled-components";

import { AiFillSignal } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillPieChart } from "react-icons/ai";

const InfoList = styled.ul`
  display: flex;
  padding: 10px 30px;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  color: black;
`;

const InfoItem = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const Info = ({ info }) => {
  return (
    <InfoList>
      <InfoItem>
        <AiOutlineClockCircle style={{ width: 30, height: 30 }} />
        <p>{info.time} min</p>
      </InfoItem>
      <InfoItem>
        <AiFillPieChart style={{ width: 30, height: 30 }} />
        <p>{info.servings === 1 ? `${info.servings} serving` : `${info.servings} servings`}</p>
      </InfoItem>
      <InfoItem>
        <AiFillSignal style={{ width: 30, height: 30 }} />
        <p>{info.calories} calories</p>
      </InfoItem>
    </InfoList>
  )
}

