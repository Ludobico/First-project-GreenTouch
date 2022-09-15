import { MdSend } from "react-icons/md";
import "./Comfort_modal.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function Comfort({ onClick }) {
  return (
    <div className="modal">
      <div className="display">
        <div className="close" onClick={onClick}>
          &times;
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2400 }}
          slideperview={1}
          loop={true}
        >
          <SwiperSlide className="text 1">많이 힘들었겠다</SwiperSlide>
          <SwiperSlide className="text 2">
            지금까지 버텨줘서 너무 고마워
          </SwiperSlide>
          <SwiperSlide className="text 3">
            우울해도 괜찮아. 그것도 너니까
          </SwiperSlide>
          <SwiperSlide className="text 4">
            너는 지금도 충분히 잘하고 있어
          </SwiperSlide>
          <SwiperSlide className="text 5">
            네가 행복해지길 진심으로 바라고 응원하고 있어.
          </SwiperSlide>
          <SwiperSlide className="text 6">
            마지막에는 한 번 더 나를 보러 와 줄래?
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Comfort;
