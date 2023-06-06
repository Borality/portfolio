import { FC } from "react";

interface CustomButtonProps {
  text: string;
  href: string;
  target?: string;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const { text, href, target } = props;
  return (
    <a
      href={href}
      target={target}
      className="lg:text-lg md:text-md text-sm lg:my-2 text-gray-600 hover:text-white border border-gray-600 hover:bg-gray-700 font-medium rounded-lg px-4 py-1.5 text-center mr-2 mb-2 "
    >
      {text}
    </a>
  );
};

export default CustomButton;
