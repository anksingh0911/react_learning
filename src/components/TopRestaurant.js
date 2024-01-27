import React from 'react'
import Slider from 'react-slick'
import RestaurantCard from './RestaurantCard';
import { responsive } from '../utils/SliderResponsiveBreakpints';

const TopRestaurant = ({data, title}) => {
  const topRestaurantList = data?.gridElements?.infoWithStyle?.restaurants;
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4 ,
    slidesToScroll: 2,
    responsive:responsive,
    navigator:true
  };
  return (
    <div className='p-2 my-2'>
       <h4 className='text-2xl font-semibold mb-4'>{title}</h4>
      <Slider {...settings}>
        {topRestaurantList?.map((item)=>(
          <div key={item?.id} className="m-2 bg-white h-[280px]">
            <RestaurantCard resData={item}/>
          </div>
        ))}
        </Slider>
    </div>
  )
}

export default TopRestaurant