import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const ResponsiveDrawer = () => {
  const navigate = useNavigate();
  
  const handleCreateCourseClick = () => {
    navigate('/createcourse');
  }

  const handleUpdateCourseClick = () => {
    navigate('/updatecourse');
  }

  const handleCreateThreadClick = () => {
    navigate('/createthread');
  }

  const handleUpdateThreadClick = () => {
    navigate('/updatethread');
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      <Box sx={{ width:'100%' , display: 'flex', flexDirection:'column',
    justifyContent: 'space-between', alignItems: 'center',
     }}> 
      
      <Button
        variant="default"
        sx={{ color: 'black'}}
        onClick={handleCreateCourseClick}
      >
       <strong>Create Course</strong> 
      </Button>
      
      <Button
        variant="default"
        sx={{ color: 'black'}}
        onClick={handleUpdateCourseClick}>
        <strong> Update Course</strong> 
      </Button>
      
      <Button
        variant="default"
        sx={{ color: 'black'}}
        onClick={handleCreateThreadClick}
      >
        <strong> Create Thread</strong> 
      </Button>
      
      <Button
        variant="default"
        sx={{ color: 'black'}}
        onClick={handleUpdateThreadClick}>
        <strong> Update Thread</strong> 
      </Button>
      
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          alignItems: 'center'
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            TEACHER DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer> 
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer