import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { convertMoney, getOrderNumber } from '../helpers';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddNewTransactionDialog({ setAddNewTrOpen, isAddNewTrOpen, addToCart, items }) {
  const [type, setType] = React.useState("Withdrawal");
  const [status, setStatus] = React.useState("Pending");
  const [amount, setAmount] = React.useState(11);
  const [clientname, setClientname] = React.useState("Max");

  const newTr = {
    transactionid: getOrderNumber(items),
    status,
    type,
    clientname,
    amount: convertMoney(amount),
  }

  const handleClose = (e) => {   
    if (e.target.firstChild.data === "Agree") {
      
      addToCart(newTr)
      window.location.reload()
    }
    setAddNewTrOpen(false)
  }

  return (
    <div>
      <Dialog
        open={isAddNewTrOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle align='center'>New trasaction</DialogTitle>
        <DialogContent>
          <Stack gap={2}>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <InputLabel id="type">Type</InputLabel>
              <Select
                labelId="type"
                id="type"
                value={type}
                label="Type"
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={"Withdrawal"}>Withdrawal</MenuItem>
                <MenuItem value={"Refill"}>Refill</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <InputLabel id="type">Status</InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  value={status}
                  label="Status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={"Pending"}>Pending</MenuItem>
                  <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
                  <MenuItem value={"Completed"}>Completed</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
              <TextField 
                id="clientname"
                label="Client Name" 
                variant="outlined"
                onChange={(e) => setClientname(e.target.value)}
                value={clientname}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
            <TextField
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              label="Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleClose(e)}>Disagree</Button>
          <Button onClick={(e) => handleClose(e)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
