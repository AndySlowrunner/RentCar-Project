import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    margin-left: 80px;
    margin-right: 80px;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
`;

export const LogoText = styled.h2`
    margin: 0;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;
`;

export const Link = styled(NavLink)`
    color: #3470FF;

    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 18px;

    &:hover {
        color: #0B44CD;
    }
`