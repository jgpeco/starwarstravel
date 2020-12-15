import React from 'react'

const Navbar = () => (
    <nav>
        <div className="navbar">
            <button class="btn-hide" onClick={() => window.location.reload(false)}>
                Star Wars Travel
            </button>
        </div>
    </nav>
)

export default Navbar