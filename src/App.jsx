import React from 'react'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layout/MainLayout'
import { categoryLink, quizLink, resultsLink, startLink } from './constants'
import CategoryPage from './pages/CategoryPage';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path={startLink} element={<StartPage />} />
        <Route path={categoryLink} element={<CategoryPage/>} />
        <Route path={quizLink} element={<QuizPage />} />
        <Route path={resultsLink} element={<ResultsPage />} />
      </Route>
    )

  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App