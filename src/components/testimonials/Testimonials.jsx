import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit a, tenetur qui distinctio cupiditate, fugiat fugit voluptatum facilis iure perferendis quidem voluptatem praesentium rem.',
  },
  {
    avatar: AVATAR2,
    name: 'Shatta Wale',
    review: 'Quibusdam sapiente esse repellat. Maxime tenetur qui distinctio cupiditate, fugiat fugit voluptatum facilis iure perferendis quidem voluptatem praesentium rem.',
  },
  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit a, quibusdam sapiente esse repellat. Maxime tenetur qui distinctio cupiditate, fugiat fugit voluptatum facilis iure perferendis.',
  },
  {
    avatar: AVATAR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit a, quibusdam sapiente esse repellat. Maxime tenetur qui distinctio cupiditate, fugiat fugit voluptatum facilis iure perferendis quidem voluptatem praesentium rem.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials