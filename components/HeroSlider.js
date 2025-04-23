import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1581092919539-2c685f6d634b?auto=format&fit=crop&w=1500&q=80',
    text: 'Stunning Engagement Rings',
  },
  {
    url: 'https://images.unsplash.com/photo-1592407925487-e2b6502306f8?auto=format&fit=crop&w=1500&q=80',
    text: 'Timeless Wedding Bands',
  },
  {
    url: 'https://images.unsplash.com/photo-1608535613522-0c712332e2f4?auto=format&fit=crop&w=1500&q=80',
    text: 'Custom Designs Crafted for You',
  },
]

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[70vh]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="bg-black/50 text-white p-8 rounded-xl backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-center">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
