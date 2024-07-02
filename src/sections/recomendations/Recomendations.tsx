import "./recomendations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Corrección en las importaciones
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Section } from "../../components/layout/section";

import { reviews } from '../../mockData/recomendations';

function Recomendations() {
  return (
    <section id="recomendations">
      <Section>
        <h5>Some references</h5>
        <h2>Recomendations</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]} // Corrección aquí
          className="recomendations__container"
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
    </section>
  );
}

export default Recomendations;
