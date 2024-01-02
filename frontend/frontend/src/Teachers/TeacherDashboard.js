import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Drawer from './Drawer';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleCreateCourseClick = () => {
    navigate('/createcourse');
  };

  const handleUpdateCourseClick = () => {
    // Navigate to the route for creating a course
    navigate('/updatecourse');
  };

  const handleCreateThreadClick = () => {
    // Navigate to the route for creating a course
    navigate('/createthread');
  };

  const handleUpdateThreadClick = () => {
    // Navigate to the route for creating a course
    navigate('/updatethread');
  };

  const handleLogoutClick = () => {
    // Navigate to the route for creating a course
    navigate('/');
  };

  return (
    <Grid container display="flex" flexDirection= "column" justifyContent="center"  alignItems= "center" >
    <Typography><h2>Teacher Dashboard</h2></Typography>
    <Drawer />
    <Box sx={{ bgcolor: 'grey', width:'100%' , display: 'flex', flexDirection:'column',
    justifyContent: 'space-between', alignItems: 'center',
     borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
      <Box>
      <Button
        variant="contained"
        sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
        onClick={handleCreateCourseClick}
      >
        Create Course
      </Button>

      <Button
        variant="contained"
        sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
        onClick={handleUpdateCourseClick}>
        Update Course
      </Button>
      </Box>
      <br />
      <Box>
      <Button variant="contained"
        sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
        onClick={handleCreateThreadClick}>
        Create Thread
      </Button>

      <Button variant="contained"
        sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
        onClick={handleUpdateThreadClick}>
        Update Thread
      </Button>
      </Box>
      <br />
       <Button variant="contained"
        sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
        onClick={handleLogoutClick}>
        Log Out
      </Button> 
    </Box>
    </Grid>
    
  )
}
export default TeacherDashboard


