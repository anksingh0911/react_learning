import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { responsive } from "../utils/SliderResponsiveBreakpints";
import Image from "./Image";
import { CDN_URL } from "../utils/constant";
import SliderImage from "./Image";
import { foodVerities_url } from "../utils/constant";

const FoodVeritiesSlider = ({data})=>{
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: data?.length > 9 ? 9: data.length -1 ,
    slidesToScroll: 1,
    responsive:responsive,
    navigator:true
  };

  return(
    <Slider {...settings}>
      {data?.map(item => (
        <div className='p-1 rounded-lg'>
          <img src={foodVerities_url + item?.imageId}/>
        </div>
      ))}
    </Slider>
  )
}
export default FoodVeritiesSlider;
