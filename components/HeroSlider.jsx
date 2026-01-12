import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[100dvh]"
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