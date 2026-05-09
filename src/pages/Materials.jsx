import { CheckCircle2, XCircle, MapPin, ExternalLink } from 'lucide-react';
import './Techniques.css';

import img1 from '../assets/material-img/1-smb.png';
import img2 from '../assets/material-img/2-fce.png';
import img3 from '../assets/material-img/3-re.png';
import img4 from '../assets/material-img/4-bamboo.png';
import img5 from '../assets/material-img/5-fab.png';
import img6 from '../assets/material-img/6-hempcrate.png';
import img7 from '../assets/material-img/7-rs.png';
import img8 from '../assets/material-img/8-cob.png';
import img9 from '../assets/material-img/9-rwood.png';
import img10 from '../assets/material-img/10-clt.png';
import img11 from '../assets/material-img/11-mb.png';
import img12 from '../assets/material-img/12-cork.png';
import img13 from '../assets/material-img/13-lcc.png';


const Materials = () => {
  const materials = [
    {
      title: "Stabilized Mud Blocks (SMB)",
      description: "A highly compact earthen material formed by mixing locally sourced mud with a fractional amount of cement or lime. The soil combination is compressed naturally without energy-intensive kiln firing.",
      preferable: "Ideal for dry, arid, and semi-arid climates where external rainfall erosion is low.",
      realProject: { name: "Auroville Earth Institute Projects (India)", link: "https://www.google.com/search?q=Auroville+Earth+Institute+SMB+architecture&tbm=isch" },
      advantages: ["Significantly lower embodied energy than conventional fired bricks", "Exceptional thermal regulation and mass storage", "Eliminates transportation emissions when manufactured on-site"],
      disadvantages: ["Susceptible to extreme lateral shear forces without added reinforcement", "Requires highly precise local soil composition testing before use"],
      advancement: "Modern hydraulic block presses and nano-polymer soil stabilizers have drastically increased the structural load-bearing capacity of SMBs to match or exceed high-fired clay bricks.",
      image: img1
    },
    {
      title: "Ferro-Cement Elements",
      description: "A highly versatile thin-shell material consisting of a dense, rich cement mortar applied over layers of wire mesh reinforcement. The dispersed reinforcement allows it to behave cohesively without fracturing.",
      preferable: "Excellent for monsoon-prone regions or coastal areas requiring strict waterproofing (like water tanks or curved roofs).",
      realProject: { name: "The Menil Collection Roof (Texas, USA)", link: "https://www.google.com/search?q=Menil+Collection+Ferrocement+Roof+Renzo+Piano&tbm=isch" },
      advantages: ["Uses only 20% of the material mass of standard reinforced concrete", "Highly flexible matrix, perfect for curved or organic designs", "Completely waterproof and crack-resistant when finished correctly"],
      disadvantages: ["Extremely labor-intensive to properly tie the complex wire mesh grids", "Curing humidity must be strictly monitored to prevent micro hairline fractures"],
      advancement: "Implementation of alkali-resistant glass-fiber reinforced polymers (GFRP) instead of traditional steel mesh prevents long-term oxidation and drastically reduces weight.",
      image: img2
    },
    {
      title: "Rammed Earth",
      description: "A monolithic structural wall material created by heavily compacting a damp mixture of subsoil, sand, gravel, and clay directly between temporary formwork.",
      preferable: "Most effective in environments with high diurnal temperature swings (blistering hot days, freezing nights) like deserts.",
      realProject: { name: "Nk'Mip Desert Cultural Centre (Canada)", link: "https://www.google.com/search?q=Nk%27Mip+Desert+Cultural+Centre+Rammed+Earth&tbm=isch" },
      advantages: ["Creates massive walls with incredibly high thermal resistance", "Virtually zero carbon emissions associated with production", "Extremely durable architecture, capable of lasting centuries"],
      disadvantages: ["Technically a poor insulator in freezing climates without a central insulation core", "Highly vulnerable to continuous water erosion without proper roof overhangs"],
      advancement: "The introduction of automated pneumatic tamping tools and 3D-printed formwork enables faster, highly precise construction of complex geometries.",
      image: img3
    },
    {
      title: "Bamboo",
      description: "One of the fastest-growing vascular plants on Earth possessing an incredibly high tensile strength, making it an exceptional natural replacement for steel reinforcement and structural pillars.",
      preferable: "Tropical and subtropical climates with high humidity where bamboo natively thrives and replaces rust-prone steel.",
      realProject: { name: "Green School (Bali, Indonesia)", link: "https://www.google.com/search?q=Green+School+Bali+Bamboo+Architecture&tbm=isch" },
      advantages: ["Rapidly renewable and capable of being re-harvested every 3 to 5 years", "Unmatched strength-to-weight ratio", "Acts as a major natural carbon sink during its growth phase"],
      disadvantages: ["Highly susceptible to beetles and fungal rot if not chemically treated immediately", "Inconsistent natural diameters make standardizing architectural joins inherently difficult"],
      advancement: "Cross-Laminated Bamboo (CLB) and advanced thermal-modification processes have been developed to eliminate pest vulnerability and standard structural warping.",
      image: img4
    },
    {
      title: "Fly Ash Bricks",
      description: "Manufactured using fly ash (a fine particulate byproduct from coal power plants) combined with sand and water. This turns a hazardous industrial waste product into a robust building material.",
      preferable: "High moisture and heavy load-bearing zones (e.g., humid continental zones where traditional clay fails over time).",
      realProject: { name: "Infosys Eco-friendly Campuses (India)", link: "https://www.google.com/search?q=Infosys+Campuses+Fly+Ash+Bricks+Green+Building&tbm=isch" },
      advantages: ["Effectively upcycles toxic industrial waste from landfills", "Lighter and significantly stronger than standard red clay bricks", "Highly uniform shapes reduce the volume of mortar required for joints"],
      disadvantages: ["May leach trace heavy metals depending largely on the specific coal source utilized", "Experiences a significantly longer curing time compared to kiln-fired alternatives"],
      advancement: "Advanced geopolymers are now fully replacing the remaining structural cement binders, bringing the total carbon footprint of the brick to net-zero.",
      image: img5
    },
    {
      title: "Hempcrete",
      description: "A bio-composite material precisely blended from the inner woody core of the hemp plant (hurd) and mixed with a lime-based binder, acting primarily as a breathable insulation layer.",
      preferable: "Temperate and cold climates requiring heavy, breathable insulation without the need for structural load-bearing capacity.",
      realProject: { name: "Flat House by Practice Architecture (UK)", link: "https://www.google.com/search?q=Flat+House+Practice+Architecture+Hempcrete&tbm=isch" },
      advantages: ["A carbon-negative material that absorbs atmospheric CO2", "Excellent natural humidity and moisture regulation", "Highly fire-retardant and completely pest-resistant"],
      disadvantages: ["Possesses absolutely zero structural load-bearing capacity", "Requires an incredibly long on-site drying timeline in humid climates"],
      advancement: "Prefabricated, interlocking, load-bearing hempcrete structural blocks and panels are now being factory-produced for rapid, zero-waste site assembly.",
      image: img6
    },
    {
      title: "Recycled Steel",
      description: "Scrap and recycled steel beams are repurposed or melted down. Processing recycled steel skips the virgin iron-ore mining phase entirely while retaining 100% of its critical tensile properties.",
      preferable: "Commercial high-rises and severe earthquake fault zones globally requiring immense tensile elasticity.",
      realProject: { name: "Salesforce Tower (San Francisco, USA)", link: "https://www.google.com/search?q=Salesforce+Tower+Recycled+Steel+Construction&tbm=isch" },
      advantages: ["Reduces overarching energy consumption by up to 75%", "Retains an immense load-bearing capacity standard across all major construction", "Can be infinitely recycled without chemical degradation"],
      disadvantages: ["Extremely high thermal conductivity creates massive internal thermal bridging problems", "Highly susceptible to rapid oxidation and corrosion without expensive galvanization"],
      advancement: "Next-generation Electric Arc Furnaces (EAF) are now being powered by 100% renewable energy grids, enabling the production of 'Green Steel'.",
      image: img7
    },
    {
      title: "Cob",
      description: "An ancient earthen composite building material consisting of clay, sand, straw, and water, which is hand-sculpted into thick, load-bearing structural walls without formwork.",
      preferable: "Extremely arid zones or severely dry temperate climates where thick walls have ample time to cure without monsoon interference.",
      realProject: { name: "Kevin McCabe's Cob Citadel (England)", link: "https://www.google.com/search?q=Kevin+McCabe+Cob+House+Citadel&tbm=isch" },
      advantages: ["Readily accommodates beautifully curved, organic architecture", "Virtually zero raw material and processing expenses", "Straw acts as a natural, highly effective tensile reinforcement matrix"],
      disadvantages: ["A tremendously labor-intensive and slow construction speed", "Walls take several months to fully dehydrate and stabilize in non-arid climates"],
      advancement: "Automated cob 3D printing arrays and mechanized mixing centrifuges are currently revolutionizing the speed and structural consistency of large-scale cob projects.",
      image: img8
    },
    {
      title: "Reclaimed Wood",
      description: "Historical wood salvaged from abandoned barns, factories, or demolished structural frames that is re-milled, treated, and repurposed for premium flooring, siding, and structural beams.",
      preferable: "High-end residential interiors and dry mountainous climates where historical natural aesthetics are highly prioritized.",
      realProject: { name: "The Kendeda Building (Georgia Tech, USA)", link: "https://www.google.com/search?q=Kendeda+Building+Reclaimed+Wood&tbm=isch" },
      advantages: ["Actively prevents the deforestation of old-growth timber", "Possesses tighter grain patterns and significantly higher density than freshly harvested wood", "Possesses a highly sought-after aesthetic and historical patina"],
      disadvantages: ["Can be exceedingly expensive due to the careful manual extraction process", "Often contains hidden hardware or toxic lead paint requiring hazardous removal protocols"],
      advancement: "Advanced thermal preservation treatment (Thermowood technology) uses heat and steam to alter the cellular structure of salvaged wood, making it permanently rot-proof.",
      image: img9
    },
    {
      title: "Cross-Laminated Timber (CLT)",
      description: "A highly engineered wood panel product manufactured by gluing multiple layers of solid-sawn lumber perpendicularly together. It provides industrial-grade structural rigidity.",
      preferable: "Mid-rise urban infill projects looking to replace concrete operations where rapid speed and low weight are critical.",
      realProject: { name: "Mjøstårnet - Tallest Timber Building (Norway)", link: "https://www.google.com/search?q=Mj%C3%B8st%C3%A5rnet+Norway+CLT+Timber&tbm=isch" },
      advantages: ["Sequesters massive amounts of carbon inside the building structure", "Allows for extremely fast prefabricated installation cycles", "Provides the same structural integrity as concrete but at a fraction of the weight"],
      disadvantages: ["Vulnerable to severe systemic moisture damage if exposed during installation", "Acoustic sound transmission can be significantly higher than heavy concrete flooring"],
      advancement: "Implementation of enhanced fire-retardant bio-resins has successfully allowed Mass-Timber high-rises reaching over 18 stories to pass strict international fire codes.",
      image: img10
    },
    {
      title: "Mycelium Bricks",
      description: "An advanced organic building block grown utilizing the vegetative fungal root structure (mycelium) feeding on residual agricultural plant waste to bind it into a solid matrix.",
      preferable: "Strictly indoor, dry environments targeting specialized acoustic insulation or safe, degradable non-structural partitions.",
      realProject: { name: "Hy-Fi Tower at MoMA PS1 (New York, USA)", link: "https://www.google.com/search?q=Hy-Fi+Tower+MoMA+PS1+Mycelium&tbm=isch" },
      advantages: ["A 100% biodegradable material that can be returned to the soil", "Grown directly in molds within days without any external thermal energy input", "An exceptional acoustic dampener and thermal insulator"],
      disadvantages: ["Currently holds zero capability to bear vertical architectural structural loads", "Breaks down and decays rapidly if exposed directly to outdoor rain and humidity"],
      advancement: "Genetically selected fungal strains have been engineered to grow faster and achieve compressive strengths capable of bearing structural loads in single-story setups.",
      image: img11
    },
    {
      title: "Cork",
      description: "Harvested sustainably from the thick bark of oak trees without physically harming the host tree. Because the bark naturally regenerates, it is an entirely renewable insulation resource.",
      preferable: "High-humidity indoor environments (bathrooms, kitchens) and professional acoustic engineering studios.",
      realProject: { name: "The Cork House (Berkshire, UK)", link: "https://www.google.com/search?q=The+Cork+House+Matthew+Barnett+Howland&tbm=isch" },
      advantages: ["Incredible natural acoustic dampening and vibration absorption", "Naturally hypoallergenic and completely resistant to invasive mold", "Bark represents a renewable cycle every 9 years for the life of the tree"],
      disadvantages: ["Extremely limited global geographical supply chain makes it a luxury material", "Vulnerable to severe UV degradation and bleaching if utilized externally without sealants"],
      advancement: "State-of-the-art Expanded Insulation Cork Board (ICB) exposes the bark to superheated steam, expanding the cells and binding them tightly using only the cork's natural resins.",
      image: img12
    },
    {
      title: "Low-Carbon Concrete (Geopolymer)",
      description: "Specialized concrete mixtures that replace large portions, or the entirety, of energy-intensive Portland cement with industrial aluminosilicate byproducts like slag or fly ash.",
      preferable: "Massive industrial infrastructure, marine environments, and heavy residential foundations located universally.",
      realProject: { name: "Brisbane West Wellcamp Airport (Australia)", link: "https://www.google.com/search?q=Brisbane+West+Wellcamp+Airport+Geopolymer+Concrete&tbm=isch" },
      advantages: ["Reduces the massive carbon footprint typically associated with the concrete industry", "Can be chemically engineered to be stronger and more corrosion-resistant", "Cures entirely at room temperature safely"],
      disadvantages: ["Requires highly specialized chemical training for contractors to pour correctly", "The local geographical availability of essential precursor materials like raw slag wildly varies"],
      advancement: "The cutting-edge integration of Carbon Capture Injection (e.g., CarbonCure process) actively traps and permanently mineralizes waste CO2 directly inside the curing concrete.",
      image: img13
    }
  ];

  return (
    <div className="edu-page animate-fade-in">
      <div className="edu-hero gradient-bg" style={{ background: 'linear-gradient(135deg, var(--color-secondary), #a85632)' }}>
        <div className="container">
          <h1>Comprehensive Global Materials Directory</h1>
          <p>An exhaustive, professionally balanced breakdown of low-carbon building materials used worldwide.</p>
        </div>
      </div>

      <div className="container edu-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '3rem' }}>
        {materials.map((mat, index) => (
          <div className="edu-card glass" key={index} style={{ padding: '2rem', borderRadius: 'var(--rounded-lg)', display: 'flex', flexDirection: 'column' }}>
            <div className="edu-image-wrapper" style={{ height: '300px', marginBottom: '1.5rem', borderRadius: 'var(--rounded-md)', overflow: 'hidden' }}>
              <img src={mat.image} alt={mat.title} className="edu-image" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div className="edu-details" style={{ flexGrow: 1 }}>
              <h2 style={{ color: 'var(--color-secondary)', fontSize: '1.8rem', marginBottom: '1rem' }}>{mat.title}</h2>
              <p className="edu-description" style={{ marginBottom: '1.25rem', lineHeight: '1.7' }}>{mat.description}</p>
              
              {/* Preferable Where to use */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--rounded-md)', marginBottom: '1rem', border: '1px solid var(--color-border)' }}>
                 <MapPin color="var(--color-secondary)" size={20} style={{ minWidth: '20px', marginTop: '2px' }} />
                 <p style={{ fontSize: '0.95rem', margin: 0 }}><strong>Where to use:</strong> {mat.preferable}</p>
              </div>

              {/* Real World Project */}
              <a href={mat.realProject.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(195,106,66,0.1)', padding: '0.75rem 1rem', borderRadius: 'var(--rounded-md)', marginBottom: '1.5rem', textDecoration: 'none', color: 'var(--color-secondary)', fontWeight: 600, border: '1px solid rgba(195,106,66,0.3)', transition: 'all 0.3s ease' }} className="real-project-btn">
                 <ExternalLink size={18} />
                 <span>Real World Example: {mat.realProject.name}</span>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--color-secondary)' }}>Advantages</h3>
                  <ul className="edu-list">
                    {mat.advantages.map((adv, i) => (
                      <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <CheckCircle2 color="var(--color-secondary)" size={18} strokeWidth={2.5} style={{ minWidth: '18px', marginTop: '3px' }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: '#c53030' }}>Disadvantages</h3>
                  <ul className="edu-list">
                    {mat.disadvantages.map((dis, i) => (
                      <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <XCircle color="#fc8181" size={18} strokeWidth={2.5} style={{ minWidth: '18px', marginTop: '3px' }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {mat.advancement && (
                <div style={{ marginTop: 'auto', padding: '1.25rem', backgroundColor: 'rgba(195,106,66,0.06)', borderRadius: 'var(--rounded-md)', borderLeft: '4px solid var(--color-secondary)' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.8rem' }}>Recent Advancement</strong> 
                    {mat.advancement}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
