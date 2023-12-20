import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Drawer from './Drawer';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleCreateCourseClick = () => {
    // Navigate to the route for creating a course
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
    
  );
}

export default TeacherDashboard;


// import React from 'react';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { useNavigate } from 'react-router-dom';

// const TeacherDashboard = () => {
//   const navigate = useNavigate();

//   const handleCreateCourseClick = () => {
//     navigate('/createcourse');
//   };

//   const handleUpdateCourseClick = () => {
//     navigate('/updatecourse');
//   };

//   const handleCreateThreadClick = () => {
//     navigate('/createthread');
//   };

//   const handleUpdateThreadClick = () => {
//     navigate('/updatethread');
//   };

//   const handleLogoutClick = () => {
//     navigate('/logout');
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleCreateCourseClick}
//         >
//           Create Course
//         </Button>

//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleUpdateCourseClick}
//         >
//           Update Course
//         </Button>
//       </Box>

//       <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 2 }}>
//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleCreateThreadClick}
//         >
//           Create Thread
//         </Button>

//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleUpdateThreadClick}
//         >
//           Update Thread
//         </Button>
//       </Box>

//       <Box sx={{ marginTop: 2 }}>
//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleLogoutClick}
//         >
//           Logout
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default TeacherDashboard;


// import React from 'react';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/material';

// const TeacherDashboard = () => {
//   const navigate = useNavigate();

//   const handleCreateCourseClick = () => {
//     navigate('/createcourse');
//   };

//   const handleUpdateCourseClick = () => {
//     navigate('/updatecourse');
//   };

//   const handleCreateThreadClick = () => {
//     navigate('/createthread');
//   };

//   const handleUpdateThreadClick = () => {
//     navigate('/updatethread');
//   };

//   const handleLogoutClick = () => {
//     navigate('/logout');
//   };

//   return (

//     <Grid container justifyContent="center"  alignItems= "center" >
   
//     <Box
//       sx={{
//         bgcolor: 'grey',
//         borderWidth: 1,
//         borderColor: 'red',
//         borderStyle: 'solid',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '40vh', // Set the height to 100% of the viewport height
//         width:'100vh'
//       }}
//     >
//          <Typography>Teacher dashboard</Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleCreateCourseClick}
//         >
//           Create Course
//         </Button>

//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleUpdateCourseClick}
//         >
//           Update Course
//         </Button>
//       </Box>

//       <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 2 }}>
//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleCreateThreadClick}
//         >
//           Create Thread
//         </Button>

//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleUpdateThreadClick}
//         >
//           Update Thread
//         </Button>
//       </Box>

//       <Box sx={{ marginTop: 2 }}>
//         <Button
//           variant="contained"
//           sx={{ color: 'white', backgroundColor: 'black', borderColor: 'green' }}
//           onClick={handleLogoutClick}
//         >
//           Logout
//         </Button>
//       </Box>
//     </Box>
//     </Grid>
//   );
// }

// export default TeacherDashboard;

