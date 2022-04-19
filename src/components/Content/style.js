import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: center;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1`
    padding: 10px;
    font-size: 40px;
    font-weight: 300;
`;

export const P = styled.h1`
    font-size: 20px;
    font-weight: 200;

`;

export const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 60px;
`;

export const Box = styled.div`
    &:hover{
        background-color: #f8f9fa;
        transform: translateY(-10px);
    }
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    height: 500px;
    box-shadow: 2px 5px 20px  rgba(0,0,0, 0.10);
    
`;

export const Image = styled.img`
    height: 400px;
    
    border-radius: 10px 10px 0 0;
`;

export const Image2 = styled.img`
    height: 400px;
    width: 299px;
    border-radius: 10px 10px 0 0;
`;

export const Image3 = styled.img`
    height: 400px;
    width: 299px;
    
    border-radius: 10px 10px 0 0;
`;