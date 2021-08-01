import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = styled.nav`
background-color:hsl(209, 23%, 22%);
padding:2rem 5rem;
@media(max-width:600px){
padding:2rem 2rem;
}
`

const Navbarcontainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Logo = styled.a`
color:#fff;
font-weight:650;
font-size:1.2rem;
@media(max-width:600px){
font-size:0.9rem;
}
`

const Dark = styled.a`
color:#fff;
font-weight:500;
font-size:.95rem;
display:flex;
cursor:pointer;
align-items:center;
span{
padding-left:.5rem;
}
@media(max-width:600px){
font-size:.75rem;
}
`

const Navigation = () => {
    return (
        <div>
            <Navbar>
                <Navbarcontainer>
                     <Logo>
                         Where in the world ?
                     </Logo>
                     <Dark>
                        <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode</span>
                     </Dark>
                </Navbarcontainer>
            </Navbar>
        </div>
    )
}

export default Navigation
