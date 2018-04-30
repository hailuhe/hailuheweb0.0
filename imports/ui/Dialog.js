import React ,{ Fragment, Component} from 'react';
import { Dialog, Button} from 'material-ui';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';

// import AddIcon from '@material-ui/icons/Add';
// import {Add} from '@material-ui/icons';


export default class extends Component {
    state = {
        open : false
    }
    handleToggle =()=> {
        this.setState({
          open: !this.state.open
        })
    }
    render() {
        const { open } = this.state

        return <Fragment>
            {/* <Button variant="fab" onClick={this.handleToggle}  mini>
            <AddIcon />
            </Button> */}
            <Button color="inherit" onClick={this.handleToggle} >Login</Button>
           <Dialog
              open={open}
              onClose={this.handleToggle}
             
            >
              <DialogTitle id="form-dialog-title">
              Create an new Exercises
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill out the form below.
                </DialogContentText>
                <form>
                </form>
              </DialogContent>
              <DialogActions>
                <Button color="primary" variant="raised">
                  Create
                </Button>
                {/* <Button onClick={this.handleClose} color="primary">
                  Subscribe
                </Button> */}
              </DialogActions>
            </Dialog>
    </Fragment>
    }
} 
