import React from 'react';
import './Project.scss';
import { projectData } from '../../lib/data';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay,Navigation,Pagination} from 'swiper/modules';
function Project() {
  return (
    <div className='Project' id='project'>
      <div className="container Project__inner">
        <h2 className='Project__title'>Projects:</h2>
        <p className='Project__info'>
        I have worked on many projects over the course of being a
         Web Developer, here are a few of my live, real-world projects
        </p>
        <Swiper className='mySwiper'
         pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Navigation,Pagination]}
        breakpoints={{
          200: { 
            navigation:{
             enabled:false
            },
            slidesPerView: 1,
            direction:"vertical", 
          },
          450: {
            navigation:{
              enabled:false
             },
            slidesPerView: 1,
            direction:"vertical"
          },
          650: {
            slidesPerView: 1,
            spaceBetween: 23,
            direction:"horizontal"
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 25,
            direction:"horizontal"
          },
          1150: {
            slidesPerView: 2,
            spaceBetween: 10,
            direction:"horizontal"}}}>
        { 
         projectData?.map((item,index)=>{
            return(
              <SwiperSlide className='swiperslide' key={index}>
              <div className="card">
                <img className='cardImage' src={item.img} />
                <h2 className='title '>{item.title}</h2>
                <p>{item.des}</p>
                <span>
                <button><a href={item.urlVercel} target="_blank">View Live</a></button>
                <button> <a href={item.urlVercel} target="_blank">Github Repo</a></button>
                </span>
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
     
    </div>
  )
}

export default Project