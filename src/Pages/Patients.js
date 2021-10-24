import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper} from "@mui/material"
import PatientCard from '../Components/PatientCard'

export default function Home() {
    const [loading,setLoading]=React.useState(true)
    const [patients,setPatients]=React.useState([])
    const getPatients=()=>{
        fetch("http://151.106.113.197/get-patient-data?key=f4b1354db41f4c07fb33c5305c1fc3bd").then(data=>{
            console.log(data.json())
        })
    }
    React.useEffect(()=>{
        //getPatients()
    },[])
    return (
    
        <Box> 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
                <Typography variant="h3" color="primary">
                Patients
                </Typography>
                <Box sx={{width:"90vw",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginBottom:{xs:"10vh",md:"0"}}}>
                   <PatientCard/>
                    {patients.map(item=>(<PatientCard data={item}/>))}
                </Box> 
            
            </Box>
        </Box>
    )
}
