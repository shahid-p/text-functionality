import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.Webname}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.Aboutc}</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Contact</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

Navbar.propTypes = {
  Webname: PropTypes.string.isRequired,
  Aboutc: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  Webname: 'Website title here',
  Aboutc: 'About button here'
}