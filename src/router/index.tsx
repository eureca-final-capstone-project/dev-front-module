import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import PostTestPage from '../pages/PostTestPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/post-test',
    element: <PostTestPage />,
  },
])
