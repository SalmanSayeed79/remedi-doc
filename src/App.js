import logo from './logo.svg';
import './App.css';
import React , {useState, useContext,createContext} from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ThemeProvider,Box,CircularProgress,Typography} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import Home from './Pages/Home';
import Appbar from './Components/Appbar';
import Account from './Pages/Account'
import Patients from './Pages/Patients'
import PatientDetail from './Pages/PatientDetail'
import Login from './Pages/Login';
import { auth } from './firebase';

const theme=createTheme({
  palette:{
    primary:{
      main:"#ff4081",
      light:"#ff80ab",
      dark:"#f50057",
      contrastText:"#f4f4f4"
    },
    lightWhite:{
      main:"#f4f4f4"
    }
  },
  typography: {
    fontFamily: [
      "Bree Serif",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
export default function App() {
  const [loading,setLoading]=useState(true)
  const [user,setUser]=React.useState(null)
  React.useEffect(()=>{
    
    auth.onAuthStateChanged(user=>{
      setUser(user)
      setLoading(false)
    })
  },[user])
  const AuthContext=createContext()
  
  return (
    <AuthContext.Provider value={auth}>
      <ThemeProvider theme={theme}>
      {!loading && !user && <Login />}
      {!loading && user && <BrowserRouter>
        <Appbar/>
        <Switch>
          <Route component={Home} exact path="/home"/>
          <Route component={Home} exact path="/"/>
          <Route render={() => <Account acc={user.email}/>} exact path="/account"/>
          <Route component={Patients} exact path="/patients"/>
          <Route component={PatientDetail} exact path="/patients/:id"/>
        </Switch>
      </BrowserRouter>}
      {loading && <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress /><Typography>Loading .... </Typography></Box>}
    </ThemeProvider>
    </AuthContext.Provider>
  );
}

