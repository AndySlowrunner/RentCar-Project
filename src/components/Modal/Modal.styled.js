import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
    position: relative;
    background-color: #fff;
    border-radius: 24px;
    width: 540px;
    height: 552px;
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
`
