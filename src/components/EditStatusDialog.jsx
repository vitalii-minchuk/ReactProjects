import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Divider, Stack } from '@mui/material';

const status = ['Pending', 'Completed', 'Cancelled'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open, data, saveStatusHandler, openEditUserDialog } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {

    saveStatusHandler({...openEditUserDialog, status: value})
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle align='center'>transaction #{data.id}</DialogTitle>
      <Stack p={1} my={2} mx={2}>
        <Stack direction="row" alignItems="end" justifyContent="space-between">
          <Typography variant='subtitle1'>Client Name: </Typography>
          <Typography variant='h6'>{data.clientname}</Typography>
        </Stack>
        <Stack direction="row" alignItems="end" justifyContent="space-between">
          <Typography variant='subtitle1'>Amount: </Typography>
          <Typography variant='subtitle1'>{data.amount}</Typography>
        </Stack>
        <Stack direction="row" alignItems="end" justifyContent="space-between">
          <Typography variant='subtitle1'>Type: </Typography>
          <Typography variant='subtitle1'>{data.type}</Typography>
        </Stack>
        <Divider />
        <Typography align='center' variant='subtitle1' p={2}>Would you like to change current status "{data.status}" ?</Typography>
        <Divider />
      </Stack>
      <List sx={{ pt: 0 }}>
        {status.filter(el => el !== data.status).map((el) => (
          <ListItem alignItems='center' button onClick={() => handleListItemClick(el)} key={el}>
            <ListItemText primary={el} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function EditStatusDialog({ openEditUserDialog, saveStatusHandler }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(status[1]);

  React.useEffect(() => {
    if (openEditUserDialog.id) {
      setOpen(true)
    }
  }, [openEditUserDialog.id])

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        data={openEditUserDialog}
        openEditUserDialog={openEditUserDialog}
        saveStatusHandler={saveStatusHandler}
      />
    </div>
  );
}
