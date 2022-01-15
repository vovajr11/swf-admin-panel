import styled from 'styled-components';

export const LogBox = styled.div`
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    text-align: center;
`;

export const Input = styled.input`
    width: ${props => props.width};
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 16px;
    padding: 7px 0;
    transition: border-color 0.2s;
`;

export const Button = styled.button`
    width: ${props => props.width};
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0 auto;
    border-radius: 5px;
`;
