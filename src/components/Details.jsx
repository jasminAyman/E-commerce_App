import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action'
import {Link} from 'react-router-dom'

function Details() {

  const params = useParams();
  const [product , setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) =>{
    dispatch(addItem(product));
  }

  useEffect( ()=>{
    fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))        
  } ,[])

  return (
    <section className="py-5">
      <div className="container">
        <div className="row py-5">
        
        <div className="col-md-6 mb-1 text-center">
            <img src={product.image} width={400} height={400} alt={product.title} />
        </div>{/* image */}

        <div className="col-md-6 mb-1" style={{lineHeight:2}}>
          <h4 className='text-uppercase text-black-50'> {product.category} </h4>
          <h1 className='display-5'> {product.title} </h1>
          <p className='lead fw-bolder'> Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i> </p>
          <h3 className='display-5 fw-bold my-4'> {product.price}$ </h3>
          <p className='lead'> {product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}> Add To Cart</button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2"> Go To Cart</Link>
        </div>{/* content */}

        </div>{/* row */}
      </div>{/* container */}
    </section>
  )
}

export default Details