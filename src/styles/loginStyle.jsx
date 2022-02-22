import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const ContFirst =styled.div`
    height:100vh;
    background-color:#7F5AF0;
    background-image: url(https://res.cloudinary.com/sarapalacio01/image/upload/v1645318305/Quiz-Reto2/daily-bits-white-logo_zjgubg.png);
    background-repeat: no-repeat;
    background-position: center;
`
export const ButtonFirst = styled(Button)`
    background-color: #7F5AF0;
    border: 1px solid red;
    position: center;
    margin: auto;
`

export const ContLoginArriba = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`
export const TitleLoginArriba = styled.h1`
    padding: 1rem;
    margin-top: 2rem;
    font-size: 32px;
    font-family:'Nunito', sans-serif; 
    font-weight: bold; 
    font-style: normal;
    line-height: 30px;
    text-align: left;
    color: #fff;
`