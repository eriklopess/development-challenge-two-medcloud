/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomerTable from '../components/CustomerTable';
import Drawer from '../components/Drawer';

const styles = {
  display: 'flex',
  width: '95%',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 'auto',
  '& .MuiTextField-root': {
    m: 1,
    width: '25ch',
  },
  '& .MuiButton-root': {
    m: 1,
    width: '25ch',
  },
};

export default function Customers(): JSX.Element {
  const [createFields, setCreateFields] = useState({
    name: '',
    email: '',
    address: '',
    birthDate: '',
  });
  const [open, setOpen] = useState(false);
  const handleCreateCustomer = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    console.log('create customer');
  };
  const [value, setValue] = React.useState<Dayjs | null>();

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 1 }}>
      <Drawer />
      <Box sx={{ pl: 2, display: 'flex' }}>
        <DialogTitle>Clientes</DialogTitle>
        <IconButton onClick={handleCreateCustomer}>
          <AddCircleIcon />
        </IconButton>
      </Box>
      {
        open && (
          <Box
            component="form"
            autoComplete="off"
            sx={styles}
          >
            <TextField
              required
              label="Nome"
            />
            <TextField
              required
              label="Email"
            />
            <TextField
              required
              label="Endereço"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Data de Nascimento"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="contained" color="error">Criar</Button>
          </Box>
        )
      }
      <CustomerTable />
    </Box>
  );
}
