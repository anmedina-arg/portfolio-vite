import FormikForm from "../../components/form/formikForm";
import { Section } from "../../components/layout/section";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";

import "./contact.css";
//import emailjs from "emailjs-com";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import MainBackground from "../../components/backgrounds/mainBackground";


type ContactProps = {
  contactDetailsArr?: contactDetailsProps[]
}

function Contact({ contactDetailsArr = contactDetails }: ContactProps) {
  return (
    <Section id="contact">
      <MySubtitle size="small" label="Get In Touch" color="default" />
      <MySubtitle label="Contact Me" color="primary" />
      <MainBackground>
        <div style={{ textAlign: "initial" }}>
          <FormikForm />
        </div>
      </MainBackground>
      {/* <div className="contactSocials"> */}
      {/* <div className="container contact__container"> */}
      {/* <div className="contact__options"> */}
      {
        // contactDetailsArr.map((contactDetail) => {
        //   const { title, href, icon } = contactDetail
        //   return (
        //     <article className="contact__option">
        //       <h4>{title}</h4>
        //       {/* <h5>andres.medina.arg@gmail.com</h5> */}
        //       <a
        //         href={href}
        //         target="_blank"
        //         rel="noreferrer"
        //       >
        //         {icon}
        //       </a>
        //     </article>
        //   )
        // })
      }
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </Section>
  );
}

export default Contact;

type contactDetailsProps = {
  title: string,
  href: string,
  icon: React.ReactElement
}

const contactDetails: contactDetailsProps[] = [
  {
    title: "Email",
    href: "mailto:andres.medina.arg@gmail.com",
    icon: <TfiEmail />
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andres-medina-arg/",
    icon: <BsLinkedin />
  },
  {
    title: "Github",
    href: "https://github.com/anmedina-arg",
    icon: <BsGithub />
  },
  // {
  //   title: "WhatsApp",
  //   href: "https://wa.me/5493816713512?text=Hola,%20¿cómo%20estás?",
  //   icon: <BsGithub />
  // },
]