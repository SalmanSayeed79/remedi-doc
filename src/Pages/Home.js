import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper} from "@mui/material"
import {doctors} from '../Assets/doctors'
import {auth,db} from '../firebase'
{/**Run this once */}
const createAccounts=()=>{
    doctors.forEach((item)=>{
        //auth.createUserWithEmailAndPassword(item.email,"test1234")
     
            db.collection("doctors").doc(item.email).set({
                id: item.id,
                name: item.name,
                email: item.email,
                specilization: item.specilization,
                borough: item.borough,
                address: item.address,
                zip: item.zip
            })
  
     
    })
}
export default function Home() {
    createAccounts()
    return (
        <Box> 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
                <Typography variant="h3" color="primary">
                ReMedi
                </Typography>
                <Typography>
                    Welcome to the doctor end of Remedi
                </Typography> 
            
            </Box>
        </Box>
    )
}
