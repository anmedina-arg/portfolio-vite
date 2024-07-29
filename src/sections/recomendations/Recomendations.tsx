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

function Recomendations() {
  return (
    <Section id="recomendations">
      <MySubtitle size="small" label="Some references" color="default" />
      <MySubtitle label="Recomendations" color="primary" />
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
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}

export default Recomendations;
