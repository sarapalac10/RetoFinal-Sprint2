import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from '../components/Home';
import QuestionHTML from '../components/QuestionHTML';
import QuestionCSS from '../components/QuestionCSS';
import QuestionJS from '../components/QuestionJS';
import QuestionFIGMA from '../components/QuestionFIGMA';
import QuestionUX from '../components/QuestionUX';
import Perfil from '../components/Perfil';
import Estadistica from '../components/Estadistica';
import FirstPage from '../components/FirstPage';
import Login from '../components/Login';
import User, { Form } from '../components/Form';

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route>
                <Route path='/RetoFinal-Sprint2/login' element={<Login />}/>
                <Route path="/RetoFinal-Sprint2/home" element={<Home />} /> 
                <Route path="/RetoFinal-Sprint2/questionHTML" element={<QuestionHTML />} />
                <Route path="/RetoFinal-Sprint2/questionCSS" element={<QuestionCSS />} />
                <Route path="/RetoFinal-Sprint2/questionJS" element={<QuestionJS />} />
                <Route path="/RetoFinal-Sprint2/questionFIGMA" element={<QuestionFIGMA />} />
                <Route path="/RetoFinal-Sprint2/questionUX" element={<QuestionUX />} />
                <Route path="/RetoFinal-Sprint2/estadistica" element={<Estadistica />} />
                <Route path="/RetoFinal-Sprint2/perfil" element={<Perfil />} />
                <Route path="/RetoFinal-Sprint2" element={<FirstPage />} />
                <Route path="/RetoFinal-Sprint2/form" element={<Form />} />
              </Route>
            </Routes>
      </BrowserRouter>

    </div>
  )
}
