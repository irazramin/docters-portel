import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import quote from "../../../assets/icons/quote.svg";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
const Testimonial = () => {
  const testimonialItems = [
    {
      id:1,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person1,
      name: 'Alex wall',
      city: 'New york',
    },
    {
      id:2,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person2,
      name: 'Mitchel johnson',
      city: 'California',
    },
    {id:3,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person3,
      name: 'Adam will',
      city: 'Berlin',
    },
    {
      id:4,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person1,
      name: 'Alex wall',
      city: 'New york',
    },
    {
      id:5,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person2,
      name: 'Mitchel johnson',
      city: 'California',
    },
    {id:6,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person3,
      name: 'Adam will',
      city: 'Berlin',
    },
  ];
  return (
    <div className='py-[84px] mx-[26px] relative'>
      <div className='text-start mb-[146px]'>
        <h4 className='uppercase text-secondary font-semibold text-xl'>
          Testimonial
        </h4>
        <p className='mt-2 mb-[70px] text-4xl'>What Our Patients Says</p>
      </div>
      <img className='absolute w-[192px] h-[156px] top-20 right-12' src={quote} alt="" />
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper pb-10'
      >
        {testimonialItems.map((item) => {
          const { img, name, city, review } = item;
          return (
            <div className=''>
              <SwiperSlide>
                <div className='card shadow-xl  text-accent'>
                  <div className='card-body items-start justify-start text-start'>
                    <p>{review}</p>
                    <div className='card-actions mt-9'>
                      <div>
                        <div className='avatar'>
                          <div className='w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                            <img src={img} alt='' />
                          </div>
                        </div>
                      </div>
                      <button className='btn btn-ghost'>Deny</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
