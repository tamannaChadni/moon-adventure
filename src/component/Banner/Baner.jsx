// import React, { useRef, useState } from 'react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Typewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './baner.css';
// import './styles.css';
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

  

  

const Baner = () => {
    const handleType = (count) => {
        // access word count number
        // console.log(count);
    }
        const handleDone = () => {
            console.log(`Done after 5 loops!`);
          }
    
    return (
        <div className='container mx-auto'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              'background-image':
                'url(https://i.ibb.co/GWCL5yK/cover1.jpg)',
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
            Places To Visit In Africa
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
            Explore the beautiful land of  Africa
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              <div className='App'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Visit Beautiful{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['South Africa', 'Tanzania', 'Kenya', 'Morocco' ,'Egypt' ,'Namibia']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              'background-image':
                'url(https://i.ibb.co/YP3bwgv/cover2.jpg)',
            }}
            data-swiper-parallax="-23%"
          ></div>
            <div className="title" data-swiper-parallax="-300">
            Places To Visit In Africa
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
            Explore the beautiful land of  Africa
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              Africa is the world's second largest and second-most populous continent after Asia. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 20% of Earth's land area and 6% of its total surface area.[7] With 1.4 billion people[1][2] as of 2021, it accounts for about 18% of the world's human population. Africa's population is the youngest amongst all the continents
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              'background-image':
                'url(https://i.ibb.co/YhTVCp0/cover3.jpg)',
            }}
            data-swiper-parallax="-23%"
          ></div>
            <div className="title" data-swiper-parallax="-300">
            Places To Visit In  Africa
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
            Explore the beautiful land of  Africa
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
              the median age in 2012 was 19.7, when the worldwide median age was 30.4.[10] Despite a wide range of natural resources, Africa is the least wealthy continent per capita and second-least wealthy by total wealth, ahead of Oceania. Scholars have attributed this to different factors including geography, climate, tribalism,[11] colonialism, the Cold War,[12][13] neocolonialism, lack of democracy, and corruption.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Baner;