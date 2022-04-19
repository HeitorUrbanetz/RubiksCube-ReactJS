import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-image: linear-gradient(to right, #ff0000, #b6009e);
    color: #fff;
    padding: 16px;
    margin-bottom: 50px;
    padding-bottom: 100px;
    padding-top: 50px;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 40px;
    font-weight: 300;
`;

export const P = styled.h1`
    font-size: 20px;
    font-weight: 200;
    margin-top: 10px;
`;

export const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
`;

export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`;

export const InputInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Input = styled.input`
    outline: none;
    background-color: #ff8787;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 400px;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

export const Button = styled.button`
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: #9c36b5;
    font-size: 20px;
    font-weight: bold;
    color: #f3d9fa;
`