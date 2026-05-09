import React, { useState, useEffect } from 'react';
import { Users, Mail, Shield, Calendar, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('gaia_token');
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      try {
        const response = await fetch(`${apiUrl}/api/admin/users`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.ok) throw new Error('Unauthorized or Server Error');
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center', color: 'white' }}>Loading Users...</div>;
  if (error) return <div style={{ padding: '100px', textAlign: 'center', color: '#ff6b6b' }}>Error: {error}</div>;

  return (
    <div className="edu-page animate-fade-in" style={{ padding: '100px 20px' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '3rem' }}>
           <div style={{ backgroundColor: 'var(--color-primary)', padding: '12px', borderRadius: '12px' }}>
              <Users color="white" size={32} />
           </div>
           <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>Admin Dashboard</h1>
              <p style={{ opacity: 0.6 }}>Manage users and access control</p>
           </div>
        </div>

        <div className="glass-elite" style={{ padding: '2rem', borderRadius: '24px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '15px', opacity: 0.5 }}>USER</th>
                <th style={{ padding: '15px', opacity: 0.5 }}>EMAIL</th>
                <th style={{ padding: '15px', opacity: 0.5 }}>ROLE</th>
                <th style={{ padding: '15px', opacity: 0.5 }}>JOINED</th>
                <th style={{ padding: '15px', opacity: 0.5 }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '20px 15px' }}>
                    <div style={{ fontWeight: 700 }}>{user.username}</div>
                  </td>
                  <td style={{ padding: '20px 15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.7 }}>
                       <Mail size={14} /> {user.email}
                    </div>
                  </td>
                  <td style={{ padding: '20px 15px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '20px', 
                      fontSize: '0.75rem', 
                      fontWeight: 800,
                      backgroundColor: user.role === 'admin' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255,255,255,0.05)',
                      color: user.role === 'admin' ? '#00ff88' : 'white'
                    }}>
                      {user.role.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '20px 15px', opacity: 0.5, fontSize: '0.9rem' }}>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '20px 15px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', opacity: 0.5 }}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
