import React from 'react'

const Navbar = () => (
    <nav>
        <div className="navbar">
            <button className="btn-hidden" onClick={() => window.location.reload(false)}>
                Star Wars Travel
            </button>
        </div>
    </nav>
)

export default Navbar