import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom'
import { ContFirst } from '../styles/loginStyle'


export default function FirstPage() {

  const navigate = useNavigate()

    setTimeout(() => {
      console.log("amhsbjswbwjhwdbsekjnfkjrdng aiuda");
      navigate('/RetoFinal-Sprint2/login')
    },2000)

  return (
    <ContFirst>
    </ContFirst>
  )
}
