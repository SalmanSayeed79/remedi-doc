import React from 'react'
import {Box,Typography,Avatar,Toolbar,IconButton,Button} from "@mui/material"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function Home() {
    const [tabIndex,setTabIndex]=React.useState(1)
    const tabChange=(event,newValue)=>{
        setTabIndex(newValue)
    }
    return (
        <Box > 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt="Aslam Miah"  src="/static/images/avatar/1.jpg" sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"},bgcolor:"#ff80ab"}}/>
                <Typography variant="h5">Aslam Miah</Typography>
                <Typography variant="p" color="#8f8f8f">Rd No 13 , Dhanmondi</Typography>
                <Typography variant="h5"></Typography>
            </Box> 
            <Box sx={{width:"80vw",height:"20vh",border:"1px solid #ff4081",borderRadius:"1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <Typography variant="h3" color="primary">Dermaitis</Typography>
              <Typography variant="p" fontFamily="Bree Serif">Started Treatment : 25 Mar 2018</Typography>
            </Box>
            <Box sx={{ width: "80vw", typography: 'body1' }}>
            <TabContext value={tabIndex}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={tabChange} aria-label="lab API tabs example" variant="scrollable">
                  <Tab label="Basic Information" value="1" wrapped/>
                  <Tab label="Previous Tests" value="2" wrapped/>
                  <Tab label="Take Actions" value="3" wrapped/>
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Typography variant="p">Age : 36yrs</Typography>
                    <Typography variant="p">Height : 1.7m</Typography>
                    <Typography variant="p">Weight : 68kg</Typography>
                    <Typography variant="p">Gender : Male</Typography>
                    <Typography variant="p">Address : Dhanmondi,Dhaka 1209</Typography>
                </Box>
              </TabPanel>
              <TabPanel value="2">
                Tests :
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Blood Sugar Level</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{display:"flex"}}>

                  <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary"/>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box>
                            <Typography color="primary">Mar 20,2021</Typography>
                            <Typography>100 mg/dL</Typography>
                        </Box>
                        
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box>
                            <Typography color="primary">Mar 20,2021</Typography>
                            <Typography>100 mg/dL</Typography>
                        </Box>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box>
                            <Typography color="primary">Mar 20,2021</Typography>
                            <Typography>100 mg/dL</Typography>
                        </Box>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>


                  </Box>
                </AccordionDetails>
              </Accordion>
              </TabPanel>
              <TabPanel value="3">
                <Box sx={{width:"80vw",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Call Patient</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Set Appointment</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Create Test</Typography></Button>
                    <Button variant="contained" fullWidth sx={{marginBottom:"1vh"}} size="large"><Typography variant="h6">Set Physical Visit</Typography></Button>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
            </Box>
        </Box>
    )
}
