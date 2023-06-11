import { FC } from "react";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import CustomButton from "../components/CustomButton";

interface CustomCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  hrefWebsite: string;
  hrefCode: string;
  id: string;
}

const CustomCard: FC<CustomCardProps> = (props) => {
  const { image, alt, title, description, hrefWebsite, hrefCode } = props;
  return (
    <Card
      className="lg:max-w-xl md:max-w-xl max-w-lg min-h-full ease-out transition duration-300 hover:-translate-y-3"
      elevation={10}
    >
      <CardActionArea disableTouchRipple>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          className="object-cover object-top md:max-h-40 max-h-36"
        />
        <CardContent>
          <h1 className="text-gray-700 font-semibold mb-1 lg:mb-2 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">
            {title}
          </h1>
          <p className="text-gray-500 leading-relaxed 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-xs">
            {description}
          </p>
        </CardContent>
        <div className="flex justify-center md:mb-3 mb-2 md:gap-2 gap-1">
          <CustomButton href={hrefWebsite} target="_blank" text="Website" />
          <CustomButton href={hrefCode} target="_blank" text="Code" />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
