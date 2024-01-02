import React, { useEffect } from 'react'
import axios from "axios";
import Spinner from '../components/Spinner';
import Layout from '../components/Layout';


const HomePage = () => {

  const getUserData = async () => {
    try {
      const user = await axios.post("http://localhost:8080/api/v1/user/getUserData",{}, {
        headers : {
          Authorization : "Bearer " + localStorage.getItem("token")
        }
      })
    } catch (error) {
      
    }
  }

  useEffect( ()=> {
    getUserData()
  }, [])

  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  )
}

export default HomePage
