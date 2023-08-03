import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactTitle, ContactIcon } from "./ui/Contact";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="md:py-3 py-1" id="contact">
      <ContactTitle>On the web</ContactTitle>
      <div className="flex justify-center mb-7">
        <ContactIcon
          href="https://www.linkedin.com/in/charles-trangay/"
          icon={<LinkedInIcon fontSize="inherit" />}
          tooltip="LinkedIn"
        />
        <ContactIcon
          href="https://github.com/Borality"
          icon={<GitHubIcon fontSize="inherit" />}
          tooltip="Github"
        />
      </div>
    </div>
  );
};

export default Contact;
