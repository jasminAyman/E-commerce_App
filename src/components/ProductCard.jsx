import { Link } from 'react-router-dom'

function ProductCard({prod}) {
  return (
    <div className="col-md-3 col-sm-6 mb-1">
      <div className="card p-4 h-100 text-center">
        <img src={prod.image} alt={prod.title} height={250} />
        <h4 className='mt-2'> {prod.title.substring(0,12)}... </h4>
        <p className='lead fw-bold'> {prod.price}$ </p>
        <Link to={`/details/${prod.id}`} className='btn btn-outline-dark mb-2'>Buy Now</Link>
      </div>
    </div>
  )
}

export default ProductCard