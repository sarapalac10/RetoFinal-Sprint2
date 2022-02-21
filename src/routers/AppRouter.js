import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import '../App.css';
import QuestionHTML from '../components/QuestionHTML';
import QuestionCSS from '../components/QuestionCSS';
import QuestionJS from '../components/QuestionJS';
import QuestionFIGMA from '../components/QuestionFIGMA';
import QuestionUX from '../components/QuestionUX';
import Perfil from '../components/Perfil';
import Estadistica from '../components/Estadistica';
import FirstPage from '../components/FirstPage';
import Login from '../components/Login';

export const AppRouter = () => {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} /> 
                <Route path="/questionHTML" element={<QuestionHTML />} />
                <Route path="/questionCSS" element={<QuestionCSS />} />
                <Route path="/questionJS" element={<QuestionJS />} />
                <Route path="/questionFIGMA" element={<QuestionFIGMA />} />
                <Route path="/questionUX" element={<QuestionUX />} />
                <Route path="/estadistica" element={<Estadistica />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/firstpage" element={<FirstPage />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
      </BrowserRouter>

    </div>
  )
}
