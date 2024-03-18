import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
    position: relative;
    background-color: #fff;
    border-radius: 24px;
    width: 540px;
    height: 752px;
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
    transition: transform .7s ease-in-out;

    &:hover{
        transform: rotate(270deg);
    }
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

export const Features = styled.div`
    display: flex;
    flex-direction: column;
    width: 387px;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 24px;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
`;

export const Accessories = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
`;

export const ModalButton = styled.div`
    border-radius: 12px;
    border: 0;
    margin-top: 24px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background: #3470ff;
    cursor: pointer;

    &:hover{background-color: #0B44CD;}

    a{
        font-size: 14px;
        line-height: 143%;
        color: #fff;
    }
`;

export const Condition = styled.p`
    border-radius: 35px;
    padding: 7px 14px;
    height: 32px;
    background: #f9f9f9;

    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #363535;
`;

export const ConditionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;