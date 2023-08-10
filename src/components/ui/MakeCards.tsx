import Card from "./card";
import Data from "../Data";

const MakeCards = ({}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-9 gap-5">
      {Data.map((props) => (
        <Card key={props.id} {...props}></Card>
      ))}
    </div>
  );
};

export default MakeCards;
