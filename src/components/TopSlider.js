import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { responsive } from "../utils/SliderResponsiveBreakpints";
import Image from "./Image";
import { CDN_URL } from "../utils/constant";
import SliderImage from "./Image";

const SlickSlider = ({data})=>{
  console.log(data)
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:responsive,
    navigator:true
  };

  return(
    <Slider {...settings}>
      {data?.map(item => (
        <SliderImage data={item}/>
      ))}
    </Slider>
  )
}
export default SlickSlider;
