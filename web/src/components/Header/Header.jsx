import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import "./header.scss"


export const Header = ({ siteTitle }) => (
    <header>
        <div className="container">
            <Link
                className="container__link-title"
                to='/' 
            >
                {siteTitle}
            </Link>
            <Link  
                className="container__link"
                to='/login'
            >
                Login
            </Link>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

