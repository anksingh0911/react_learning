import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { responsive } from "../utils/SliderResponsiveBreakpints";
import Image from "./Image";
import { banner_url } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";


const SlickSlider = ({data})=>{
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive:responsive,
    navigator:true
  };

  return(
    <Slider {...settings}>
      {data?.map(item => (
      //    <div className='p-1 rounded-lg'>
      //    <img src={banner_url + item?.imageId}/>
      //  </div>
      <RestaurantCard resData={item}/>
      ))}
    </Slider>
  )
}
export default SlickSlider;
