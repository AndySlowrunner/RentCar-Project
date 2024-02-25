import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 48px;
    background: #E0E0E0;
    height: 150px;
    width: calc(100% + 160px);
    margin-left: -80px;
    margin-right: -80px;
    padding: 24px 80px;
`;

export const FooterNav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
    margin-bottom: 55px;
`;

export const FooterText = styled.div`
    display: flex;
    justify-content: center;
`;

export const FooterLink = styled(NavLink)`
    color: black;

    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 16px;

    &:hover {
        color: #0B44CD;
    }
`;