import React,{useState,useEffect} from 'react'
import { Typography,Box,Avatar,Button, TextField,CircularProgress } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PreviewIcon from '@mui/icons-material/Preview';
import DetailsIcon from '@mui/icons-material/Details';
import { auth,db } from '../firebase';
import { AuthContext } from '../App';
import { SettingsSuggestRounded } from '@mui/icons-material';
export default function Account(props) {
    const [showAccountInformation,setShowAccountInformation]=useState(false)
    const [showPrevOrders,setShowPrevOrders]=useState(false)
    const [showCurrentOrders,setShowCurrentOrders]=useState(false)
    const [showChangePassword,setShowChangePassword]=useState(false)
    const [showChangeDetails,setShowChangeDetails]=useState(false)
    const [userData,setUserData]=useState(null)
    const [loading,setLoading]=useState(true)
    const getData=()=>{
        console.log(props.acc)

        db.collection("doctors").doc(props.acc).get().then(doc=>{
            if(doc.exists){
                console.log(doc.data())
                setUserData(doc.data())
                setLoading(false)
            }
        })
    }
    const logout=()=>{
        auth.signOut()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Box >
            {!loading && <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
        <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>Your Account</Typography>
            <Typography variant="p"   sx={{marginBottom:"1rem"}}>Your account information</Typography>
            {userData && <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt={userData.name} src="/static/images/avatar/1.jpg" sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"}}}/>
                <Typography variant="h5">{userData.name}</Typography>
                <Typography variant="p" color="#8f8f8f">{userData.specilization}</Typography>
                <Typography variant="h5"></Typography>
            </Box>}
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",marginBottom:{xs:"8vh",md:"0"}}}>
                {/**Account Information */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>setShowAccountInformation(!showAccountInformation)}>
                    <InfoIcon />
                    Your account information
                </Button>
                {showAccountInformation && userData &&
                    <Box sx={{backgroundColor:"#ff4081",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #ff4081",padding:"1rem 0"}}>
                        
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Name : {userData.name}</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Phone Number  : +8801521561688</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Specilization  : {userData.specilization}</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Borough  : {userData.borough}</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Address  : {userData.address}</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Zip Code  : {userData.zip}</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Gender : Male</Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Email : {userData.email}</Typography>
                
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
            </Box>}
            {loading && <Box sx={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress /><Typography>Loading .... </Typography></Box>}
        </Box>
    

    )
}
