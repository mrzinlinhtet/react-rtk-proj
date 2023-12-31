import { useSelector } from 'react-redux'
import FavCard from './FavCard';

const Fav = () => {
  const favItems = useSelector(state => state.products.fav);
  // console.log(favItems);
  return (
    <div className='d-flex flex-wrap gap-3 my-5'>
      {favItems.length > 0 ? favItems.map(item => <FavCard key={item.id} product={item} />) : <h2 className=''>Not add yet fav</h2>}
    </div>
  )
}

export default Fav
