import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper , SwiperSlide } from 'swiper/react' ;
import MovieLand from '../../img/movieLand.jpg';
import Weather from '../../img/weather.jpg';
import ExpenseTracker from '../../img/expenseTracker.jpg';
import FoodApp from '../../img/foodApp.jpg';
import 'swiper/css'
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
    
    <Swiper
     spaceBetween={-10}
     slidesPerView={3}
     grabCursor={true}
     className='portfolio-slider'
     >
        <SwiperSlide>
            <img src={MovieLand} alt="sidebar" />
            <p >Movie Land</p>
        </SwiperSlide>
         
        <SwiperSlide>
            <img src={Weather} alt="Weather App" />
            <p >Weather App</p>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={ExpenseTracker} alt="Expense Tracker" />
            <p >Expense Tracker</p>
        </SwiperSlide>

        <SwiperSlide>
            <img src={FoodApp} alt="Food app" />
            <p >Food App</p>
        </SwiperSlide>

    </Swiper>

    </div>
    )
}

export default Portfolio