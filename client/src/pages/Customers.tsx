import React from 'react';
import { Box, DialogTitle } from '@mui/material';
import CustomerTable from '../components/CustomerTable';
import Drawer from '../components/Drawer';

export default function Customers(): JSX.Element {
  return (
    <Box sx={{ p: 1 }}>
      <Drawer />
      <DialogTitle>Clientes</DialogTitle>
      <CustomerTable />
    </Box>
  );
}
