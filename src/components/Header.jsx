import { NavLink } from "react-router-dom"
import Nav from "./Nav"
import styled from "styled-components"

const Header = () => {
    return (
        <NavHeader>
            <NavLink to='/' className='left'>
                <h1 className="logo">Tech<span>Hub</span></h1>
            </NavLink>
            <Nav />
        </NavHeader>
    )
}

const NavHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color:${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;


    .logo {
        height: auto;
        font-size:4rem;
        max-width: 30%;
        color:${({ theme }) => theme.colors.white};

        span{
            color:${({theme})=>theme.colors.highLight};
        }    
  }


`

export default Header
