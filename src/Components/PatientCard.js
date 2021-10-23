import React from 'react'
import {Paper,Box,Avatar,Typography, Divider,Button} from "@mui/material"
import { useHistory } from 'react-router-dom'
export default function PatientCard() {
    const history=useHistory()
    return (
        <Paper elevation={5} sx={{width:{xs:"80vw",md:"20vw"},minHeight:"30vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",margin:"2vh 2vw"}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",width:"18vw"}}>
                <Box sx={{display:"flex",alignItems:"center",width:{xs:"70vw",md:"18vw"},marginTop:"3vh"}}>
                    <Avatar alt="Remy Sharp"  sx={{marginRight:"1vw"}}/>
                    <Typography variant="h6">Aslam Miah</Typography>
                </Box>
                <Divider variant="middle" sx={{width:{xs:"70vw",md:"18vw"},margin:"1vh 0"}}/>
            </Box>
          
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",width:{xs:"70vw",md:"18vw"}}}>
                <Typography variant="h4">Dermatitis</Typography>
            
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",textAlign:"right",width:{xs:"70vw",md:"18vw"},marginTop:"1vh"}}>
                <Typography variant="p" sx={{fontFamily:"Bree Serif"}}>Age : 36yrs</Typography>
                <Typography variant="p" sx={{fontFamily:"Bree Serif"}}>Height : 1.7m</Typography>
                <Typography variant="p" sx={{fontFamily:"Bree Serif"}}>Weight : 68kg</Typography>
            </Box>
    
            <Button variant="contained" sx={{margin:"3vh 0"}}>
                <Typography variant="h6" onClick={()=>{history.push("/patients/test")}}>Track Patient</Typography>
            </Button>
        </Paper>
    )
}
