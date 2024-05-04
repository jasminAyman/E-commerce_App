import ProductCard from './ProductCard'
import { useState , useEffect } from 'react'
import axios from 'axios'

function ProductsList() {

  const [products , setProducts] = useState([]);

  const getProducts = async ()=> {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data)
  } //getProducts

  useEffect( ()=> {
    getProducts()
  } , [])

  const filterProduct = (cat)=> {
    const updatedList = products.filter((product)=>product.category === cat);
    setProducts(updatedList);
  }
  
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr />
          <div className="buttons mb-5 mt-4 d-flex justify-content-center pb-4">
            <button className="btn btn-outline-dark me-2"onClick={()=> getProducts()}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
          </div>

          {
            products.map( (item)=>{
              return( <ProductCard key={item.id} prod={item} /> )
            })
          }
          

        </div>{/* row */}
      </div>{/* container */}
    </section>
  )
}

export default ProductsList