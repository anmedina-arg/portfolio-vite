import "./contact.css";

import FormikForm from "../../components/form/formikForm";

import MainBackground from "../../components/backgrounds/mainBackground";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import Section from "../../components/layout/section";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";

import { contactDetails } from "../../mockData/contact";

const Contact: React.FC = () => {
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
            contactDetails.map(({ title, href, icon }) => {
              return (
                <a className="contactOption" key={title} href={href} target="_blank" rel="noreferrer">
                  <div >
                    <h4>{title}</h4>
                    <span>{icon}</span>
                  </div>
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