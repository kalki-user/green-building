import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Menu, X, User, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userStr = localStorage.getItem('gaia_user');
  const user = userStr ? JSON.parse(userStr) : null;
  const token = localStorage.getItem('gaia_token');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Materials', path: '/materials' },
    { name: 'Techniques', path: '/techniques' },
    { name: 'Matchmaker', path: '/matchmaker' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Glossary', path: '/glossary' },
    { name: 'Quiz', path: '/quiz' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('gaia_token');
    localStorage.removeItem('gaia_user');
    setIsMenuOpen(false);
    navigate('/auth');
    window.location.reload();
  };

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <Leaf className="logo-icon" size={24} />
          <span className="logo-text">EcoNirmithi</span>
        </Link>
        
        {/* Full Show (Desktop Links) */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          {user && user.role === 'admin' && (
            <Link to="/admin" className="nav-link admin-tag">Admin</Link>
          )}
          <div className="nav-auth-section">
            {token ? (
              <>
                <Link to="/profile" className="nav-profile-chip">
                  <span className="nav-avatar">{user?.username?.[0]?.toUpperCase() || '?'}</span>
                  <span className="nav-username">{user?.username}</span>
                </Link>
                <button className="auth-btn logout" onClick={handleLogout} title="Logout">
                  <LogOut size={16} />
                </button>
              </>
            ) : (
              <Link to="/auth" className="auth-btn login">
                <User size={16} /> Login
              </Link>
            )}
          </div>
        </div>

        {/* Menu Icon (Mobile Trigger) */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menu Style (Mobile/Tablet Overlay) */}
        <div className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
             {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {user && user.role === 'admin' && (
                <Link to="/admin" className="mobile-link admin" onClick={() => setIsMenuOpen(false)}>Admin Panel</Link>
              )}
              <div className="mobile-auth">
                 {token ? (
                    <>
                      <Link to="/profile" className="mobile-link" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.6rem', color: '#00ff88' }}>My Profile</Link>
                      <button className="auth-btn logout full" onClick={handleLogout}>Sign Out</button>
                    </>
                 ) : (
                    <Link to="/auth" className="auth-btn login full" onClick={() => setIsMenuOpen(false)}>Access Portal</Link>
                 )}
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
