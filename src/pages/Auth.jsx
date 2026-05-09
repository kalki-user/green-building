import React, { useState } from 'react';
import { ShieldCheck, User, Lock, ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const payload = { ...formData };
      if (isLogin) delete payload.email;

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Authentication failed');

      if (isLogin) {
        localStorage.setItem('gaia_token', data.token);
        localStorage.setItem('gaia_user', JSON.stringify(data.user));
        navigate('/');
        window.location.reload();
      } else {
        setIsLogin(true);
        alert('Registration successful! Please log in.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 12px 12px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#1a202c',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8'
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '380px', backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #f1f5f9' }}>
        
        <div style={{ backgroundColor: '#1a202c', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <ShieldCheck color="white" size={24} />
        </div>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '30px' }}>
          {isLogin ? 'Access your account' : 'Join our community'}
        </p>

        {error && (
          <div style={{ backgroundColor: '#fff1f2', color: '#e11d48', padding: '10px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.85rem', fontWeight: 500 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          {!isLogin && (
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={iconStyle} />
              <input 
                type="email" 
                placeholder="Email address" 
                required
                style={inputStyle}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <User size={18} style={iconStyle} />
            <input 
              type="text" 
              placeholder="Username" 
              required
              style={inputStyle}
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          
          <div style={{ position: 'relative' }}>
            <Lock size={18} style={iconStyle} />
            <input 
              type="password" 
              placeholder="Password" 
              required
              style={inputStyle}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              padding: '12px', 
              borderRadius: '8px', 
              backgroundColor: '#1a202c', 
              color: 'white', 
              border: 'none', 
              fontWeight: 600, 
              cursor: 'pointer', 
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.95rem'
            }}
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Register')}
            <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '30px', fontSize: '0.85rem', color: '#64748b' }}>
          {isLogin ? "New here?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', color: '#1a202c', fontWeight: 700, marginLeft: '6px', cursor: 'pointer' }}
          >
            {isLogin ? 'Create one' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
