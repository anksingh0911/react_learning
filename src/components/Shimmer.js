import styles from '../styles/shimmer.module.scss';

const ShimmerUI =()=>{
  const shimmerContent = Array(12).fill();
  console.log(shimmerContent.length, 'shimmerContent')
  return(
    <div className='container mx-auto'>
      <div className="grid grid-cols-4 gap-2">
        {shimmerContent.map((item)=>(
          <div  className="animate-pulse col-span-2 md:col-span-1 h-[300px] ">
            <div className="w-full h-[60%] bg-gray-300 mb-3 rounded-lg"> </div>
            <div className='px-2'>
              <div className="w-[80%] h-4 bg-gray-300 mb-2 rounded-md"> </div>
              <div className="w-[60%] h-3 bg-gray-300 mb-2 rounded-md"> </div>
              <div className="w-[30%] h-2 bg-gray-200 mb-2 rounded-md"> </div>
              <div className="w-[50%] h-2 bg-gray-200 mb-2 rounded-md"> </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ShimmerUI;