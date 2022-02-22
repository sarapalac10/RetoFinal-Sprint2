import { Button } from 'react-bootstrap'
import styled from "styled-components";

export const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    color: #fff;
`
export const Titulo = styled.h2`
    padding: 1rem;
    margin-top: 2rem;
    font-size: 22px;
    font-family:'Nunito', sans-serif; 
    font-weight: bold; 
    font-style: normal;
    line-height: 30px;
    text-align: left;
    color: #fff;
`
export const ButtonProfile = styled(Button)`
    background-color: #16161A;
    color: #EF4565;
    border: none;
    width: 350px;
    font-size: 16px;
    padding: 1rem;
    cursor: pointer;
`
export const NombreProfile = styled.h2`
    font-size: 24px;
    font-family:'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
`
export const MailProfile = styled.h3`
    margin-top: 0;
    font-size: 14px;
    font-family:'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    text-align: center;
`
