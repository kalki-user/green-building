import React, { useState } from 'react';
import { Search, Globe, Filter, Award, Leaf, Zap, HeartPulse, Infinity, Microscope, Building, Compass, Landmark, X, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import './Techniques.css';

const ratingsData = [
  {
    name: "LEED",
    fullName: "Leadership in Energy and Environmental Design",
    origin: "USA / Global",
    body: "USGBC",
    region: "Americas / Global",
    focus: "Holistic",
    tiers: "Certified, Silver, Gold, Platinum",
    usp: "The most widely recognized global standard using a points-based credit system.",
    icon: <Award color="var(--color-primary)" />,
    details: {
      categories: ["Sustainable Sites", "Water Efficiency", "Energy & Atmosphere", "Materials & Resources", "Indoor Environmental Quality", "Innovation & Regional Priority"],
      scoring: "Fixed 110-point scale. Platinum requires 80+ points. Projects must meet mandatory prerequisites in each category before earning points.",
      process: "Registration via LEED Online -> Documentation submission -> Preliminary/Final Review by GBCI -> Certification Awarded.",
      impact: "Reduces operational costs by an average of 20% and carbon emissions by 34% compared to non-certified buildings."
    }
  },
  {
    name: "BREEAM",
    fullName: "Building Research Establishment Environmental Assessment Method",
    origin: "UK / Global",
    body: "BRE",
    region: "Europe / Global",
    focus: "Holistic",
    tiers: "Pass, Good, Very Good, Excellent, Outstanding",
    usp: "The world's longest-standing method; uses science-based weighted scoring.",
    icon: <Microscope color="#3182ce" />,
    details: {
      categories: ["Management", "Health & Wellbeing", "Energy", "Transport", "Water", "Materials", "Waste", "Land Use & Ecology", "Pollution"],
      scoring: "Weighted scoring system. Credits are multiplied by category weightage (e.g., Energy is weighted higher in certain climates) to get a percentage score.",
      process: "Self-assessment -> Independent 3rd party licensed assessor audit -> Verification by BRE Global.",
      impact: "High focus on the procurement and construction process, ensuring lifecycle sustainability from day one."
    }
  },
  {
    name: "EDGE",
    fullName: "Excellence in Design for Greater Efficiencies",
    origin: "International",
    body: "IFC (World Bank Group)",
    region: "International",
    focus: "Energy/Water",
    tiers: "Certified, Advanced, Zero Carbon",
    usp: "Focuses on 20% reduction in energy, water, and embodied carbon via an online tool.",
    icon: <Zap color="#ECC94B" />,
    details: {
      categories: ["Energy Efficiency", "Water Savings", "Embodied Energy in Materials"],
      scoring: "Quantitative threshold: Minimum 20% savings in all three categories relative to a local baseline. 'EDGE Advanced' requires 40% energy savings.",
      process: "Free online planning tool -> Preliminary Certification at Design -> Final Certification after construction audit.",
      impact: "Specifically designed for emerging markets to prove the business case for green building with minimal complexity."
    }
  },
  {
    name: "WELL",
    fullName: "WELL Building Standard",
    origin: "USA / Global",
    body: "IWBI",
    region: "Americas / Global",
    focus: "Human Health",
    tiers: "Bronze, Silver, Gold, Platinum",
    usp: "Focuses exclusively on human health and wellness via 10 core concepts.",
    icon: <HeartPulse color="#e53e3e" />,
    details: {
      categories: ["Air", "Water", "Nourishment", "Light", "Movement", "Thermal Comfort", "Sound", "Materials", "Mind", "Community"],
      scoring: "Points based on 'Preconditions' (mandatory) and 'Optimizations'. Total points across all concepts determine the medal tier.",
      process: "Registration -> Documentation -> Performance Verification (on-site testing of air/water/light) -> Annual reporting for maintenance.",
      impact: "Improves employee productivity, cognitive function, and reduces absenteeism via biologically-centered design."
    }
  },
  {
    name: "DGNB",
    fullName: "German Sustainable Building Council",
    origin: "Germany",
    body: "DGNB System",
    region: "Europe",
    focus: "Holistic",
    tiers: "Bronze, Silver, Gold, Platinum",
    usp: "Emphasis on economic and sociocultural quality alongside environmental impact.",
    icon: <Landmark color="#4a5568" />,
    details: {
      categories: ["Environmental Quality", "Economic Quality", "Sociocultural & Functional Quality", "Technical Quality", "Process Quality", "Site Quality"],
      scoring: "Weighted assessment across 6 categories. Heavily integrates Life Cycle Costing (LCC) and Life Cycle Assessment (LCA).",
      process: "Registration -> Auditing by an accredited DGNB Consultant -> Review by the DGNB Head Office.",
      impact: "Recognized as the most advanced system for quantifying economic sustainability and circular economy principles."
    }
  },
  {
    name: "GRIHA",
    fullName: "Green Rating for Integrated Habitat Assessment",
    origin: "India",
    body: "TERI / MNRE",
    region: "Asia Pacific",
    focus: "Holistic",
    tiers: "1 Star, 2 Stars, 3 Stars, 4 Stars, 5 Stars",
    usp: "The National Rating System of India, specifically adapted for different Indian climates.",
    icon: <Leaf color="#2f855a" />,
    details: {
      categories: ["Site Planning", "Construction Management", "Energy Optimization", "Water Management", "Waste Management", "Occupant Comfort", "Sustainable Materials"],
      scoring: "Based on 30 criteria with 100 points total. Star ratings range from 1 star (25-40 pts) to 5 stars (above 85 pts).",
      process: "Registration -> Due-diligence (internal) -> Third-party site visits and documentation review by GRIHA Council.",
      impact: "Customized for the 'Passive' architecture found in varied Indian climatic zones including composite, hot-dry, and warm-humid."
    }
  },
  {
    name: "IGBC",
    fullName: "Indian Green Building Council",
    origin: "India",
    body: "CII",
    region: "Asia Pacific",
    focus: "Holistic",
    tiers: "Certified, Silver, Gold, Platinum",
    usp: "A specialized voluntary rating system centered on Indian market transformation.",
    icon: <Building color="#276749" />,
    details: {
      categories: ["Sustainable Architecture and Design", "Site Selection and Planning", "Water Conservation", "Energy Efficiency", "Building Materials and Resources", "Indoor Environmental Quality", "Innovation and Development"],
      scoring: "100-point scale + 10 bonus points for innovation. Platinum recognition requires 80-100 points.",
      process: "Registration -> Project submission -> Multi-stage review by the IGBC technical committee -> Certification.",
      impact: "Drives the largest green building footprint in India through specialized ratings for Factories, Schools, Residences, and Metro stations."
    }
  },
  {
    name: "Green Mark",
    fullName: "BCA Green Mark Scheme",
    origin: "Singapore",
    body: "Building and Construction Authority (BCA)",
    region: "Asia Pacific",
    focus: "Energy",
    tiers: "Certified, Gold, Gold Plus, Platinum",
    usp: "Optimized for tropical climate energy efficiency and high-density urban living.",
    icon: <Zap color="#38a169" />,
    details: {
      categories: ["Energy Efficiency", "Water Efficiency", "Environmental Protection", "Indoor Environmental Quality", "Other Green Features & Innovation"],
      scoring: "Points-based system with mandatory minimum energy efficiency index (EEI) scores for higher tiers.",
      process: "Application -> Assessment visit by BCA officers -> Verification of actual performance post-completion.",
      impact: "Instrumental in Singapore's 'Green Building Masterplan' targeting 80% of buildings to be green by 2030."
    }
  },
  {
    name: "Green Star",
    fullName: "Green Star Australia",
    origin: "Australia",
    body: "GBCA",
    region: "Asia Pacific",
    focus: "Holistic",
    tiers: "4 Stars (Best Practice), 5 Stars (Excellence), 6 Stars (World Leadership)",
    usp: "Comprehensive rating system for design, construction, and building operations in Oceania.",
    icon: <Award color="#2b6cb0" />,
    details: {
      categories: ["Management", "Indoor Environment Quality", "Energy", "Transport", "Water", "Materials", "Land Use & Ecology", "Emissions", "Innovation"],
      scoring: "Projects earn points that translate to stars. 4 Stars is 'Best Practice', 5 Stars is 'Australian Excellence', 6 Stars is 'World Leadership'.",
      process: "Registration -> Round 1 Assessment -> Round 2 Assessment -> Independent Assessment Panel verification.",
      impact: "High emphasis on the 'As-Built' verification, ensuring that green designs are actually translated into physical reality."
    }
  },
  {
    name: "CASBEE",
    fullName: "Comprehensive Assessment System for Built Environment Efficiency",
    origin: "Japan",
    body: "JSBC",
    region: "Asia Pacific",
    focus: "Efficiency",
    tiers: "Rank C, B-, B+, A, S (Excellent)",
    usp: "Uses the 'Building Environmental Efficiency' (BEE) ratio to balance quality and load.",
    icon: <Compass color="#d69e2e" />,
    details: {
      categories: ["Q1: Indoor Environment", "Q2: Quality of Service", "Q3: Outdoor Environment on Site", "LR1: Energy", "LR2: Resources & Materials", "LR3: Off-site Environment"],
      scoring: "Unique BEE (Building Environmental Efficiency) = Q (Quality) / L (Load). A higher BEE value results in a higher rank (S being the highest).",
      process: "Self-assessment using CASBEE software -> Evaluation by local government or CASBEE Accredited Professional.",
      impact: "Strict focus on the 'Life Cycle' of the building, including the impact of demolition and the reuse of the site."
    }
  },
  {
    name: "HQE",
    fullName: "Haute Qualité Environnementale",
    origin: "France",
    body: "Cerway",
    region: "Europe",
    focus: "Holistic",
    tiers: "Pass, Good, Very Good, Excellent, Outstanding",
    usp: "Focuses on 14 targets grouped into Eco-construction, Eco-management, Comfort, and Health.",
    icon: <Landmark color="#2c5282" />,
    details: {
      categories: ["Eco-construction", "Eco-management", "Comfort (Acoustic/Visual/Olfactory)", "Health (Air Quality/Water Quality)"],
      scoring: "Evaluation based on the achievement of 14 specific performance targets. Levels are awarded based on how many targets are 'Highly Performing'.",
      process: "Audit of the Management System -> Audit of the Building Specifications -> Final On-site Audit after completion.",
      impact: "Highly recognized in the EU for integrating 'Health' and 'Comfort' as half of the total sustainability score."
    }
  },
  {
    name: "Estidama / Pearl",
    fullName: "Pearl Rating System",
    origin: "UAE (Abu Dhabi)",
    body: "Department of Municipalities and Transport",
    region: "Middle East",
    focus: "Water/Energy",
    tiers: "1 Pearl, 2 Pearls, 3 Pearls, 4 Pearls, 5 Pearls",
    usp: "Mandatory system in Abu Dhabi focused on severe water scarcity and extreme heat.",
    icon: <Infinity color="#319795" />,
    details: {
      categories: ["Integrated Development Process", "Natural Systems", "Livable Buildings", "Precious Water", "Resourceful Energy", "Stewarding Materials", "Innovating Practice"],
      scoring: "Hierarchical system with mandatory 'Required' credits and optional points. 5 Pearls is the highest achievement for sustainable desert living.",
      process: "Design Rating submission -> Construction Rating submission (audited during builds) -> Post-Occupancy check.",
      impact: "Forces a 35% reduction in potable water consumption as a mandatory baseline in the arid UAE region."
    }
  },
  {
    name: "GSAS",
    fullName: "Global Sustainability Assessment System",
    origin: "Qatar",
    body: "GORD",
    region: "Middle East",
    focus: "Holistic",
    tiers: "1 Star, 2 Stars, 3 Stars, 4 Stars, 5 Stars, 6 Stars",
    usp: "The primary sustainability standard for the MENA region, adapted for arid climates.",
    icon: <Award color="#805ad5" />,
    details: {
      categories: ["Urban Connectivity", "Site", "Energy", "Water", "Materials", "Indoor Environment", "Cultural & Economic Value", "Management & Operations"],
      scoring: "Criteria-based with varying weights. Performance is measured against 'Level 0' baseline. 6 Stars represents world-class performance.",
      process: "Design Phase Audit -> Construction Phase Audit -> Operational Phase continuous monitoring.",
      impact: "Integrates 'Cultural & Economic' identity as a core sustainability pillar, preserving regional heritage."
    }
  },
  {
    name: "Green Globes",
    fullName: "Green Globes Certification",
    origin: "USA / Canada",
    body: "Green Building Initiative (GBI)",
    region: "Americas",
    focus: "Holistic",
    tiers: "1 Globe, 2 Globes, 3 Globes, 4 Globes",
    usp: "A user-friendly, collaborative web-based alternative to LEED.",
    icon: <Globe color="#2c5282" />,
    details: {
      categories: ["Project Management", "Site", "Energy", "Water", "Resources", "Emissions", "Indoor Environment"],
      scoring: "1,000-point scale. 1 Globe (35-54%), 2 Globes (55-69%), 3 Globes (70-84%), 4 Globes (85-100%).",
      process: "Online questionnaire -> Supporting documentation -> Third-party independent assessor on-site walkthrough.",
      impact: "Significantly lowers the cost of certification while maintaining rigorous independent technical review."
    }
  },
  {
    name: "Living Building Challenge",
    fullName: "Living Building Challenge (LBC)",
    origin: "International",
    body: "ILFI",
    region: "International",
    focus: "Regenerative",
    tiers: "Petal Certification, Living Certification",
    usp: "The most rigorous standard requiring net-positive water and energy over 12 months.",
    icon: <Leaf color="#c36a42" />,
    details: {
      categories: ["Place", "Water", "Energy", "Health & Happiness", "Materials", "Equity", "Beauty"],
      scoring: "Absolute performance based. No 'points'. You must meet all 'Imperatives' within a Petal to be certified.",
      process: "Registration -> 12-month performance period -> External Auditor visit -> Certification based on real billing data.",
      impact: "Pushes buildings to behave like flowers—generating more than they consume and being purely net-positive to the soil."
    }
  },
  {
    name: "Passivhaus",
    fullName: "Passive House Standard",
    origin: "Germany",
    body: "Passive House Institute",
    region: "Europe / Global",
    focus: "Energy",
    tiers: "Classic, Plus, Premium",
    usp: "Focuses on extreme thermal performance and airtightness to eliminate traditional heating.",
    icon: <Zap color="#c05621" />,
    details: {
      categories: ["Space Heating Demand", "Primary Energy Demand", "Airtightness", "Thermal Comfort"],
      scoring: "Threshold based: Heating Demand <= 15 kWh/m2.yr; Airtightness <= 0.6 air changes per hour (n50).",
      process: "PHPP (Passive House Planning Package) modeling -> Audit by an accredited Passive House Certifier -> Blower door testing.",
      impact: "Buildings require up to 90% less heating/cooling energy than typical older stock."
    }
  },
  {
    name: "Minergie",
    fullName: "Minergie Standard",
    origin: "Switzerland",
    body: "Minergie Association",
    region: "Europe",
    focus: "Holistic",
    tiers: "Standard, P, A (including Eco additions)",
    usp: "A registered quality label for new and refurbished buildings in Switzerland.",
    icon: <Landmark color="#4a5568" />,
    details: {
      categories: ["Energy Performance", "Thermal Protection", "Air Renewal", "Summer Heat Protection", "Eco-friendly Materials"],
      scoring: "Strict legal limit values for energy consumption. 'Minergie-A' buildings must be net-energy producers.",
      process: "Plan certification -> Random sample audit during construction -> Quality system verification.",
      impact: "Recognized swiss standard for long-term real estate value retention and climate protection."
    }
  },
  {
    name: "Miljöbyggnad",
    fullName: "Miljöbyggnad Sweden",
    origin: "Sweden",
    body: "Sweden Green Building Council",
    region: "Europe",
    focus: "Holistic",
    tiers: "Bronze, Silver, Gold",
    usp: "Focuses specifically on energy, indoor environment, and construction materials.",
    icon: <Building color="#2d3748" />,
    details: {
      categories: ["Energy", "Indoor Environment", "Materials & Chemicals"],
      scoring: "Evaluates 16 indicators. To reach 'Gold', the building must reach 'Gold' in nearly all parameters (no weak links).",
      process: "Application -> Professional verification of drawings -> Follow-up verify after 3 years of operation.",
      impact: "Specifically tuned for Nordic cold-climate building science and strict chemical control for building materials."
    }
  },
  {
    name: "BEAM Plus",
    fullName: "Building Environmental Assessment Method",
    origin: "Hong Kong",
    body: "HKGBC",
    region: "Asia Pacific",
    focus: "Holistic",
    tiers: "Bronze, Silver, Gold, Platinum",
    usp: "Tailored to high-density, high-rise subtropic urban environments.",
    icon: <Building color="#2c5282" />,
    details: {
      categories: ["Site Aspects", "Materials Aspects", "Energy Use", "Water Use", "Indoor Environmental Quality", "Innovation & Additions"],
      scoring: "Points-based assessment with mandatory prerequisites. Platinum requires 75% score across all categories.",
      process: "Registration -> PA (Provisional Assessment) -> FA (Final Assessment) by iBEAM platform.",
      impact: "Crucial for Hong Kong's vertical urbanism focusing on natural ventilation and shading in skyscrapers."
    }
  },
  {
    name: "EEWH",
    fullName: "EEWH System",
    origin: "Taiwan",
    body: "Ministry of Interior",
    region: "Asia Pacific",
    focus: "Holistic",
    tiers: "Certified, Bronze, Silver, Gold, Diamond",
    usp: "Focuses on Ecology, Energy, Waste, and Health specifically for Taiwan's unique climate.",
    icon: <Leaf color="#2f855a" />,
    details: {
      categories: ["Biodiversity", "Greenery", "Water Conservation", "Daily Energy Saving", "CO2 Reduction", "Waste Reduction", "Indoor Environment"],
      scoring: "Multi-index system. Diamond tier requires top-tier performance in biodiversity and long-term daily energy reduction.",
      process: "Application -> Document review by Taiwan Architecture & Building Center -> Field inspection.",
      impact: "The first green building system specifically designed for subtropical high-humidity and high-seismic regions."
    }
  },
  {
    name: "GBCSA",
    fullName: "Green Star South Africa",
    origin: "South Africa",
    body: "GBCSA",
    region: "Middle East / Africa",
    focus: "Holistic",
    tiers: "4 Stars, 5 Stars, 6 Stars",
    usp: "Based on Australia's Green Star, adapted for African market conditions.",
    icon: <Award color="#2f855a" />,
    details: {
      categories: ["Management", "IEQ", "Energy", "Transport", "Water", "Materials", "Land Use & Ecology", "Emissions", "Innovation"],
      scoring: "Calculated points weighted against environmental impacts in the South African context. 6 Stars is 'World Leadership'.",
      process: "Registration -> Round 1/2 Independent technical review -> Rating award.",
      impact: "Drives sustainable construction in Sub-Saharan Africa, focusing heavily on carbon-free cooling and solar integration."
    }
  },
  {
    name: "Fitwel",
    fullName: "Fitwel Certification",
    origin: "USA",
    body: "Center for Active Design (CfAD)",
    region: "Americas",
    focus: "Human Health",
    tiers: "1 Star, 2 Stars, 3 Stars",
    usp: "Data-driven standard optimized for occupant behavior and physical activity.",
    icon: <HeartPulse color="#d53f8c" />,
    details: {
      categories: ["Building Access", "Stairs", "Water Availability", "Outdoor Spaces", "Indoor Environment", "Vending/Food Services", "Emergency Procedures"],
      scoring: "Weighted points for over 55+ evidence-based design and operational strategies. No mandatory prerequisites.",
      process: "Online portal submission -> Documentation review -> Rapid results and Certification.",
      impact: "Focused on fighting chronic diseases through the 'Active Design' of buildings and stairwell ergonomics."
    }
  },
  {
    name: "SITES",
    fullName: "Sustainable SITES Initiative",
    origin: "USA",
    body: "GBCI",
    region: "Americas",
    focus: "Landscaping",
    tiers: "Certified, Silver, Gold, Platinum",
    usp: "The standard for sustainable landscape design and site development (outdoor focus).",
    icon: <Compass color="#2f855a" />,
    details: {
      categories: ["Site Context", "Design-Soil & Vegetation", "Design-Water", "Design-Materials Selection", "Design-Human Health/Wellbeing", "Construction", "Operations & Maintenance"],
      scoring: "Comprehensive point system for land-based projects. Platinum requires 135+ points.",
      process: "Registration -> Documentation of land management -> GBCI review (often paired with LEED).",
      impact: "Protects ecosystem services and biodiversity by ensuring the land surrounding a building is ecologically functional."
    }
  },
  {
    name: "Energy Star",
    fullName: "ENERGY STAR for Buildings",
    origin: "USA",
    body: "EPA",
    region: "Americas",
    focus: "Energy",
    tiers: "1 - 100 Score (75+ for Certification)",
    usp: "Benchmarks operational energy efficiency using actual utility bills.",
    icon: <Zap color="#ecc94b" />,
    details: {
      categories: ["Electricity Consumption", "Natural Gas", "Building Type/Size", "Operating Hours", "Occupancy Density"],
      scoring: "A score of 75 means the building performs better than 75% of similar buildings nationwide.",
      process: "Data entry into Portfolio Manager -> Year of billing data -> Verification by a Licensed Professional (PE/RA).",
      impact: "The most common baseline for operational efficiency in US commercial real estate."
    }
  },
];

const Ratings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredRatings = ratingsData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.origin.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'All' || item.region.includes(filterRegion);
    return matchesSearch && matchesRegion;
  });

  const regions = ['All', 'Americas', 'Europe', 'Asia Pacific', 'Middle East', 'International'];

  return (
    <div className="edu-page animate-fade-in" style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="edu-hero" style={{ background: 'linear-gradient(135deg, #113429, #2D3436)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 1rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem', fontWeight: 800 }}>Global Rating Systems</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9, lineHeight: '1.6' }}>
            A deep-dive technical encyclopedia of the 24 leading certifications, benchmarks, and performance standards defining sustainable architecture today.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        
        {/* Filter Controls */}
        <div className="glass-elite" style={{ padding: '2rem', borderRadius: '24px', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
           <div style={{ flexGrow: 1, position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} size={20} />
              <input 
                 type="text" 
                 placeholder="Filter by name, country, or focus..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '30px', border: '1px solid var(--color-border)', fontSize: '1rem', outline: 'none', background: 'white' }}
              />
           </div>
           
           <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {regions.map(region => (
                 <button 
                    key={region}
                    onClick={() => setFilterRegion(region)}
                    style={{ 
                       padding: '8px 16px', 
                       borderRadius: '20px', 
                       border: '1px solid var(--color-border)',
                       backgroundColor: filterRegion === region ? 'var(--color-primary)' : 'white',
                       color: filterRegion === region ? 'white' : 'var(--color-text)',
                       fontSize: '0.8rem',
                       fontWeight: 600,
                       cursor: 'pointer',
                       transition: 'all 0.3s ease'
                    }}
                 >
                    {region}
                 </button>
              ))}
           </div>
        </div>

        {/* Status bar */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', opacity: 0.6 }}>Found <strong>{filteredRatings.length}</strong> certification frameworks</span>
           <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', opacity: 0.5 }}>
              <Info size={14} /> Click any card to view detailed technical specifications
           </div>
        </div>

        {/* Ratings Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredRatings.map((item, index) => (
            <div 
               key={index} 
               className="glass-elite animate-fade-in" 
               onClick={() => setSelectedCert(item)}
               style={{ 
                  padding: '1.5rem', 
                  borderRadius: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.8)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-5px)';
                 e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-elite)';
               }}
            >
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                     {item.icon}
                  </div>
                  <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', fontSize: '0.6rem', padding: '4px 8px', borderRadius: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                     {item.focus}
                  </div>
               </div>

               <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>{item.name}</h2>
               <p style={{ fontSize: '0.8rem', opacity: 0.5, fontWeight: 600, marginBottom: '1.5rem' }}>{item.origin}</p>
               
               <div style={{ display: 'grid', gap: '1rem', flexGrow: 1 }}>
                  <div>
                     <strong style={{ fontSize: '0.75rem', color: 'var(--color-primary)', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Certification Tiers</strong>
                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '0.5rem' }}>
                        {item.tiers.split(',').map((tier, tIdx) => (
                           <span key={tIdx} style={{ 
                              fontSize: '0.7rem', 
                              backgroundColor: 'rgba(195,106,66,0.08)', 
                              color: 'var(--color-secondary)', 
                              padding: '2px 8px', 
                              borderRadius: '4px', 
                              fontWeight: 600,
                              border: '1px solid rgba(195,106,66,0.2)'
                           }}>
                              {tier.trim()}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div style={{ fontSize: '0.9rem', lineHeight: '1.5', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '12px', color: 'var(--color-text)' }}>
                     {item.usp}
                  </div>
               </div>
               
               <div style={{ marginTop: '1.5rem', textAlign: 'right', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                  Technical Specs <Award size={14} />
               </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedCert && (
           <div style={{ 
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
              backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
              zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem'
           }}>
              <div className="glass-elite" style={{ 
                 maxWidth: '800px', width: '100%', maxHeight: '95vh', overflowY: 'auto',
                 backgroundColor: 'white', borderRadius: '24px', position: 'relative',
                 padding: '2rem'
              }}>
                 <button 
                    onClick={() => setSelectedCert(null)}
                    style={{ position: 'absolute', right: '1rem', top: '1rem', border: 'none', background: 'none', cursor: 'pointer', opacity: 0.5 }}
                 >
                    <X size={28} />
                 </button>

                 <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ padding: '12px', backgroundColor: 'var(--color-bg)', borderRadius: '15px' }}>
                       {selectedCert.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                       <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', color: 'var(--color-primary)', marginBottom: '0.2rem', lineHeight: 1 }}>{selectedCert.name}</h2>
                       <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{selectedCert.fullName}</p>
                    </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div>
                       <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1rem' }}>Assessment Categories</h3>
                       <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem' }}>
                          {selectedCert.details.categories.map((cat, i) => (
                             <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.95rem' }}>
                                <CheckCircle2 size={16} color="var(--color-primary)" /> {cat}
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                       <div>
                          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><AlertCircle size={18} color="var(--color-secondary)" /> Scoring Methodology</h3>
                          <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>{selectedCert.details.scoring}</p>
                       </div>
                       <div>
                          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Compass size={18} color="var(--color-secondary)" /> Certification Process</h3>
                          <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>{selectedCert.details.process}</p>
                       </div>
                       <div style={{ backgroundColor: 'var(--color-bg)', padding: '1.5rem', borderRadius: '16px' }}>
                          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Impact Insight</h3>
                          <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6, fontStyle: 'italic' }}>{selectedCert.details.impact}</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default Ratings;
