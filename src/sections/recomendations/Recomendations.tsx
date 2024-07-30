import "./recomendations.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Corrección en las importaciones
import { Section } from "../../components/layout/section";

import { reviews } from '../../mockData/recomendations';
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";
import MainBackground from "../../components/backgrounds/mainBackground";


function Recomendations() {
  return (
    <Section id="recomendations">
      <SectionTitle label="Recomendaciones" />
      <MySubtitle label="Algunas de las personas que trabajaron conmigo..." />
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]} // Corrección aquí
        className="recomendationsContainer"
      >
        {reviews.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <MainBackground>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </MainBackground>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}

export default Recomendations;
