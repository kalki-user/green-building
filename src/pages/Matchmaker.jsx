import React, { useState } from 'react';
import { Compass, Leaf, Target, ArrowRight, Construction, ThermometerSnowflake, Sun, CloudRain, Wind, DollarSign, Hammer, ShieldCheck, Award } from 'lucide-react';
import './Techniques.css';

const Matchmaker = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    climate: '',
    budget: '',
    skill: ''
  });

  const climateOptions = [
    { id: 'arid', label: 'Arid / Desert', icon: <Sun />, desc: 'Hot days, cold nights, low humidity' },
    { id: 'tropical', label: 'Tropical / Humid', icon: <CloudRain />, desc: 'High humidity, heavy rainfall, high temps' },
    { id: 'cold', label: 'Cold / Alpine', icon: <ThermometerSnowflake />, desc: 'Freezing winters, high insulation needs' },
    { id: 'temperate', label: 'Temperate', icon: <Wind />, desc: 'Moderate seasonal variations' }
  ];

  const budgetOptions = [
    { id: 'low', label: 'Economic', icon: <DollarSign size={18} />, desc: 'Maximize local soil & labor' },
    { id: 'mid', label: 'Balanced', icon: <><DollarSign size={18} /><DollarSign size={18} /></>, desc: 'Optimized performance & cost' },
    { id: 'high', label: 'High-Performance', icon: <><DollarSign size={18} /><DollarSign size={18} /><DollarSign size={18} /></>, desc: 'State-of-the-art sustainability' }
  ];

  const skillOptions = [
    { id: 'local', label: 'Local Mason', icon: <Hammer />, desc: 'Traditional construction skills' },
    { id: 'specialist', label: 'Specialized Team', icon: <ShieldCheck />, desc: 'Modern green building experts' },
    { id: 'diy', label: 'Advanced DIY', icon: <Award />, desc: 'Owner-builder friendly methods' }
  ];

  const getRecommendation = () => {
    const { climate, budget, skill } = selections;
    
    if (climate === 'arid') {
      if (budget === 'low') return { material: 'Cob Construction', technique: 'Arches & Vaults', reason: 'Zero material cost using local subsoil; vaults eliminate expensive steel lintels.' };
      return { material: 'Rammed Earth', technique: 'Night Purge Ventilation', reason: 'High thermal mass regulates temperature swings; specialist labor ensures structural precision.' };
    }
    
    if (climate === 'tropical') {
      if (skill === 'local') return { material: 'Bamboo', technique: 'Passive Solar Shading', reason: 'Uses local artisanal skills with rapidly renewable, breathable materials.' };
      return { material: 'Cross-Laminated Timber (CLT)', technique: 'Modular Prefab', reason: 'Factory precision prevents humidity damage during construction; extremely fast build.' };
    }

    if (climate === 'cold') {
      return { material: 'Hempcrete', technique: 'Straw Bale Insulation', reason: 'World-class R-value insulation that keeps heat in while sequestering carbon.' };
    }

    // Default Temperate / Balanced
    return { material: 'Stabilized Mud Blocks (SMB)', technique: 'Rat-Trap Bond', reason: 'Saves 25% material while maintaining superior thermal performance for moderate zones.' };
  };

  const handleNext = (key, value) => {
    setSelections({ ...selections, [key]: value });
    setStep(step + 1);
  };

  const recommendation = step === 4 ? getRecommendation() : null;

  return (
    <div className="edu-page animate-fade-in">
      <div className="edu-hero gradient-bg" style={{ background: 'linear-gradient(135deg, #1a3a32, #c36a42)', padding: 'clamp(2rem, 10vw, 4rem) 1rem' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', marginBottom: '1rem' }}>Green Matchmaker</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', opacity: 0.9 }}>
            Our advanced algorithm matches your climate, budget, and labor constraints to the perfect green building strategy.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(2rem, 8vw, 4rem) 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
           
           {/* Progress Indicator */}
           <div style={{ display: 'flex', gap: '10px', marginBottom: '3rem', justifyContent: 'center' }}>
              {[1, 2, 3, 4].map(s => (
                 <div key={s} style={{ 
                    width: 'clamp(30px, 8vw, 60px)', height: '6px', borderRadius: '3px',
                    backgroundColor: step >= s ? 'var(--color-primary)' : 'var(--color-border)',
                    transition: 'all 0.4s ease'
                 }}></div>
              ))}
           </div>

           <div className="glass-elite" style={{ padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '32px' }}>
              
              {step === 1 && (
                 <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Project Climate</h2>
                    <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Environmental context is the foundation of every sustainable choice.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem' }}>
                       {climateOptions.map(opt => (
                          <div key={opt.id} onClick={() => handleNext('climate', opt.id)} className="hover-card" style={{ padding: '2rem 1rem', borderRadius: '24px', border: '1px solid var(--color-border)', cursor: 'pointer', transition: 'all 0.3s' }}>
                             <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>{opt.icon}</div>
                             <h4 style={{ marginBottom: '0.5rem' }}>{opt.label}</h4>
                             <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{opt.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              )}

              {step === 2 && (
                 <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Budget Priority</h2>
                    <p style={{ opacity: 0.6, marginBottom: '3rem' }}>How should we optimize the financial impact of your build?</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                       {budgetOptions.map(opt => (
                          <div key={opt.id} onClick={() => handleNext('budget', opt.id)} className="hover-card" style={{ padding: '2.5rem 1.5rem', borderRadius: '24px', border: '1px solid var(--color-border)', cursor: 'pointer', transition: 'all 0.3s' }}>
                             <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{opt.icon}</div>
                             <h4 style={{ marginBottom: '0.5rem' }}>{opt.label}</h4>
                             <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{opt.desc}</p>
                          </div>
                       ))}
                    </div>
                    <button onClick={() => setStep(1)} style={{ marginTop: '3rem', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5 }}>Back to Climate</button>
                 </div>
              )}

              {step === 3 && (
                 <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Available Labor</h2>
                    <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Who will be executing the technical construction on-site?</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                       {skillOptions.map(opt => (
                          <div key={opt.id} onClick={() => handleNext('skill', opt.id)} className="hover-card" style={{ padding: '2.5rem 1.5rem', borderRadius: '24px', border: '1px solid var(--color-border)', cursor: 'pointer', transition: 'all 0.3s' }}>
                             <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{opt.icon}</div>
                             <h4 style={{ marginBottom: '0.5rem' }}>{opt.label}</h4>
                             <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{opt.desc}</p>
                          </div>
                       ))}
                    </div>
                    <button onClick={() => setStep(2)} style={{ marginTop: '3rem', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5 }}>Back to Budget</button>
                 </div>
              )}

              {step === 4 && recommendation && (
                 <div className="animate-fade-in">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                       <Target />
                       <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Strategic Analysis Complete</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '2.5rem', lineHeight: '1.2' }}>The Sustainable <br /><span style={{ color: 'var(--color-primary)' }}>Architecture Blueprint</span></h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                       <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px', borderLeft: '6px solid var(--color-primary)' }}>
                          <h4 style={{ opacity: 0.5, fontSize: '0.7rem', marginBottom: '0.5rem' }}>CORE MATERIAL</h4>
                          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{recommendation.material}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                            View Technical Specs <ArrowRight size={16} />
                          </div>
                       </div>
                       <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px', borderLeft: '6px solid var(--color-secondary)' }}>
                          <h4 style={{ opacity: 0.5, fontSize: '0.7rem', marginBottom: '0.5rem' }}>STRUCTURAL TECHNIQUE</h4>
                          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{recommendation.technique}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>
                            View Implementation <ArrowRight size={16} />
                          </div>
                       </div>
                    </div>

                    <div style={{ backgroundColor: 'var(--color-bg)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                       <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05 }}><Construction size={180} /></div>
                       <h4 style={{ marginBottom: '1.2rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <ShieldCheck size={20} /> Rational Alignment
                       </h4>
                       <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: '1.7', maxWidth: '750px', position: 'relative', zIndex: 1 }}>{recommendation.reason}</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem' }}>
                       <button onClick={() => setStep(1)} style={{ padding: '18px 40px', borderRadius: '40px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, flex: 1, minWidth: '200px' }}>
                          Start New Analysis
                       </button>
                       <button onClick={() => window.print()} className="glass" style={{ padding: '18px 40px', borderRadius: '40px', cursor: 'pointer', fontWeight: 600, flex: 1, minWidth: '200px' }}>
                          Print Report
                       </button>
                    </div>
                 </div>
              )}

           </div>

        </div>
      </div>
    </div>
  );
};

export default Matchmaker;
