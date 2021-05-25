import './Products.style.css';
import ProductCard from '../ProductCard/ProductCard.component';
import {useSelector} from 'react-redux';

const Products = () => {
  const dataStore = useSelector(state => state.store.dataStore);
    return (
        <div className='productList'>
          {
            dataStore.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
    )
}

export default Products



