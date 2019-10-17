import React from 'react';
//import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'

const headerStyle = {
  backgroundColor:'rgb(47, 59, 89)'
}

const headerName = {
    color:'white'
}

const Header = () => {
  
    return(
        <div>
                    <nav className="navbar is-info" style={headerStyle} role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/routele">
                        </a> 
                        <div  className="tabs title" ><ul className='title1' style={headerName}>MontyNews</ul></div>
                    </div>
                   </nav>        
        </div>

    );

}
export default Header;