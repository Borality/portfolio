"use client";
import { FC, JSX } from "react";
import { Box, Grid } from "@mui/material";
import CustomCard from "../components/CustomCard";
import Data from "../components/Data";
interface makeCustomCardsProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  hrefWebsite: string;
  hrefCode: string;
}

const getCardMaker: FC<makeCustomCardsProps> = (props) => {
  return (
    <div>
      <CustomCard {...props}></CustomCard>
    </div>
  );
};

const MakeCustomCards = ({}) => {
  return (
    <Grid className="grid lg:grid-cols-2 grid-cols-1 gap-9">
      {Data.map((props: any) => getCardMaker(props))}
    </Grid>
  );
};

export default MakeCustomCards;
