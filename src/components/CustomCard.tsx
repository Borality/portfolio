import { FC } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from "@mui/material";

interface CustomCardProps {
    image: string;
    alt: string;
    title: string;
    description: string;
    hrefWebsite: string;
    hrefCode: string;
}


const CustomCard: FC<CustomCardProps> = (props) => {
const { image, alt, title, description, hrefWebsite, hrefCode } = props;
  return (
    <Card className="md:max-w-md max-w-sm min-h-full ease-out transition duration-300 hover:-translate-y-3" elevation={10}>
      <CardActionArea disableTouchRipple>
        <CardMedia
          component = "img" 
          image={image}
          alt={alt}
          className="object-cover object-top max-h-36"
        />
        <CardContent>
          <h1 className="font-semibold mb-1 lg:mb-2 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">{title}</h1>
          <p className="text-gray-400 leading-relaxed 2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-sm text-xs">
            {description}
          </p>
        </CardContent>
        <Grid className="flex justify-center md:mb-3 mb-2" >
            <Button className="mx-2 lg:text-lg md:text-md text-sm" href={hrefWebsite} target = "_blank" variant = "outlined">
              Website
            </Button>
            <Button className="mx-2 lg:text-lg md:text-md text-sm" href={hrefCode} target = "_blank" variant = "outlined">
              Code
            </Button>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
