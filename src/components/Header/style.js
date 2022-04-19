import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #adb5bd;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-right: 20px;
`;

export const A = styled.a`
    &:hover{
        transform: scale(1.2);
    }
    text-decoration: none;
    color: #343a40;
    font-size: 18px;
    transition: all 0.3s;
`;

export const B = styled.a`
    &:hover{
        background-color: #862e9c;
        transform: scale(1.2);
    }
    background-color: #9c36b5;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    font-weight: 600;
    transition: all 0.3s;
`

export const Image = styled.img`
    width: 70px;
    margin-left: 40px;
    cursor: pointer;
`;