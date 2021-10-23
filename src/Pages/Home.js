import React from 'react'
import {Box,Typography,AppBar,Toolbar,IconButton,Paper} from "@mui/material"

export default function Home() {

    return (
        <Box > 
        
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
