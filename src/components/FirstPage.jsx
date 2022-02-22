import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom'
import { ContFirst } from '../styles/loginStyle'


export default function FirstPage() {

  const navigate = useNavigate()

    setTimeout(() => {
      // (window.location.href="/RetoFinal-Sprint2/login")
      console.log("amhsbjswbwjhwdbsekjnfkjrdng aiuda");
      navigate('/RetoFinal-Sprint2/login')
      // <Navigate to = './RetoFinal-Sprint2/login' />
    },2000)

  return (
    <ContFirst>
    </ContFirst>
  )
}
