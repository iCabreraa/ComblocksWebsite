import React from "react";
import { PeekSection, PeekTitle } from "./SneakPeek.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionWrapper from "../Layout/SectionWrapper";
import Container from "../Layout/Container";

const SneakPeek = () => (
  <SectionWrapper id="app">
    <Container>
      <PeekSection>
        <PeekTitle>Un vistazo a la App Comblocks</PeekTitle>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          loop
        >
          <SwiperSlide>
            <Image
              src="/images/ui-preview-1.jpg"
              alt="UI Preview 1"
              width={100}
              height={100}
              style={{ borderRadius: "12px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/ui-preview-2.jpg"
              alt="UI Preview 2"
              width={100}
              height={100}
              style={{ borderRadius: "12px" }}
            />
          </SwiperSlide>
        </Swiper>
      </PeekSection>
    </Container>
  </SectionWrapper>
);

export default SneakPeek;
