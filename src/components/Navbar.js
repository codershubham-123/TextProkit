import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">{props.contact}</Link>
              </li>


            </ul>
            <form className="d-flex me-auto mb-2 mb-lg-0">
              <div className={` form-check form-switch text-${props.mode === "light" ? 'dark' : 'light'} `}>
               <label><h5>Current Time :  </h5></label> { currentTime.toLocaleTimeString()}
              </div>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <div className={`form-check form-switch text-${props.mode === "light" ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set title here",
  about: "Set about here"
}