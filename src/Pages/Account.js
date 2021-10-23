import React,{useState,useEffect} from 'react'
import { Typography,Box,Avatar,Button, TextField } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PreviewIcon from '@mui/icons-material/Preview';
import DetailsIcon from '@mui/icons-material/Details';
import { auth,db } from '../firebase';
import { AuthContext } from '../App';
import { SettingsSuggestRounded } from '@mui/icons-material';
export default function Account() {
    const [showAccountInformation,setShowAccountInformation]=useState(false)
    const [showPrevOrders,setShowPrevOrders]=useState(false)
    const [showCurrentOrders,setShowCurrentOrders]=useState(false)
    const [showChangePassword,setShowChangePassword]=useState(false)
    const [showChangeDetails,setShowChangeDetails]=useState(false)
    const [user,setUser]=useState(null)
    const getUser=()=>{
        auth.onAuthStateChanged(user=>{
            console.log(user.email)
            setUser(user)
        }).then(user=>{
            db.collection("doctors").doc(user).get().then(data=>console.log(data))
        })
    }
    const logout=()=>{
        auth.signOut()
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>Your Account</Typography>
            <Typography variant="p"   sx={{marginBottom:"1rem"}}>Your account information</Typography>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt="Salman Sayeed" src="/static/images/avatar/1.jpg" sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"}}}/>
                <Typography variant="h5">Salman Sayeed</Typography>
                <Typography variant="p" color="#8f8f8f">Rd No 13 , Dhanmondi</Typography>
                <Typography variant="h5"></Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",marginBottom:{xs:"8vh",md:"0"}}}>
                {/**Account Information */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>setShowAccountInformation(!showAccountInformation)}>
                    <InfoIcon />
                    Your account information
                </Button>
                {showAccountInformation && 
                    <Box sx={{backgroundColor:"#ff4081",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #ff4081",padding:"1rem 0"}}>
                        
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>First Name : Salman</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Last Name : Sayeed</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Phone Number  : 01521561688</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Region  : 13</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Area  : Dhanmondi</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Zone  : Kalabagan (15)</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>City  : Dhaka</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Gender : Male</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Email : salmansayeed5345@gmail.com</Typography>
                
                    </Box>
                }
                {/**Change Password */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>{setShowChangePassword(!showChangePassword)}}>
                    <VpnKeyIcon/>
                    Change Password
                </Button>
                {showChangePassword && 
                    <Box sx={{backgroundColor:"#ff4081",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #ff4081",padding:"1rem 0"}}>
                        <Typography variant="h5" sx={{margin:"1rem 0"}} color="#f4f4f4">Change Password</Typography>
                        <Box sx={{width:"75vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <TextField type="password" fullWidth placeholder="Current Password" sx={{backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField type="password" fullWidth placeholder="New Password" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField type="password" fullWidth placeholder="Confirm New Password" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <Button variant="contained" sx={{marginTop:"1rem"}}>Change Password</Button>
                        </Box>
                    </Box>
                }
                {/**Change Details */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>{setShowChangeDetails(!showChangeDetails)}}>
                    <DetailsIcon/>
                    Change Your Details
                </Button>
                {/**Log Out */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={logout}>
                    <PreviewIcon/>
                    Log Out
                </Button>
                {showChangeDetails && 
                    <Box sx={{backgroundColor:"#ff4081",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #ff4081",padding:"1rem 0"}}>
                        <Typography variant="h5" sx={{margin:"1rem 0",textAlign:"center"}} color="#f4f4f4">Change Account Information</Typography>
                        <Box sx={{width:"75vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <TextField fullWidth placeholder="First Name" sx={{backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Last Name" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Phone Number" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Region" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Area" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Zone" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="City" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Gender" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Email" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <Button variant="contained"  sx={{marginTop:"1rem"}}>Change Details</Button>
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    

    )
}
