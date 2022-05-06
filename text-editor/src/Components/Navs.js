import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navs () {
    return (
        <div>
            {/* <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            /> */}
            <Container>
            <Nav variant="tabs" defaultActiveKey="./Home.js">
                
                    <Nav.Link href="./Home.js" to="/" >Home</Nav.Link>
                
                    <Nav.Link eventKey="/text-editor" >Text Editor</Nav.Link>
                
            </Nav>
            </Container>
        </div>
        
    )
}
export default Navs;