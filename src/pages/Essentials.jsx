import { Globe, Sparkles, Zap, Droplets, Target, ShieldCheck, History, BarChart3, TrendingDown, Award, HeartPulse, Infinity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './Techniques.css';

const sectorData = [
  { name: 'Operational Energy', value: 28, color: '#2C5F2D' },
  { name: 'Embodied Carbon (Materials)', value: 11, color: '#C36A42' },
  { name: 'Transport', value: 22, color: '#3182ce' },
  { name: 'Industry & Other', value: 39, color: '#a0aec0' },
];

const lifecycleData = [
  { stage: 'Extraction', impact: 15 },
  { stage: 'Material Mfg', impact: 45 },
  { stage: 'Construction', impact: 5 },
  { stage: 'Operation', impact: 25 },
  { stage: 'End-of-Life', impact: 10 },
];

const investmentData = [
  { name: 'Current (2023)', amount: 270 },
  { name: 'Target (2030)', amount: 522 },
];

const Essentials = () => {
  const certifications = [
    {
      name: "LEED (Leadership in Energy and Environmental Design)",
      origin: "USGBC (United States)",
      focus: "Environmental performance and resource efficiency.",
      hierarchy: "Certified, Silver, Gold, Platinum (based on 110 points).",
      bestFor: "Global recognition and broad sustainable baseline.",
      icon: <Award color="var(--color-primary)" size={24} />
    },
    {
      name: "WELL Building Standard",
      origin: "IWBI (International)",
      focus: "Occupant health, wellness, and human productivity.",
      hierarchy: "Bronze, Silver, Gold, Platinum (performance-verified).",
      bestFor: "Workspaces, hospitals, and high-occupancy interiors.",
      icon: <HeartPulse color="#e53e3e" size={24} />
    },
    {
      name: "BREEAM (BRE Environmental Assessment Method)",
      origin: "BRE (United Kingdom)",
      focus: "Comprehensive lifecycle and procurement sustainability.",
      hierarchy: "Pass, Good, Very Good, Excellent, Outstanding.",
      bestFor: "European market alignment and rigorous industrial standards.",
      icon: <Target color="#3182ce" size={24} />
    },
    {
      name: "Living Building Challenge (LBC)",
      origin: "ILFI (International)",
      focus: "Regenerative design; giving back more than it takes.",
      hierarchy: "7 Petals: Place, Water, Energy, Health, Materials, Equity, Beauty.",
      bestFor: "Visionary projects aiming for net-positive impact.",
      icon: <Infinity color="var(--color-secondary)" size={24} />
    }
  ];

  return (
    <div className="edu-page animate-fade-in">
      {/* Hero Section: Elite Design */}
      <div className="edu-hero" style={{ background: 'linear-gradient(160deg, #113429 0%, #2D3436 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-overlay" style={{ opacity: 0.3 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '6rem 1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.6rem 1.2rem', borderRadius: '40px', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
            <Sparkles color="var(--color-accent)" size={18} />
            <span style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1.2px', textTransform: 'uppercase' }}>Elite Educational Module</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: 800 }}>
            Elite Essentials of <br />
            <span style={{ color: 'var(--color-secondary)' }}>Green Building</span>
          </h1>
          <p style={{ maxWidth: '800px', fontSize: '1.35rem', lineHeight: '1.7', opacity: 0.9, color: '#ecf0f1', marginBottom: '3rem' }}>
            Deciphering the global scientific standards and existential imperatives that define high-performance, regenerative architecture in the 21st century.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
        {/* Rapid Data Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
           <div className="glass-elite" style={{ padding: '2rem', borderRadius: 'var(--rounded-md)', textAlign: 'center' }}>
             <h4 style={{ opacity: 0.6, fontSize: '0.85rem', marginBottom: '0.5rem' }}>BUILDING SECTOR EMISSIONS</h4>
             <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)' }}>34%</div>
             <p style={{ fontSize: '0.9rem' }}>Global contribution to energy-related CO2.</p>
           </div>
           <div className="glass-elite" style={{ padding: '2rem', borderRadius: 'var(--rounded-md)', textAlign: 'center' }}>
             <h4 style={{ opacity: 0.6, fontSize: '0.85rem', marginBottom: '0.5rem' }}>POLICY GAP</h4>
             <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-danger)' }}>50%+</div>
             <p style={{ fontSize: '0.9rem' }}>New construction lack energy building codes.</p>
           </div>
           <div className="glass-elite" style={{ padding: '2rem', borderRadius: 'var(--rounded-md)', textAlign: 'center' }}>
             <h4 style={{ opacity: 0.6, fontSize: '0.85rem', marginBottom: '0.5rem' }}>INVESTMENT TARGET</h4>
             <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-secondary)' }}>$522B</div>
             <p style={{ fontSize: '0.9rem' }}>Annual efficiency investment required by 2030.</p>
           </div>
        </div>

        {/* Deep Dive Charts */}
        <section style={{ marginBottom: '8rem' }}>
           <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3.5rem', color: 'var(--color-primary)' }}>Analytical Climate Pulse</h2>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
              
              <div className="glass-elite" style={{ padding: '2.5rem', borderRadius: 'var(--rounded-lg)' }}>
                 <h3 style={{ marginBottom: '2rem', fontSize: '1.4rem' }}>Global CO2 Contribution (2024 Index)</h3>
                 <div style={{ height: '350px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sectorData}
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={8}
                          dataKey="value"
                        >
                          {sectorData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>*Source: UNEP Global Status Report 2024</p>
              </div>

              <div className="glass-elite" style={{ padding: '2.5rem', borderRadius: 'var(--rounded-lg)' }}>
                 <h3 style={{ marginBottom: '2rem', fontSize: '1.4rem' }}>Embodied vs. Operational Disparity</h3>
                 <div style={{ height: '350px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={lifecycleData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                        <XAxis dataKey="stage" axisLine={false} tickLine={false} style={{ fontSize: '0.8rem' }} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
                        <Bar dataKey="impact" fill="var(--color-secondary)" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '1rem' }}>Note: <strong>Material Manufacturing</strong> is the single largest point of carbon expenditure before the building is inhabited.</p>
              </div>

           </div>
        </section>

        {/* Elite Certifications Matrix */}
        <section style={{ marginBottom: '8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>The Global Certification Matrix</h2>
             <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.7 }}>Evaluating the gold-standard frameworks that validate architectural sustainability.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-elite" style={{ padding: '2.5rem', borderRadius: 'var(--rounded-md)', borderTop: idx === 3 ? '6px solid var(--color-secondary)' : 'none' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                   {cert.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{cert.name}</h3>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>{cert.origin}</p>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ fontSize: '0.9rem' }}><strong>Core Focus:</strong> {cert.focus}</div>
                  <div style={{ fontSize: '0.9rem' }}><strong>Certification Levels:</strong> {cert.hierarchy}</div>
                  <div style={{ fontSize: '0.9rem', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '6px' }}><strong>Strategic Implementation:</strong> {cert.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regenerative Paradox */}
        <section style={{ marginBottom: '8rem', backgroundColor: 'var(--color-primary)', borderRadius: 'var(--rounded-lg)', padding: '6rem 4rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', right: '-100px', bottom: '-100px', opacity: 0.1 }}>
             <Globe size={500} />
           </div>
           <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.2rem', borderRadius: '40px', marginBottom: '2rem' }}>
                <Award color="var(--color-accent)" size={18} />
                <span style={{ fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>THE FUTURE BEYOND SUSTAINABILITY</span>
              </div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>From Sustainable <br /><span style={{ color: 'var(--color-accent)' }}>to Regenerative</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                 <div>
                    <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><TrendingDown /> Sustainable Design</h4>
                    <p style={{ opacity: 0.8, lineHeight: '1.8' }}>Historically focused on <strong>reducing negative impacts</strong> (less energy, less water, less waste). It aims for a "neutral" balance but often fails to offset the original carbon debt of construction.</p>
                 </div>
                 <div>
                    <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Infinity /> Regenerative Design</h4>
                    <p style={{ opacity: 0.8, lineHeight: '1.8' }}>A holistic paradigm where the building acts as a <strong>biological component of the ecosystem</strong>. It produces more energy than it uses, filters more water than it pulls, and actively sequesters carbon through its materials.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Roadmap */}
        <section style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>The 2050 Global Roadmap</h2>
             <p style={{ opacity: 0.7 }}>The trajectory toward a net-zero built environment as mandated by the Paris Agreement.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}>
             <div style={{ textAlign: 'center', maxWidth: '200px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>2030</div>
                <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 1.5rem' }}></div>
                <p style={{ fontSize: '0.9rem' }}>All new buildings operate at Net Zero Carbon.</p>
             </div>
             <div style={{ textAlign: 'center', maxWidth: '200px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>2040</div>
                <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 1.5rem' }}></div>
                <p style={{ fontSize: '0.9rem' }}>40% reduction in whole-life embodied carbon.</p>
             </div>
             <div style={{ textAlign: 'center', maxWidth: '200px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>2050</div>
                <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-secondary)', margin: '0 auto 1.5rem' }}></div>
                <p style={{ style: '0.9rem' }}>100% of building portfolios are Net Zero (New & Existing).</p>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Essentials;
