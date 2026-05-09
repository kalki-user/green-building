import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0 2rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <Link to="/" className="nav-logo" style={{ color: 'white', marginBottom: '1rem', display: 'flex' }}>
            <Leaf className="logo-icon" size={24} color="var(--color-accent)" />
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>EcoNirmithi</span>
          </Link>
          <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: '250px' }}>
            Promoting Cost-Effective and Environment-Friendly construction methodologies.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/essentials">Essentials</Link></li>
            <li><Link to="/ratings">Ratings</Link></li>
            <li><Link to="/matchmaker">Eco Matchmaker</Link></li>
            <li><Link to="/calculator">Carbon Calculator</Link></li>
            <li><Link to="/glossary">Technical Glossary</Link></li>
            <li><Link to="/quiz">Green Pro Quiz</Link></li>
            <li><Link to="/materials">Materials</Link></li>
            <li><Link to="/techniques">Techniques</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Contact</h4>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>info@econirmithi.org</p>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>+91 90000 00000</p>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
        &copy; {new Date().getFullYear()} EcoNirmithi - Green Building Knowledge Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
