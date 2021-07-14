import './navbar.scss'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                <Link to="/" className="navbar-brand">
                        Home
                    </Link>
                </div>
                <div className="center">Best-By</div>
                <div className="right">
                    
                    <Link to="/items/list" className="navbar-link">
                        All-Items
                    </Link>
                    <Link to="/items/create" className="navbar-link">
                        Add Item
                    </Link>
                </div>
            </div>
        </div>
    )
}