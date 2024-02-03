import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { responsive } from "../utils/SliderResponsiveBreakpints";
import Image from "./Image";
import { CDN_URL } from "../utils/constant";
import SliderImage from "./Image";
import { foodVerities_url } from "../utils/constant";

const FoodVeritiesSlider = ({data, title})=>{
  console.log(title, 'title')
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 8 ,
    slidesToScroll: 2,
    responsive:responsive,
    navigator:true,
    row:1
  };

  return(
    <div>
      <h4 className='text-2xl font-semibold mb-2'>{title}</h4>
      <Slider {...settings}>
      {data?.map(item => (
        <div className='p-1 rounded-lg cursor-pointer focus-visible:outline-0 hover:scale-105 transition-all duration-150 ease-in-out'>
          <img src={foodVerities_url + item?.imageId}/>
        </div>
      ))}
    </Slider>
    </div>
    
  )
}
export default FoodVeritiesSlider;
