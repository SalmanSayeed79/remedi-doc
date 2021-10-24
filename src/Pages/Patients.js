import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper,CircularProgress} from "@mui/material"
import PatientCard from '../Components/PatientCard'
import { db } from '../firebase'

export default function Patients({docKey}) {
    console.log(docKey)
    //const [docKey,setDocKey]=React.useState(null)
    const [loading,setLoading]=React.useState(true)
    const [patients,setPatients]=React.useState([])
  
    const getPatients=()=>{
        fetch(`http://151.106.113.197/get-patient-data?key=${docKey}`).then(res=>res.json()).then(data=>{
            console.log(data)
            data.forEach(a=>{
                setPatients(prev=>[...prev,a])
            })
            setLoading(false)
        })
    }
    React.useEffect(()=>{
        getPatients()
    },[])
    return (
        <Box>
        {!loading && <Box> 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"30vh",backgroundColor:"#ff4081"}}>
                    <Typography variant="h3" sx={{color:"#f4f4f4",width:"80vw",textAlign:"center",marginBottom:"3vh"}}>
                     Patients
                    </Typography>
                </Box>
                <Box sx={{width:"90vw",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginBottom:{xs:"10vh",md:"0"},marginTop:"-10vh"}}>
        
                    {patients.map(item=>(<PatientCard data={item} key={item.id}/>))}
                </Box> 
            
            </Box>
        </Box>}
        {loading && <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress /><Typography>Loading Patient Data.... </Typography></Box>}
        </Box>
        )
}
