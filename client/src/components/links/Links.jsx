import React from 'react'
import './links.scss'
import {Link} from 'react-router-dom'

export default function Links () {
    return (
        <div className="link-wrapper">
            <div className="link-wrapper">
            <Link to="/" className="navbar-brand">
                Best-By
            </Link>
            <Link to="/items/list" className="navbar-link">
                List-Items
            </Link>
            <Link to="/items/create" className="navbar-link">
                Add Item
            </Link>
        </div>
        </div>
    )
}