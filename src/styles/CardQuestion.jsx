/* eslint-disable no-use-before-define */
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const DivForm = styled.div`
    background-color: #16161A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #FFFFFE;
    border-radius: 10px;
`
export const DivTitle = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const DivProgress = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const Titulo = styled.h2`
    padding: 1rem;
    margin: 0;
    font-size: 22px;
    font-family:'Nunito', sans-serif; 
    font-weight: bold; 
    font-style: normal;
    line-height: 30px;
    text-align: center;
    color: #fff;
`
export const ButtonStyle = styled(Button)`
    background-color: #232E35;
    padding: 20px;
    margin: 1rem 0;
    border: 2px solid #FFFFFE;
    font-size: 16px;
    font-family:'Nunito', sans-serif; 
    font-weight: normal; 
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0.005em;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    color: #FFFFFE;
    width: 350px;
`


