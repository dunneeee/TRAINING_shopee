import { Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from './Dashboard';
import { Fragment } from 'react';
import { MenuSlider, MenuSliderItem } from '../components';
import Orders from './Orders';
import Downloads from './Downloads';
import Address from './Address';
import AccountDetail from './AccountDetail';

const NAVMENUITEMS: MenuSliderItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    to: 'dashboard',
  },
  {
    id: 2,
    label: 'Orders',
    to: 'orders',
  },
  {
    id: 3,
    label: 'Downloads',
    to: 'downloads',
  },
  {
    id: 4,
    label: 'Addresses',
    to: 'addresses',
  },
  {
    id: 5,
    label: 'Account Details',
    to: 'account-details',
  },
];

export const AccountRoutes = () => {
  return (
    <Fragment>
      <MenuSlider items={NAVMENUITEMS} className="wrapper mb-10" />
      <Routes>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/addresses" element={<Address />} />
        <Route path="/account-details" element={<AccountDetail />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    </Fragment>
  );
};
