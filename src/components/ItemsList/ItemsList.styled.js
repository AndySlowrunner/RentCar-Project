import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 48px;
    margin-left: 80px;
    margin-right: 80px;
    gap: 29px;
`;

export const CardWrapper = styled.li`
    position: relative;
    width: 274px;
    height: 426px;
`;

export const CardImage = styled.img`
    width: 274px;
    height: 268px;
    border-radius: 12px;
    object-fit: cover;
`;

export const StyledSvg = styled.svg`
    position: absolute;
    top: 14px;
    right: 14px;

    cursor: pointer;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 8px;
`;

export const CardText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
`;

export const CardButton = styled.button`
    height: 44px;
    width: 274px;
    background-color: #3470FF;
    border: 0;
    border-radius: 12px;
    margin-top: 28px;
    cursor: pointer;

    font-size: 14px;
    line-height: 143%;
    color: #fff;

    &:hover{
        background-color: #0B44CD;
        color: #fff;
    }
`;

export const Button = styled.button`
    height: 44px;
    width: 250px;
    background-color: transparent;
    border: 0;
    margin-top: 48px;
    margin-bottom: 48px;

    cursor: pointer;

    font-size: 14px;
    line-height: 143%;

    &:hover{
        background-color: #0B44CD;
        border-radius: 8px;
        color: #fff;
    }
`;