import { Link } from "react-router-dom"

const Header = ()=>{
    return(
        <nav className="sticy-header">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Delicious</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down mobile-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contacts">Contact us</Link></li>
          </ul>
        </div>
      </nav>
    )
}
export {Header}