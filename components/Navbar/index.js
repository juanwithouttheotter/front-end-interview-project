import Link from "next/link";
import styled from "styled-components";
import FoxtrotLogoWhiteLg from "../../public/foxtrot-logo-white-lg.svg";


const Nav = styled.nav`
    background-color: #121212;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    `
const NavUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-basis: 40%;
    `
const NavLi = styled.li`
    padding: 1rem;
    vertical-align: text-top;
    text-align: center;
    display: inline-block;
    &:hover {
        background: grey;
        cursor: pointer;
    }
    `
const NavA = styled.a`
        float: left;
        color: #f2f2f2;
        text-align: center
        margin:auto;
        text-decoration: none;
        font-size: 16px;    
    `
const NavLogo = styled.div`
        padding: 1rem;
        flex-basis: 20%;
        text-align: center;
        display: block;
        &:hover {
            cursor: pointer;
        }
        
`
const CartIcon = styled.div`
        flex-basis: 40%;
        color: white;
        align-items: center;
        display: flex;
        justify-content: flex-end;
        &:hover {
            cursor: pointer;
        }
`
const Index = () => {

    return (
        <Nav>
            <NavUl>
                <NavLi>
                    <Link href="/stores">
                        <NavA>Stores</NavA>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="/about/contact-us">
                        <NavA>Contact Us</NavA>
                    </Link>
                </NavLi>
            </NavUl>

            <NavLogo>
                <Link href="/">
                    <a>
                        <FoxtrotLogoWhiteLg />
                    </a>
                </Link>
            </NavLogo>

            <CartIcon>
                <Link href="/stores/cart">
                    <NavA>
                        Cart
                    </NavA>
                </Link>
            </CartIcon>
        </Nav>
    );
}

export default Index;