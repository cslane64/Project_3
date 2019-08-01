import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



export default props =>
    <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" >
            Multistate Tax Commission State Contact Portal
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
