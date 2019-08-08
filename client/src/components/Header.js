import React from "react";
import { NavLink } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';





export default props =>
    <div>
      
      <AppBar position="static" >
        <Toolbar className="App_Bar">
          
          <Typography variant="h6" >
            Multistate Tax Commission State Contact Portal
          </Typography>
          <nav>
            <NavLink className="nav_Link" to="/" exact>Home</NavLink>
            <NavLink className="nav_Link" to='/register' exact>Register</NavLink>
          </nav>
                    
        </Toolbar>
      </AppBar>
      
    </div>
