import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Box,Typography,Paper,TextField,Button} from '@mui/material'
import '../Style/background.css'
import { auth } from '../firebase'

export default function Login() {
    const [page,setPage]=useState(1)
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const createAccount=()=>{

    }
    const history=useHistory()
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", height:"100vh",backgroundColor:"#ff4081"}} className="login">
            {page==1 && <Paper sx={{width:{xs:"80vw",md:"50vw"},height:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography variant="h3" color="primary">Login </Typography>
                <Box sx={{width:{xs:"70vw",md:"45vw"},minHeight:"30vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" sx={{width:{xs:"70vw",md:"45vw"}}} onChange={e=>{setEmail(e.target.value)}}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{width:{xs:"70vw",md:"45vw"}}} onChange={e=>{setPassword(e.target.value)}}/>
                    <Button variant="contained" color="primary" size="large" onClick={e=>{
                        auth.signInWithEmailAndPassword(email,password).then(user=>{
                            console.log(user)
                        }).catch(e=>{
                            alert("User not found. Please enter a valid email and password")
                        })
                    }}>Login</Button>
                </Box>
                <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>Can't login ? <Button onClick={()=>setPage(2)}> Create an account</Button></Typography>
            </Paper>}
            {page==2 && <Paper sx={{width:{xs:"80vw",md:"50vw"},minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography variant="h3" color="primary">Create Account </Typography>
                <Box sx={{width:{xs:"70vw",md:"45vw"},minHeight:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" type="name" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Specialization" variant="outlined" type="name" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Address" variant="outlined" type="name" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Borough" variant="outlined" type="name" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Zip Code" variant="outlined" type="name" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" sx={{width:{xs:"70vw",md:"45vw"}}}/>
                    <Button variant="contained" color="primary" size="large">Create Account</Button>
                </Box>
                <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>Already have an account ? <Button onClick={()=>setPage(1)}> Login </Button></Typography>
            </Paper>}
        
        </Box>
    )
}
