import "./recomendations.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import MainBackground from "../../components/backgrounds/mainBackground";
import MySubtitle from "../../components/titles/MySubtitle/MySubtitle";
import Section from "../../components/layout/section";
import SectionTitle from "../../components/titles/sectionTitle/sectionTitle";

import { reviews } from '../../mockData/recomendations';

const Recomendations: React.FC = () => {
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
        modules={[Pagination, Navigation]}
        className="recomendationsContainer"
      >
        {reviews.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <MainBackground>
                <div style={{ padding: "1rem" }}>
                  <div className="clientAvatar">
                    <img src={avatar} alt="foto de perfil de una persona que da la recomendacion" />
                  </div>
                  <h5 className="clientName">{name}</h5>
                  <small className="clientReview">{review}</small>
                </div>
              </MainBackground>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </Section>
  );
}

export default Recomendations;
