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
    <Grid item lg={6} md={12} style={{ maxWidth: 445 }}>
      <CustomCard {...props}></CustomCard>
    </Grid>
  );
};

const MakeCustomCards = ({}) => {
  return (
    <Grid container justifyContent="center " spacing={3}>
      {Data.map((props: any) => getCardMaker(props))}
    </Grid>
  );
};

export default MakeCustomCards;
