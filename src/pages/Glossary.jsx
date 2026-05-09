import React, { useState } from 'react';
import { Search, Info, Thermometer, Droplets, Zap, Box, Wind, Activity, Globe } from 'lucide-react';
import './Techniques.css';

const glossaryTerms = [
  {
    term: "R-Value (Thermal Resistance)",
    definition: "A measure of a material's or assembly's ability to resist the conductive flow of heat. The higher the R-value, the better the material insulates. It is a critical metric for building envelopes.",
    category: "Thermal Performance",
    icon: <Thermometer size={20} />
  },
  {
    term: "U-Value (Thermal Transmittance)",
    definition: "The rate of heat transfer through a building element (like windows or walls). It is the mathematical reciprocal of the R-value (U=1/R). The lower the U-value, the better the insulator.",
    category: "Thermal Performance",
    icon: <Wind size={20} />
  },
  {
    term: "Thermal Lag",
    definition: "The time delay between a change in temperature on the outside and the corresponding change on the inside. High thermal mass materials (like Rammed Earth) have significant thermal lag.",
    category: "Thermal Performance",
    icon: <Activity size={20} />
  },
  {
    term: "Embodied Carbon",
    definition: "The total greenhouse gas emissions associated with the raw material extraction, manufacturing, transport, and construction processes before the building is even occupied.",
    category: "Sustainability",
    icon: <Box size={20} />
  },
  {
    term: "Operational Carbon",
    definition: "The carbon emissions associated with the energy consumed by the building during its lifetime, primarily for heating, cooling, lighting, and ventilation.",
    category: "Sustainability",
    icon: <Zap size={20} />
  },
  {
    term: "Net-Zero Architecture",
    definition: "A building that produces as much renewable energy on-site as it consumes over the course of a year, typically achieving a neutral carbon balance during operation.",
    category: "Architecture",
    icon: <Globe size={20} />
  },
  {
    term: "Potable Water",
    definition: "Water that is of high enough quality to be consumed or used with low risk of immediate or long-term harm. Green buildings aim to minimize potable water use for non-drinking needs.",
    category: "Hydrology",
    icon: <Droplets size={20} />
  },
  {
    term: "Greywater",
    definition: "Relatively clean waste water from baths, sinks, washing machines, and other kitchen appliances. It can be recycled on-site for garden irrigation and toilet flushing.",
    category: "Hydrology",
    icon: <Droplets size={20} />
  },
  {
    term: "VOCs (Volatile Organic Compounds)",
    definition: "Organic chemicals that have a high vapor pressure at ordinary room temperature. Many synthetic building materials 'off-gas' VOCs, which can negatively impact indoor air quality and human health.",
    category: "Human Health",
    icon: <Wind size={20} />
  },
  {
    term: "Thermal Bridge",
    definition: "A component or assembly that has much higher thermal conductivity than the surrounding materials, creating a 'path' for heat to bypass insulation (e.g., steel studs in an insulated wall).",
    category: "Thermal Performance",
    icon: <Activity size={20} />
  },
  {
    term: "Passivhaus (Passive House)",
    definition: "A rigorous, voluntary standard for energy efficiency in a building, which reduces the building's ecological footprint and results in ultra-low energy buildings with high thermal comfort.",
    category: "Standards",
    icon: <Box size={20} />
  },
  {
    term: "Daylight Harvesting",
    definition: "A strategy where a building's lighting system uses sensors to automatically dim or turn off artificial lights when sufficient natural daylight is available in the space.",
    category: "Energy",
    icon: <Zap size={20} />
  },
  {
    term: "Infill Development",
    definition: "The process of developing empty or underutilized parcels of land within existing urban areas that are already largely developed.",
    category: "Sustainability",
    icon: <Globe size={20} />
  },
  {
    term: "Biophilia",
    definition: "The innate human tendency to seek connections with nature. Biophilic design incorporates natural elements like plants, light, and water into the architectural environment.",
    category: "Human Health",
    icon: <Activity size={20} />
  },
  {
    term: "Solar Heat Gain Coefficient (SHGC)",
    definition: "The fraction of solar radiation admitted through a window. A low SHGC is preferred in hot climates to keep the heat out, while a high SHGC is better in cold climates to gain passive heat.",
    category: "Thermal Performance",
    icon: <Wind size={20} />
  },
  {
    term: "LEED (Leadership in Energy and Environmental Design)",
    definition: "A globally recognized green building certification system providing a framework for healthy, highly efficient, and cost-saving green buildings.",
    category: "Standards",
    icon: <Box size={20} />
  },
  {
    term: "Permeable Pavement",
    definition: "Surfaces that allow water to pass through them and reach the soil below, rather than running off into storm drains and increasing flood risks.",
    category: "Hydrology",
    icon: <Droplets size={20} />
  },
  {
    term: "Blackwater",
    definition: "Waste water from toilets and urinals, containing fecal matter and urine. It requires much more intensive treatment than greywater before it can be reused.",
    category: "Hydrology",
    icon: <Droplets size={20} />
  },
  {
    term: "BIM (Building Information Modeling)",
    definition: "A digital representation of physical and functional characteristics of a facility. It is a shared knowledge resource for information about a building throughout its life cycle.",
    category: "Architecture",
    icon: <Globe size={20} />
  },
  {
    term: "Life Cycle Assessment (LCA)",
    definition: "A technical methodology for assessing environmental impacts associated with all the stages of a building's life, from raw material extraction through to disposal or recycling.",
    category: "Sustainability",
    icon: <Box size={20} />
  },
  {
    term: "Rainwater Harvesting",
    definition: "The collection and storage of rain, rather than allowing it to run off. It is used for on-site gardening, toilet flushing, and in some cases, potable supply.",
    category: "Hydrology",
    icon: <Droplets size={20} />
  },
  {
    term: "Shading Coefficient",
    definition: "A ratio of solar heat gain through a specific type of glass compared to a standard clear window. It measures the effectiveness of sun-control devices.",
    category: "Thermal Performance",
    icon: <Wind size={20} />
  },
  {
    term: "Smart Grid",
    definition: "An electricity network that can intelligently integrate the actions of all users connected to it to efficiently deliver sustainable, economic, and secure electricity supplies.",
    category: "Energy",
    icon: <Zap size={20} />
  },
  {
    term: "Super-insulation",
    definition: "An approach to building insulation that significantly exceeds standard building codes, aiming for R-values that eliminate the need for traditional heating systems.",
    category: "Thermal Performance",
    icon: <Thermometer size={20} />
  },
  {
    term: "Xeriscaping",
    definition: "Landscaping and gardening that reduces or eliminates the need for supplemental water from irrigation, typically using native and drought-tolerant plants.",
    category: "Sustainability",
    icon: <Globe size={20} />
  }
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="edu-page animate-fade-in">
      <div className="edu-hero gradient-bg" style={{ background: 'linear-gradient(135deg, #1a3a32, #2d3436)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Technical Glossary</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
            The definitive dictionary of sustainable architecture, science, and technical building performance metrics.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 1rem' }}>
        
        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 4rem' }}>
           <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} size={24} />
           <input 
              type="text" 
              placeholder="Search terms, categories, or keywords..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass"
              style={{ width: '100%', padding: '15px 15px 15px 60px', borderRadius: '40px', border: '1px solid var(--color-border)', fontSize: '1.1rem', outline: 'none' }}
           />
        </div>

        {/* Glossary List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          {filteredTerms.map((item, index) => (
            <div key={index} className="glass-elite" style={{ padding: '2rem', borderRadius: '24px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
               <div style={{ backgroundColor: 'var(--color-bg)', padding: '12px', borderRadius: '12px', color: 'var(--color-primary)' }}>
                  {item.icon}
               </div>
               <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
                     {item.category}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.8rem' }}>{item.term}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.8 }}>{item.definition}</p>
               </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
           <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.5 }}>
              No terms found matching your search.
           </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
