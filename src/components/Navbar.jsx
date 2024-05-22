import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const state = useSelector( (state) => state.handleCart);

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} height={60} alt=''/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                    <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                    <Link className="nav-link" to="/products" >Products</Link>
                    <Link className="nav-link" to="/about" >About</Link>
                    <Link className="nav-link" to="/contact" >Contact Us</Link>
                    </div>
                    <div className='buttons'>
                        <button className="btn btn-outline-dark me-1"> <i className="fa fa-sign-in"></i> Login </button>
                        <button className="btn btn-outline-dark me-1 ms-2"> <i className="fa fa-user-plus"></i> Register </button>
                        <Link to='/cart' className="btn btn-outline-dark me-1 ms-2"> <i className="fa fa-shopping-cart"></i> Cart ({state.length}) </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>

  )
}

export default Navbar