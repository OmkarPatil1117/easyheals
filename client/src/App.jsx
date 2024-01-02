import {BrowserRouter, Routes,  Route } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useSelector } from "react-redux"
import Spinner from "./components/Spinner"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"

function App() {
  const loading = useSelector((state) => state.alertSlice.loading)
  console.log(loading);
  return (
    <>
    <BrowserRouter>
    {loading ? ( <Spinner></Spinner> ) : ( 
    <Routes>
        <Route path="/" 
        element={
          <ProtectedRoute>
            <HomePage></HomePage>
          </ProtectedRoute>
        }></Route>
        
        <Route path="/login"
         element={
         <PublicRoute>
           <Login></Login>
         </PublicRoute>
        }></Route>


        <Route path="/register" 
        element={
        <PublicRoute>
            <Register></Register>
        </PublicRoute>}></Route>
      </Routes> )}
      
    </BrowserRouter>
    </>
  )
}

export default App
