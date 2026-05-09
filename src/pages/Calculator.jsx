import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, Leaf, Droplets, Zap, Info, TrendingDown, BarChart3, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Techniques.css';

const MATERIAL_COEFFICIENTS = {
  standard: { carbon: 1.2, water: 450, energy: 0.4 },
  smb: { carbon: 0.15, water: 80, energy: 0.9 },
  hempcrete: { carbon: -0.2, water: 40, energy: 0.95 },
  rammed_earth: { carbon: 0.05, water: 20, energy: 0.85 },
  clt: { carbon: -0.1, water: 120, energy: 0.75 },
  bamboo: { carbon: -0.15, water: 60, energy: 0.6 }
};

const Calculator = () => {
  const [area, setArea] = useState(1000);
  const [projectType, setProjectType] = useState('residential');
  const [selectedMaterial, setSelectedMaterial] = useState('smb');

  const stats = useMemo(() => {
    const std = MATERIAL_COEFFICIENTS.standard;
    const green = MATERIAL_COEFFICIENTS[selectedMaterial];
    
    const multiplier = projectType === 'commercial' ? 1.5 : 1.0;
    const factor = area * multiplier;

    return {
      carbonSaved: Math.round((std.carbon - green.carbon) * factor),
      waterSaved: Math.round((std.water - green.water) * factor),
      efficiencyGain: Math.round((green.energy - std.energy) * 100),
      totalCarbon: Math.round(green.carbon * factor),
      totalWater: Math.round(green.water * factor)
    };
  }, [area, projectType, selectedMaterial]);

  const chartData = [
    { name: 'Carbon (kg)', Standard: 1.2 * area, Green: Math.max(0, MATERIAL_COEFFICIENTS[selectedMaterial].carbon * area) },
    { name: 'Water (KL)', Standard: 450 * (area/1000), Green: MATERIAL_COEFFICIENTS[selectedMaterial].water * (area/1000) },
    { name: 'Waste (%)', Standard: 30, Green: 5 }
  ];

  return (
    <div className="edu-page animate-fade-in">
      <div className="edu-hero gradient-bg" style={{ background: 'linear-gradient(135deg, #1a3a32, #2d3436)', padding: 'clamp(2rem, 10vw, 4rem) 1rem' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', marginBottom: '1.5rem' }}>
             <TrendingDown size={16} color="var(--color-accent)" />
             <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white', letterSpacing: '1px' }}>ENVIRONMENTAL IMPACT V2.0</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', marginBottom: '1rem' }}>Green Metrics</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', opacity: 0.9 }}>
            Professional-grade calculation of embodied carbon, water sequestration, and thermal efficiency.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'clamp(2rem, 8vw, 4rem) 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-elite" style={{ padding: '2.5rem', borderRadius: '32px' }}>
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CalcIcon size={24} color="var(--color-primary)" /> Project Inputs
            </h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 700, fontSize: '0.9rem', opacity: 0.6 }}>BUILT-UP AREA (SQ.FT)</label>
                <input 
                  type="range" min="100" max="10000" step="100" 
                  value={area} onChange={(e) => setArea(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                />
                <div style={{ textAlign: 'right', fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '10px' }}>{area} sq.ft</div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 700, fontSize: '0.9rem', opacity: 0.6 }}>PROJECT CATEGORY</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                   <button onClick={() => setProjectType('residential')} style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)', cursor: 'pointer', background: projectType === 'residential' ? 'var(--color-primary)' : 'transparent', color: projectType === 'residential' ? 'white' : 'inherit', fontWeight: 600 }}>Residential</button>
                   <button onClick={() => setProjectType('commercial')} style={{ padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)', cursor: 'pointer', background: projectType === 'commercial' ? 'var(--color-primary)' : 'transparent', color: projectType === 'commercial' ? 'white' : 'inherit', fontWeight: 600 }}>Commercial</button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 700, fontSize: '0.9rem', opacity: 0.6 }}>PRIMARY MATERIAL</label>
                <select 
                  value={selectedMaterial} 
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.05)', color: 'inherit', fontWeight: 600 }}
                >
                  <option value="smb">Stabilized Mud Blocks (SMB)</option>
                  <option value="hempcrete">Hempcrete (Carbon Negative)</option>
                  <option value="rammed_earth">Rammed Earth</option>
                  <option value="clt">Cross-Laminated Timber (CLT)</option>
                  <option value="bamboo">Bamboo Construction</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="glass-elite" style={{ padding: '2.5rem', borderRadius: '32px', background: 'rgba(0, 255, 136, 0.05)', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Leaf color="var(--color-primary)" /> Impact Savings</h3>
                  <div style={{ padding: '5px 12px', backgroundColor: 'rgba(0, 255, 136, 0.2)', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-primary)' }}>ADVANCED ANALYSIS</div>
               </div>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <div style={{ opacity: 0.5, fontSize: '0.8rem', marginBottom: '5px' }}>CARBON SAVED</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.carbonSaved.toLocaleString()} <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>kg CO2e</span></div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.5, fontSize: '0.8rem', marginBottom: '5px' }}>WATER SAVED</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>{stats.waterSaved.toLocaleString()} <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>Liters</span></div>
                  </div>
               </div>
               
               <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Zap size={20} color="var(--color-accent)" />
                  <div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>THERMAL EFFICIENCY GAIN</div>
                    <div style={{ fontWeight: 800, color: 'var(--color-accent)' }}>+{stats.efficiencyGain}% vs. Conventional</div>
                  </div>
               </div>
            </div>

            <div className="glass-elite" style={{ padding: '2rem', borderRadius: '32px', minHeight: '320px' }}>
               <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BarChart3 size={18} /> Impact Comparison</h4>
               <div style={{ width: '100%', height: '240px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} />
                      <YAxis hide />
                      <Tooltip 
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }}
                      />
                      <Bar dataKey="Standard" fill="rgba(255,255,255,0.1)" radius={[6, 6, 0, 0]} barSize={40} />
                      <Bar dataKey="Green" fill="var(--color-primary)" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
