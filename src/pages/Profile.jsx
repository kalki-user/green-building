import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User, Mail, ShieldCheck, Calendar, MessageSquare,
  LogOut, ArrowLeft, Leaf, BookOpen, Award, Clock
} from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/* ─── Helpers ─── */
const getInitials = (name = '') =>
  name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?';

const formatDate = (iso) => {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
};

/* ─── Stat Card ─── */
const StatCard = ({ icon: Icon, label, value, color }) => (
  <div style={{
    background: 'white',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    border: '1px solid #e8f0ec',
    boxShadow: '0 2px 12px rgba(26,58,50,0.06)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,58,50,0.12)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,58,50,0.06)'; }}
  >
    <div style={{
      width: '44px', height: '44px', borderRadius: '12px',
      background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Icon size={22} color={color} />
    </div>
    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a3a32', lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
  </div>
);

/* ─── Info Row ─── */
const InfoRow = ({ icon: Icon, label, value, badge }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '1rem',
    padding: '1rem 1.25rem', borderRadius: '12px',
    background: '#f8fbf9', border: '1px solid #e8f0ec'
  }}>
    <div style={{
      width: '38px', height: '38px', borderRadius: '10px',
      background: '#1a3a3215', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
    }}>
      <Icon size={18} color="#1a3a32" />
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
      <div style={{ fontSize: '0.95rem', color: '#2d3436', fontWeight: 600, marginTop: '2px' }}>{value}</div>
    </div>
    {badge && (
      <span style={{
        background: badge === 'admin' ? '#fef3c7' : '#d1fae5',
        color: badge === 'admin' ? '#92400e' : '#065f46',
        fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px',
        borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'
      }}>
        {badge}
      </span>
    )}
  </div>
);

/* ─── Main Component ─── */
const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('gaia_token');
  const cachedUser = localStorage.getItem('gaia_user');

  const [profile, setProfile] = useState(cachedUser ? JSON.parse(cachedUser) : null);
  const [stats, setStats] = useState({ messageCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  /* Redirect if not logged in */
  useEffect(() => {
    if (!token) { navigate('/auth'); return; }

    const headers = { Authorization: `Bearer ${token}` };

    Promise.all([
      fetch(`${API_URL}/api/profile`, { headers }).then(r => r.json()),
      fetch(`${API_URL}/api/profile/stats`, { headers }).then(r => r.json()),
    ])
      .then(([profileData, statsData]) => {
        if (profileData.error) throw new Error(profileData.error);
        setProfile(profileData);
        setStats(statsData);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('gaia_token');
    localStorage.removeItem('gaia_user');
    navigate('/auth');
    window.location.reload();
  };

  /* ─── Loading ─── */
  if (loading) return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          border: '3px solid #e8f0ec', borderTopColor: '#1a3a32',
          animation: 'spin 0.8s linear infinite', margin: '0 auto 1rem'
        }} />
        <p style={{ color: '#718096', fontWeight: 500 }}>Loading your profile…</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );

  /* ─── Error ─── */
  if (error) return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
        <h2 style={{ color: '#1a3a32', marginBottom: '0.5rem' }}>Something went wrong</h2>
        <p style={{ color: '#718096', marginBottom: '1.5rem' }}>{error}</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </div>
  );

  const joinDaysAgo = profile?.createdAt
    ? Math.floor((Date.now() - new Date(profile.createdAt)) / 86400000)
    : 0;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #f0f7f4 0%, #fdfbf7 60%)' }}>

      {/* ── Hero Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0a1412 0%, #1a3a32 60%, #2d5a4f 100%)',
        padding: '4rem 0 7rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative dots */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${80 + i * 40}px`, height: `${80 + i * 40}px`,
              borderRadius: '50%',
              border: '1px solid rgba(0,255,136,0.08)',
              top: `${10 + i * 8}%`, left: `${5 + i * 12}%`,
            }} />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginBottom: '2rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Avatar */}
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', fontWeight: 800, color: '#0a1412',
              boxShadow: '0 0 0 4px rgba(0,255,136,0.2)',
              flexShrink: 0
            }}>
              {getInitials(profile?.username)}
            </div>
            <div>
              <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '4px' }}>
                {profile?.username}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Leaf size={14} color="#00ff88" />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>EcoNirmithi Member</span>
                {profile?.role === 'admin' && (
                  <span style={{
                    background: 'rgba(244,208,63,0.15)', color: '#f4d03f',
                    fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px',
                    borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'
                  }}>
                    Admin
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cards pulled up into banner ── */}
      <div className="container" style={{ position: 'relative', marginTop: '-3.5rem', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <StatCard icon={MessageSquare} label="Questions Asked" value={stats.messageCount} color="#1a3a32" />
          <StatCard icon={Calendar} label="Days as Member" value={joinDaysAgo} color="#c36a42" />
          <StatCard icon={Award} label="Role" value={profile?.role === 'admin' ? 'Admin' : 'Member'} color="#f4d03f" />
          <StatCard icon={Clock} label="Joined" value={formatDate(profile?.createdAt).split(' ').slice(2).join(' ')} color="#2d5a4f" />
        </div>

        {/* ── Main Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
          gap: '1.5rem',
          alignItems: 'start',
          marginBottom: '3rem'
        }}>

          {/* Account Info Card */}
          <div style={{
            background: 'white', borderRadius: '20px',
            padding: '2rem', border: '1px solid #e8f0ec',
            boxShadow: '0 2px 12px rgba(26,58,50,0.06)'
          }}>
            <h2 style={{ color: '#1a3a32', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={18} color="#c36a42" /> Account Information
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <InfoRow icon={User} label="Username" value={profile?.username} />
              <InfoRow icon={Mail} label="Email Address" value={profile?.email} />
              <InfoRow icon={ShieldCheck} label="Account Role" value={profile?.role === 'admin' ? 'Administrator' : 'Standard Member'} badge={profile?.role} />
              <InfoRow icon={Calendar} label="Member Since" value={formatDate(profile?.createdAt)} />
            </div>
          </div>

          {/* Quick Links Card */}
          <div style={{
            background: 'white', borderRadius: '20px',
            padding: '2rem', border: '1px solid #e8f0ec',
            boxShadow: '0 2px 12px rgba(26,58,50,0.06)'
          }}>
            <h2 style={{ color: '#1a3a32', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="#c36a42" /> Quick Access
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Explore Materials', path: '/materials', color: '#1a3a32' },
                { label: 'Study Techniques', path: '/techniques', color: '#2d5a4f' },
                { label: 'Take the Quiz', path: '/quiz', color: '#c36a42' },
                { label: 'Glossary', path: '/glossary', color: '#718096' },
                ...(profile?.role === 'admin' ? [{ label: '⚙ Admin Dashboard', path: '/admin', color: '#92400e' }] : []),
              ].map(({ label, path, color }) => (
                <Link key={path} to={path} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.75rem 1rem', borderRadius: '10px',
                  background: '#f8fbf9', border: '1px solid #e8f0ec',
                  color, fontWeight: 600, fontSize: '0.9rem',
                  transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = color + '10'; e.currentTarget.style.borderColor = color + '30'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fbf9'; e.currentTarget.style.borderColor = '#e8f0ec'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  {label}
                  <span style={{ fontSize: '1rem' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Logout Button ── */}
        <div style={{ paddingBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleLogout}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.875rem 2rem', borderRadius: '10px',
              background: 'rgba(197,48,48,0.06)', border: '1px solid rgba(197,48,48,0.2)',
              color: '#c53030', fontWeight: 700, fontSize: '0.9rem',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(197,48,48,0.12)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(197,48,48,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <LogOut size={16} /> Sign Out of Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
