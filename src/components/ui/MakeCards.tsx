import Card from "./Card";
import Data from "../Data";

const MakeCards = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-9 lg:grid-cols-2">
      {Data.map((props) => (
        <Card key={props.id} {...props}></Card>
      ))}
    </div>
  );
};

export default MakeCards;
