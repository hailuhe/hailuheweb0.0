import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SimpleMenu from './MenusButton.js';
import CreateDialog from './Dialog.js';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar() {
  
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <SimpleMenu  style={styles}/>
          <Typography variant="title" color="inherit" style={styles.flex}>
            何海路是个陀螺
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <CreateDialog/>
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default ButtonAppBar;
