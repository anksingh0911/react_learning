import { banner_url } from "../utils/constant";

const Image = (props)=>{
  return(
  <div className='p-1 rounded-lg'>
    <img src={banner_url + props?.data?.imageId}/>
  </div>
  )
}
export default Image;
