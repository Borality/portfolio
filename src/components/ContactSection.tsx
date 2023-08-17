import { FC } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { ContactTitle, ContactIcon } from "@/components/ui/Contact";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section className="bg-bg_white">
      <div
        className="mx-auto flex w-11/12 flex-col items-center py-6 md:py-12"
        id="contact"
      >
        <ContactTitle className="text-center">On the web</ContactTitle>
        <div className="mt-2 flex gap-2 md:mt-6 md:gap-3">
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
          <ContactIcon
            href="mailto:charles-trangay-portfolio-contact.overfeed094@aleeas.com"
            icon={<AiFillMail />}
            tooltip="Email"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
