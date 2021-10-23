import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper} from "@mui/material"
import PatientCard from '../Components/PatientCard'

export default function Home() {

    return (
        <Box > 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
                <Typography variant="h3" color="primary">
                Patients
                </Typography>
                <Box sx={{width:"90vw",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginBottom:{xs:"10vh",md:"0"}}}>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                   <PatientCard/>
                </Box> 
            
            </Box>
        </Box>
    )
}
