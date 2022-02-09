import { Card, Text } from "@nextui-org/react";
import Link from "next/link";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';

import React from "react";

function InvestCard({ data }) {
  return (
    <div>
      <Card css={{ mw: "330px" }}>
        <Text h4>{data.title}</Text>
        <Text>{data.number} $USD</Text>
        <Text>{data.date}</Text>
        <Card.Footer>
          {data.situation === "up" ? (
            <AiOutlineArrowUp />
          ) : (
            <AiOutlineArrowDown />
          )}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default InvestCard;
