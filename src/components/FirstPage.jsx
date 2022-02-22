import React from 'react'
import { ContFirst } from '../styles/LoginStyle'


export default function FirstPage() {

    setTimeout(() => {
      (window.location.href="/login")
    },3000)

  return (
    <ContFirst>
    </ContFirst>
  )
}
