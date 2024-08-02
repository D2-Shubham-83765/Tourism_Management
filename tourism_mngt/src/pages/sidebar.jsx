
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBox, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Manager Dashboard</h2>
      <ul>
        <li>
       {/* <Link to="/manage-users"><FaUsers /> Manage Users</Link> */}
        </li>
        <li>
          {/* <Link to="/manage-packages"><FaBox /> Manage Packages</Link> */}
        </li>
        <li>
          {/* <Link to="/manage-bookings"><FaClipboardList /> Manage Bookings</Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
