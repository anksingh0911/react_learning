import {GrStar} from 'react-icons/gr';
// import styles from '../styles/rating.module.scss';

const Rating = (props)=>{
  const {rating} =props;

  return(
    <span className={rating<4 ? 'bg-orange-500 px-1 flex item-center text-white rounded-sm' : rating<3 ? 'bg-red-500 px-1 flex item-center text-white rounded-sm' :rating==='--' ? 'bg-gray-500 px-1 flex item-center text-white rounded-sm' : 'bg-green-500 px-1 flex item-center text-white rounded-sm'}>
      <GrStar className="text-md text-white-600 mt-[1px]"/>{rating}
    </span>
  )
}
export default Rating;