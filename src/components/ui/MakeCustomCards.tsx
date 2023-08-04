import { FC } from "react";
import CustomCard from "./CustomCard";
import Data from "../Data";
interface makeCustomCardsProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  hrefWebsite: string;
  hrefCode: string;
  id: string;
}

const getCardMaker: FC<makeCustomCardsProps> = (props) => {
  return <CustomCard key={props.id} {...props}></CustomCard>;
};

const MakeCustomCards = ({}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-9 gap-5">
      {Data.map((props) => getCardMaker(props))}
    </div>
  );
};

export default MakeCustomCards;
