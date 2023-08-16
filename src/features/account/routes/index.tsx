import { Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from './Dashboard';
import { Fragment } from 'react';
import { MenuSlider, MenuSliderItem } from '../components';

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
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </Fragment>
  );
};
