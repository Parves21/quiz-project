import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Subject from './Components/Subject/Subject';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';
import Questions from './Components/Questions/Questions';
import JavaScript from './Components/Questions/JavaScript/JavaScript';
import Bootstrap from './Components/Questions/Bootstrap/Bootstrap';
import Git from './Components/Questions/Git/Git';
import Html from './Components/Questions/Html/Html';
import CSS from './Components/Questions/CSS/CSS';
import QuizReact from './Components/Questions/QuizReact/QuizReact';
import NurIslam from './Layouts/NurIslam';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('quizs.json'),
          element: <Subject></Subject>
        },
        {
          path: '/quiz',
          loader: () => fetch('quizs.json'),
          element: <Quiz></Quiz>
        },
        {
          path: '/questions',
          element:<Questions></Questions>
        },
        {
          path: '/javascript',
          element: <JavaScript></JavaScript>
        },
        {
          path: '/bootstrap',
          element: <Bootstrap></Bootstrap>
        },
        {
          path: '/git',
          element: <Git></Git>
        },
        {
          path: '/html',
          element: <Html></Html>
        },
        {
          path: '/css',
          element: <CSS></CSS>
        },
        {
          path: '/quizReact',
          element: <QuizReact></QuizReact>
        },
        {
          path: '/result',
          element: <Result></Result>
        },
        {
          path: '/nurislam',
          element: <NurIslam></NurIslam>
        }
      ]
    }
  ]);


  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
