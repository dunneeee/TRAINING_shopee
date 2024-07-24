import { Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from './Dashboard';
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
    <div className="md:wrapper overflow-hidden">
      <div className="flex flex-wrap md:-mx-2">
        <MenuSlider
          items={NAVMENUITEMS}
          className="wrapper mb-10 w-full md:w-4/12 md:px-2 lg:w-3/12"
        />
        <div className="w-full md:w-8/12 md:px-2 lg:w-9/12">
          <Routes>
            <Route path="" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/addresses" element={<Address />} />
            <Route path="/account-details" element={<AccountDetail />} />
            <Route path="*" element={<Navigate to="." />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
