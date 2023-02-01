import { Component } from "react";
import { SiDuckduckgo } from 'react-icons/si';
import { Link } from "react-router-dom";

class Header extends Component {


    render() {

        
        const headerStyle={
            border: '1px solid black', 
            margin: '0',
            padding: '0 60px',
            backgroundColor: 'rgb(29, 161, 242)',
            fontSize: '3rem'
        }

        return(
            <div style={headerStyle}>
                <Link to={`/`}>
                    <h1>Quacker<SiDuckduckgo /></h1>
                </Link>
            </div>
        )
    }
}

export default Header;