import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import Home from './Pages/Home';
import Appbar from './Components/Appbar';
import Account from './Pages/Account'
import Patients from './Pages/Patients'
import PatientDetail from './Pages/PatientDetail'
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
function App() {

  return (
    <ThemeProvider theme={theme}>
    
    <BrowserRouter>
      <Appbar/>
      <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={Account} exact path="/account"/>
        <Route component={Patients} exact path="/patients"/>
        <Route component={PatientDetail} exact path="/patients/:id"/>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
