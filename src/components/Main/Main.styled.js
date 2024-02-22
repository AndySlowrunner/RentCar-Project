import { styled } from "styled-components";
import heroImg from '../../imeges/hero.png';

export const Section = styled.section`
    background: linear-gradient(
      86.77deg,
      #111111 35.38%,
      rgba(17, 17, 17, 0) 65.61%
    ), url(${heroImg});
    background-position: center;
    background-size: cover;
    max-width: 100%;    
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 720px;
    width: 375px;
    margin-left: 24px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: gray;
    margin: 0;
`;

export const Text = styled.h3`
    color: gray;
    margin-top: 32px;
`;
