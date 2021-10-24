import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper} from "@mui/material"
import {doctors} from '../Assets/doctors'
import {auth,db} from '../firebase'
import '../Style/background.css'
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
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"white",marginTop:{md:"7vh"}}}>
                <Typography variant="h3" color="primary">
                HealOn
                </Typography>
                <Typography>
                    Welcome to the doctor end of HealOn
                </Typography> 
                <Box component="img" src="https://i.postimg.cc/VvDbHv37/5207291.png" sx={{width:{xs:"90vw",md:"50vw"}}}/>
            </Box>
            <Box className="home-track" sx={{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",width:"100vw", minHeight:"80vh",backgroundColor:"#ff4081",marginTop:{md:"7vh"}}}>
                <Box>
                    <Typography variant="h3" sx={{color:"#f4f4f4",maxWidth:"80vw",textAlign:"center"}}>
                    Track Your Patients
                    </Typography>
                    <Typography sx={{color:"#f4f4f4",maxWidth:"80vw",textAlign:"center"}}>
                        Track all your patients at the same place
                    </Typography> 
                </Box>
                <Box component="img" src="https://i.postimg.cc/VLFSYKL3/269-Converted.png" sx={{width:{xs:"40vw",md:"15vw"}}}/>
            </Box>
            <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row-reverse"},alignItems:"center",justifyContent:"space-around",width:"100vw", minHeight:"80vh",backgroundColor:"white",marginTop:{md:"7vh"}}}>
                <Box>
                    <Typography variant="h3" color="primary" sx={{maxWidth:"80vw",textAlign:"center"}}> 
                    Hourly Monitor Critical Patients
                    </Typography>
                    <Typography sx={{maxWidth:"80vw",textAlign:"center"}}>
                        Critical patients need the utmost care and constant monitoring. This is where Heal-On comes in
                    </Typography> 
                </Box>
                <Box component="img" src="https://i.postimg.cc/JzB9N2DF/10593.jpg" sx={{width:{xs:"90vw",md:"50vw"}}}/>
            </Box>
            <Box className="home-track" sx={{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",width:"100vw", minHeight:"80vh",backgroundColor:"#ff4081",marginTop:{md:"7vh"}}}>
                <Box>
                    <Typography variant="h3" sx={{color:"#f4f4f4",maxWidth:"80vw",textAlign:"center"}}>
                    Doctor Authentication
                    </Typography>
                    <Typography sx={{color:"#f4f4f4",maxWidth:"80vw",textAlign:"center"}}>
                        We make sure no one else can see your patients' data by using google's serverless authentication
                    </Typography> 
                </Box>
                <Box component="img" src="https://i.postimg.cc/0jPVwtgL/undraw-security-o890-1.png" sx={{width:{xs:"90vw",md:"50vw"}}}/>
            </Box>
            <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",width:"100vw", minHeight:"10vh",backgroundColor:"#FFFFFF",marginBottom:{xs:"10vh",md:"0"}}}>
                <Box>
                    <Typography variant="p" sx={{maxWidth:"80vw",textAlign:"center"}}>
                    All rights reserved - HealOn 2021
                    </Typography>
                
                </Box>
                
            </Box>
        </Box>
    )
}
