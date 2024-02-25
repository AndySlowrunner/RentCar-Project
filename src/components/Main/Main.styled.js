import { styled } from "styled-components";
import heroImg from '../../imeges/hero.png';

export const StyledMain = styled.div`
    margin-left: 80px;
    margin-right: 80px;
`

export const Hero = styled.section`
    background: linear-gradient(
      86.77deg,
      #111111 35.38%,
      rgba(17, 17, 17, 0) 65.61%
    ), url(${heroImg});
    background-position: center;
    background-size: cover;
    width: calc(100% + 160px);
    margin-left: -80px;
    margin-right: -80px;    
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 720px;
    width: 375px;
    margin-left: 80px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: "Manrope", sans-serif;
    color: #3470FF;
    margin: 0;
`;

export const Text = styled.p`
    color: gray;
    margin-top: 32px;

    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 143%;
`;

export const Features = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 48px;
    gap: 50px;
`;

export const Item = styled.li`
    border: 0.5px solid #3470FF;
    border-radius: 24px;
    width: 300px;
    padding: 15px;
`;

export const ItemText = styled.p`
    margin-top: 15px;
    line-height: 143%;
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 24px;
`;

export const SectionTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    color: #3470FF;
`

export const SectionImage = styled.img`
    max-width: 30%;
`;

export const SectionContent = styled.div`
    margin-left: 25px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    margin-bottom: 24px;
    gap: 10px;
    line-height: 143%;
`;