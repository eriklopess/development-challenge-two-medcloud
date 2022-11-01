import { Box, DialogTitle } from '@mui/material';
import React from 'react';
import CustomerTable from '../components/CustomerTable';
import Drawer from '../components/Drawer';

export default function Customers() {
  return (
    <Box sx={{ p: 1 }}>
      <Drawer />
      <DialogTitle>Clientes</DialogTitle>
      <CustomerTable />
    </Box>
  );
}
