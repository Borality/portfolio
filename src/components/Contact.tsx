import { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ContactTitle, ContactIcon } from "@/components/ui/Contact";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="md:py-3 py-1" id="contact">
      <ContactTitle>On the web</ContactTitle>
      <div className="flex justify-center md:gap-3 gap-2 md:mt-6 mt-2">
        <ContactIcon
          href="https://www.linkedin.com/in/charles-trangay/"
          icon={<AiFillLinkedin />}
          tooltip="LinkedIn"
        />
        <ContactIcon
          href="https://github.com/Borality"
          icon={<AiFillGithub />}
          tooltip="Github"
        />
      </div>
    </div>
  );
};

export default Contact;
