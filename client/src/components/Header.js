import React from "react";
import { Link } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




export default props =>
    <div>
      
        <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton> */}
          <Col>
          <Typography variant="h6" >
            Multistate Tax Commission State Contact Portal
          </Typography>
          </Col>
          <Col>
            <Link to={'/register'}>Register</Link>
          </Col>
          
        </Toolbar>
      </AppBar>
      
    </div>
