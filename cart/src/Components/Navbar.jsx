import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <h2>Logo</h2>
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar