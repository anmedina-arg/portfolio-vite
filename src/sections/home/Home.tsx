import "./home.css";
import DownloadNav from "../../components/downloads-nav/download-nav";
import ME from "../../assets/me-sin-fondo.png";
import { Section } from "../../components/layout/section";
import { Paragraph } from "../../components/commons/paragraph/paragraph";

function Home() {
  return (
    <header id="home">
      <Section>
        <div className="title__container">
          <h5>Hello I´m</h5>
          <h1>Andrés Medina</h1>
          <h2 className="text-light">Fullstack developer</h2>
        </div>
        <DownloadNav />
        <div className="about">
          <div className="about__text">
            <h3 className="about__me">About me</h3>
            <Paragraph>
              As an Industrial Engineer with 12 years of experience leading
              teams and developing critical soft skills, I've made a unique
              career transition into the world of Information Technology. I am
              both proactive and responsible, continually seeking out new
              challenges, eagerly diving into research, and always keen on
              learning. My interests and drive have led me to train as a
              Full-Stack Developer, specializing in JavaScript and NodeJS. I
              started this exciting journey at Henry's Bootcamp, where I
              successfully executed various projects both individually and
              collaboratively. The journey has been one of continuous growth,
              including strengthening crucial soft skills like communication,
              feedback, diversity, inclusion, teamwork, and a focus on
              continuous improvement.
            </Paragraph>
          </div>
          <div className="me">
            <img className="picture" src={ME} alt="me" />
          </div>
        </div>
      </Section>
    </header>
  );
}

export default Home;
