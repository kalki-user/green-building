import { ArrowRight, BookOpen, Layers, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Encyclopedia of <br />
              <span className="gradient-text">Sustainable Construction</span>
            </h1>
            <p className="hero-subtitle">
              A purely educational platform dedicated to cataloging the materials and construction techniques essential for green building and eco-friendly architecture.
            </p>
            <div className="hero-actions">
              <Link to="/materials" className="btn btn-primary">
                Explore Materials <BookOpen size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/techniques" className="btn btn-outline" style={{ background: 'white' }}>
                Study Techniques <Layers size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <div className="hero-abstract-art glass" style={{ backgroundImage: `url(/sustainable_green_home_1776703098915.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="tech-overlay" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2 }}></div>
             </div>
          </div>
        </div>
      </section>

      {/* Editor's Choice: The Best Approach */}
      <section className="best-section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.5rem', borderRadius: '30px', marginBottom: '1.5rem' }}>
              <Star color="var(--color-accent)" fill="var(--color-accent)" size={20} />
              <span style={{ fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>The Ultimate Recommendation</span>
            </div>
            <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>The &quot;Best&quot; Holistic Strategy</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.8 }}>
              There is no single magic material. However, combining three key elements creates what architects consider the ultimate, bulletproof approach to sustainable home building in almost any climate:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--rounded-lg)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Passive Solar Design</h3>
              <p style={{ opacity: 0.9 }}><strong>The best technique:</strong> Structural orientation to leverage the sun drastically eliminates the lifelong operational carbon cost (HVAC bills) of the building without needing expensive technology.</p>
            </div>
            
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--rounded-lg)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Rammed Earth Walls</h3>
              <p style={{ opacity: 0.9 }}><strong>The best material:</strong> Unlike timber or modern concrete, compressed earth guarantees centuries of fire-proof durability, zero carbon emissions in production, and perfect thermal mass to accompany Passive Solar heating.</p>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--rounded-lg)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Rainwater & Greywater</h3>
              <p style={{ opacity: 0.9 }}><strong>The best integration:</strong> True sustainability means autonomy. Pairing structural elements with deep-cistern rainwater harvesting completely insulates the home from urban municipal water droughts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Modules */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore the Database</h2>
            <p className="text-muted">Master the fundamentals of eco-friendly building without the noise.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-wrapper bg-terracotta">
                <BookOpen size={24} color="white" />
              </div>
              <h3>Raw Materials (13 Items)</h3>
              <p>Learn about naturally sourced, low net-carbon materials ranging from compacted earth and bamboo to recycled composites.</p>
              <Link to="/materials" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Browse Materials <ArrowRight size={16} /></Link>
            </div>
            
            <div className="feature-card">
              <div className="icon-wrapper bg-green">
                <Layers size={24} color="white" />
              </div>
              <h3>Construction Techniques (13 Items)</h3>
              <p>Study the exact architectural layouts and physical construction methods such as filler slabs, rat-trap bonds, and arches.</p>
               <Link to="/techniques" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>Browse Techniques <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
