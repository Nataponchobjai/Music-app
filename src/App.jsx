import { useState } from 'react'
// import ButtonDemo from './components/Button'; 
import Header from './components/Header';
import Login from './components/Login';
import Button from "@mui/material/Button";
import CustomRadioGroup from"./components/RadioGroup";
import Dashboard from './components/Dashboard';
import OnlineCard from './components/onlineCard';
import CustomCard from './components/Card';
import Typography from '@mui/material/Typography';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  

  return (
    <>
     <Header/>
     {isLoggedIn === true ? <Dashboard/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    
     
    </>
  )
}

export default App
