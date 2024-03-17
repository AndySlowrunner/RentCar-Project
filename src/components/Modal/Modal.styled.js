import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
    position: relative;
    background-color: #fff;
    border-radius: 24px;
    width: 540px;
    height: 652px;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 0%;
`;

export const Container = styled.div`
    padding: 40px;
`;

export const StyledSvg = styled.svg`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`;

export const StyledImage = styled.img`
    border-radius: 14px;
    width: 461px;
    height: 248px;
    object-fit: cover;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 287px;
    gap: 8px;
    margin-top: 10px;
    margin-bottom: 14px;
`;

export const CardText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: #121417;
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
`;
