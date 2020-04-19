import React from 'react';
import Navbar from 'react-bootstrap/NavBar';

class Footer extends React.Component {
    render() {
        return (
            <Navbar className="bg-whight">
                <Navbar.Brand href="/" className="mx-auto">© S.H.</Navbar.Brand>
            </Navbar>
        );
    }
}

export default Footer;
