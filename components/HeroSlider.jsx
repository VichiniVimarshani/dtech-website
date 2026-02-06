import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <section className="relative group">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        loop
        className="h-[100dvh] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-70 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet-active]:bg-brandRed [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet]:transition-colors [&_.swiper-pagination-bullet:hover]:bg-brandRed"
      >
        <SwiperSlide>
          <Slide
            title="Protect. Connect. Innovate."
            subtitle="Advanced Security & Networking Solutions for Home and Enterprise."
            bg="/hero-1.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="Authorized Hikvision Installer"
            subtitle="Professional CCTV & Enterprise Surveillance Solutions."
            bg="/hero-2.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            title="Smart Home Security with Imou"
            subtitle="Intelligent Wi-Fi Cameras with Mobile App Monitoring."
            bg="/hero-3.jpg"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="slider-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
        <FaChevronLeft className="text-xl" />
      </button>
      <button className="slider-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
        <FaChevronRight className="text-xl" />
      </button>
    </section>
  );
}

function Slide({ title, subtitle, bg }) {
  return (
    <div className="h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/60" />

      {/* Safe spacing for navbar overlay */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-6 pt-20">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">{subtitle}</p>

          <a
            href="/contact"
            className="inline-flex bg-brandRed hover:bg-red-700 px-7 sm:px-8 py-3 rounded-md font-semibold transition shadow"
          >
            Request a Site Visit
          </a>
        </div>
      </div>
    </div>
  );
}