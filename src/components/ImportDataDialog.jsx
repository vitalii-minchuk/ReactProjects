import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { LinearProgress } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImportDataDialog({ open, items }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        {items?.length > 0 ? (
          <>
                  <DialogTitle>Loading data...</DialogTitle>

            <DialogContent>
              <LinearProgress />

              <DialogContentText id="alert-dialog-slide-description">
                
                We apologize for the delay, our server has some limits regarding queries per second,
                but we are trying to resolve the problem ASAP
              </DialogContentText>
              <DialogContentText id="alert-dialog-slide-description">
                You can stop this process by reloading the page,
                 but in this case you have only some data to work with
              </DialogContentText>
            </DialogContent>
          </>

        ) : (
          <DialogTitle>Please reload the page</DialogTitle>
        )

        }

      </Dialog>
    </div>
  );
}
