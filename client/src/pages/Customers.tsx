/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomerTable from '../components/CustomerTable';

const createCustomerBoxStyles = {
  display: 'flex',
  width: '95%',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 'auto',
  '& .MuiTextField-root, & .MuiButton-root': {
    m: 1,
    width: '25ch',
  },
};

export default function Customers(): JSX.Element {
  const [createCustomerFields, setCreateCustomerFields] = useState({
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

  const validadeEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateName = (name: string) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
  };

  const validateAddress = (address: string) => {
    const re = /^[a-zA-Z0-9 ]{2,30}$/;
    return re.test(address);
  };

  const validateDate = (date: string) => {
    const dateSplit = date.split('-');
    const year = dateSplit[0];
    const month = dateSplit[1];
    const day = dateSplit[2];
    const re = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (re.test(date)) {
      if (year >= '1900' && year <= '2020') {
        if (month >= '01' && month <= '12') {
          if (day >= '01' && day <= '31') {
            console.log('true');
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkAllFields = () => {
    const {
      name, email, address, birthDate,
    } = createCustomerFields;
    if (
      name !== ''
      && email !== ''
      && address !== ''
      && birthDate !== ''
      && validadeEmail(email)
      && validateName(name)
      && validateAddress(address)
      && validateDate(birthDate)
    ) {
      return true;
    }
    return false;
  };

  const handleChangeDate = (date: Dayjs | null) => {
    setCreateCustomerFields({
      ...createCustomerFields,
      birthDate: date?.format('YYYY-MM-DD') || '',
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setCreateCustomerFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ pl: 2, display: 'flex' }}>
        <DialogTitle>Clientes</DialogTitle>
        <IconButton onClick={handleCreateCustomer}>
          { open ? <CancelIcon /> : <AddCircleIcon />}
        </IconButton>
      </Box>
      {
        open && (
          <Box
            component="form"
            autoComplete="off"
            sx={createCustomerBoxStyles}
          >
            <TextField
              required
              label="Nome"
              name="name"
              onChange={handleChange}
            />
            <TextField
              required
              label="Email"
              name="email"
              onChange={handleChange}

            />
            <TextField
              required
              label="Endereço"
              name="address"
              onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Data de Nascimento"
                inputFormat="DD/MM/YYYY"
                onChange={handleChangeDate}
                value={createCustomerFields.birthDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button
              variant="contained"
              color={
              checkAllFields() ? 'success' : 'error'
            }
              disabled={!checkAllFields()}
            >
              Criar
            </Button>
          </Box>
        )
      }
      <CustomerTable />
    </Box>
  );
}
