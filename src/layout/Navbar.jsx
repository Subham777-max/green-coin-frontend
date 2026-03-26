import { Search, Menu } from 'lucide-react';
import useAuth from '../features/Auth/hooks/useAuth';

const Navbar = ({ toggleSidebar }) => {
    const { user } = useAuth();
  return (
    <header className="navbar">
      <div className="nav-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <h2 className="page-title">Admin Home</h2>
      </div>
      
      <div className="nav-actions">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
        <div style={{paddingBottom: "3px"}} className="profile-avatar">{ user?.name?.charAt(0)?.toUpperCase() || 'U' }</div>
      </div>
    </header>
  );
};

export default Navbar;