import FormikForm from "../../components/form/formikForm";
import { Section } from "../../components/layout/section";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";

import "./contact.css";
//import emailjs from "emailjs-com";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import MainBackground from "../../components/backgrounds/mainBackground";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";


// type ContactProps = {
//   contactDetailsArr?: contactDetailsProps[]
// }

function Contact() {
  return (
    <Section id="contact">
      <SectionTitle label="contacto" />
      <MySubtitle label="Si estás interesado en que trabajemos juntos, envíame un mensajito desde aquí abajo!" />
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <MainBackground>
        <div className="contactContainerForm">
          <FormikForm />
        </div>
      </MainBackground>

      <hr style={{ marginBlock: "1rem", background: "transparent", border: "none" }}></hr>
      <MainBackground>
        <div style={{ display: "flex" }}>
          {
            contactDetails.map((contactDetail) => {
              const { title, href, icon } = contactDetail
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__option"
                >
                  <article >
                    <h4>{title}</h4>
                    {icon}
                  </article>
                </a>
              )
            })
          }
        </div>
      </MainBackground>
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