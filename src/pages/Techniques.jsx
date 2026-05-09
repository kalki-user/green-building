import { CheckCircle2, XCircle, MapPin, ExternalLink } from 'lucide-react';
import './Techniques.css';

import img1 from '../assets/tech-img/1-rat.png';
import img2 from '../assets/tech-img/2-fsr.png';
import img3 from '../assets/tech-img/3-a&v.png';
import img4 from '../assets/tech-img/4-ebc.png';
import img5 from '../assets/tech-img/5-psd.png';
import img6 from '../assets/tech-img/6-sbc.png';
import img7 from '../assets/tech-img/7-rwhs.png';
import img8 from '../assets/tech-img/8-gr.png';
import img9 from '../assets/tech-img/9-grs.png';
import img10 from '../assets/tech-img/10-m&pc.png';
import img11 from '../assets/tech-img/11-x.png';
import img12 from '../assets/tech-img/12-pps.png';
import img13 from '../assets/tech-img/13-ghp.png';

const Techniques = () => {
  const techniques = [
    {
      title: "Rat-Trap Bond Masonry",
      description: "An incredibly efficient structural brick masonry methodology where bricks are deliberately laid on edge (vertically), creating a hollow interlocking inner void system.",
      preferable: "Hot tropical climates where intense afternoon heat needs to be trapped within the wall cavity before radiating into the interior.",
      realProject: { name: "Centre for Development Studies (Trivandrum)", link: "https://www.google.com/search?q=Centre+for+Development+Studies+Trivandrum+Rat+Trap+Bond&tbm=isch" },
      advantages: ["Substantially reduces massive brick and cement expenditures by nearly 25%", "The trapped air acts as a superior inherent thermal and acoustic insulator", "Brings forth a highly sought-after, aesthetically pleasing exposed brick finish"],
      disadvantages: ["Mandates highly skilled masons familiar specifically with executing this complex bond geometry", "Not suitable for load-bearing walls in extreme seismic fault lines without supplemental RCC framework"],
      advancement: "Architects are now utilizing parametric computational modeling to perfectly optimize the internal wall cavity placement in response to high structural wind loads.",
      image: img1
    },
    {
      title: "Filler Slab Roofing",
      description: "A specialized roofing framework designed to replace the structurally redundant lower 'tension zone' of a concrete slab with extremely lightweight, low-cost filler components like terracotta.",
      preferable: "Regions fighting massive seasonal heat waves where standard heavy concrete roof slabs otherwise radiate unbearable heat downwards.",
      realProject: { name: "COSTFORD Architectural Projects (Kerala)", link: "https://www.google.com/search?q=COSTFORD+Filler+Slab+Roofing+Laurie+Baker&tbm=isch" },
      advantages: ["Successfully reduces total cement concrete utilization by up to 20%", "Structurally decreases high-carbon steel reinforcement demands by nearly 30%", "Naturally enhances the overall thermal insulation profile of the ceiling"],
      disadvantages: ["Exceedingly difficult to drill into or permanently modify post-construction", "Requires meticulous mathematical alignment during pouring to strictly avoid structural buckling"],
      advancement: "Contractors are integrating recycled industrial plastics and massive 3D-printed hollow void-formers specifically designed alongside structural algorithms to replace standard clay pots.",
      image: img2
    },
    {
      title: "Arches and Vaults",
      description: "A time-honored geometric construction strategy completely eliminating the mechanical need for energy-intensive steel and concrete lintels by perfectly distributing compressive force vectors.",
      preferable: "Geographies historically lacking heavy lumber for thick lintels, or properties requiring immense compression strength spanned over wide communal spaces.",
      realProject: { name: "Mapungubwe Interpretation Centre (South Africa)", link: "https://www.google.com/search?q=Mapungubwe+Interpretation+Centre+Vaults&tbm=isch" },
      advantages: ["Functions securely with zero steel reinforcement or thick RCC lintel spans", "Represents an extremely high margin of long-term structural integrity", "Highly cost-effective compared to traditional flat concrete beam spans"],
      disadvantages: ["Mandates absolutely massive external buttressing walls to counteract extreme lateral outward thrust", "Executing the heavily curved formwork requires advanced mathematical carpentry skills"],
      advancement: "The integration of drone-based precise bricklaying grids and Augmented Reality (AR) headsets now allows human masons to perfectly execute highly complex vault geometries.",
      image: img3
    },
    {
      title: "Earthbag Construction",
      description: "A radically simple, resilient methodology where heavy-duty polypropylene bags are continuously filled with native subsoil, forcefully tamped solid, and secured using barbed wire tensile courses.",
      preferable: "Extreme hazard zones highly prone to severe geological earthquakes, ballistic impacts, or devastating seasonal flooding.",
      realProject: { name: "Cal-Earth Institute Domes (California, USA)", link: "https://www.google.com/search?q=Cal-Earth+Institute+Superadobe+Domes&tbm=isch" },
      advantages: ["Demonstrates phenomenal endurance against severe earthquakes, floods, and ballistic impacts", "Bypasses heavy machinery, allowing construction via unskilled human labor forces", "Easily manipulates into structural domes and fluid organic architecture"],
      disadvantages: ["Backbreaking physical labor due to the manual compaction of thousands of pounds of dense earth", "Walls are immensely thick, stripping away significant architectural square footage from the floorplan"],
      advancement: "Modern 'Superadobe' implementations employ a continuous structural tubing system rather than individual bags, layered alongside industrial geogrid stabilization mats.",
      image: img4
    },
    {
      title: "Passive Solar Design",
      description: "A holistic architectural physics approach focusing on strategic window placement, structural shade, and interior thermal mass to automatically collect and distribute solar energy passively.",
      preferable: "Temperate-to-cold climates (Northern/Southern latitudes) experiencing high structural heating demands but still receiving clear winter sunlight.",
      realProject: { name: "Zion National Park Visitor Center (Utah, USA)", link: "https://www.google.com/search?q=Zion+National+Park+Visitor+Center+Passive+Solar&tbm=isch" },
      advantages: ["Operates indefinitely with absolutely zero mechanical or electrical actuation systems", "Drastically mitigates, or completely eliminates, lifetime HVAC (heating and cooling) utility bills", "Relies entirely on architectural intelligence rather than mechanical brute force"],
      disadvantages: ["Mandates brutally strict building geometries heavily dictating exactly which directions the home must face", "Even slight miscalculations in glazing angles can guarantee severe, torturous summer overheating phenomena"],
      advancement: "Integration of smart-home automated shading tracking the sun's azimuth, combined with Phase-Changing Materials (PCM) embedded seamlessly into drywalls to store massive latent heat.",
      image: img5
    },
    {
      title: "Straw Bale Construction",
      description: "Leverages highly compressed rectangular bales of agricultural plant straw (such as wheat or oat) as foundational hyper-insulating structural blocks, heavily encased in earthen lime plaster.",
      preferable: "Frigid, strictly dry climates or rural agricultural flatlands seeking maximum R-value insulation against aggressive freezing winds.",
      realProject: { name: "Maya Guesthouse (Switzerland)", link: "https://www.google.com/search?q=Maya+Guesthouse+Switzerland+Straw+Bale&tbm=isch" },
      advantages: ["Delivers extraordinary hyper-insulation (achieving thermal R-values deeply exceeding modern regulations)", "Actively sequesters and repurposes volatile agricultural waste", "Renders buildings inherently fire-resistant via oxygen deprivation when correctly plastered"],
      disadvantages: ["Disastrously vulnerable to total structural rot if severely exposed to heavy moisture during the initial building grid sequence", "Generates walls almost two feet thick, necessitating severely extended roof overhang geometry"],
      advancement: "Agri-technology plants now process Jumbo Bales using precision high-pressure hydraulic compaction, guaranteeing exact dimensions suitable for rigid multi-story commercial building codes.",
      image: img6
    },
    {
      title: "Rainwater Harvesting Systems",
      description: "The targeted, systemic collection of precipitation runoff from roofing arrays, meticulously diverted through localized filtration complexes directly into massive subsurface cisterns.",
      preferable: "Monsoon regions and highly cyclical precipitation climates lacking constant, stable municipal freshwater supply lines.",
      realProject: { name: "Pixel Building (Melbourne, Australia)", link: "https://www.google.com/search?q=Pixel+Building+Melbourne+Rainwater+Harvesting&tbm=isch" },
      advantages: ["Fosters profound independence by establishing an off-grid resilient auxiliary water supply", "Dramatically curtails severe surface topsoil erosion surrounding foundational footings", "Provides a fundamentally pure, low-mineral water source ideal for delicate indoor hydroponics"],
      disadvantages: ["Demands a highly expensive upfront installation cost for deep bedrock excavation and polymer cisterns", "Necessitates continuous, unrelenting filtration mesh maintenance to absolutely prevent deadly stagnation"],
      advancement: "Advanced telemetry units now utilize smart Internet-of-Things (IoT) sensors to automatically preemptively discharge or divert tanks based on incoming real-time storm cloud forecasts.",
      image: img7
    },
    {
      title: "Green Roofs (Living Roofs)",
      description: "The systemic transformation of a barren structural rooftop into a fully vegetated, living micro-biome planted over highly engineered waterproofing, drainage, and dense root-barrier membranes.",
      preferable: "Dense urban metropolitan grids actively fighting the 'Urban Heat Island' effect and struggling with severe, overwhelming storm-drain runoff.",
      realProject: { name: "California Academy of Sciences (San Francisco)", link: "https://www.google.com/search?q=California+Academy+of+Sciences+Green+Roof&tbm=isch" },
      advantages: ["Aggressively absorbs and mitigates heavy municipal surface flooding caused by rapid storm runoff", "Shields the building envelope from intense UV degradation and temperature spikes", "Crucial in defeating the blistering 'Urban Heat Island' thermal effect in congested metropolitan grids"],
      disadvantages: ["Generates staggering dead-weight limits, forcing the underlying load-bearing beams to be catastrophically over-engineered", "A constant battle of horticultural maintenance to keep the plant species from overtaking deep mechanical conduits"],
      advancement: "Implementation of hybrid 'Biosolar' Roofs natively combining shallow modular living plant trays directly surrounding highly efficient thin-film photovaltaic solar panels.",
      image: img8
    },
    {
      title: "Greywater Recycling Systems",
      description: "Intelligent secondary plumbing networks designed to capture slightly used surface water from residential sinks and showers, treating it mechanically and biologically for localized immediate reuse.",
      preferable: "Severe drought-prone regions (like the Sub-Saharan or global Southwest) legally commanding strict agricultural/residential water conservation.",
      realProject: { name: "Solaire Building (New York, USA)", link: "https://www.google.com/search?q=Solaire+Building+New+York+Water+Recycling&tbm=isch" },
      advantages: ["Slashes domestic fresh municipal water demands by tens of thousands of gallons annually", "Considerably mitigates the heavy chemical filtration burden placed on civic sewage infrastructures", "Integrates flawlessly into automated indoor botanical planter beds for silent bio-filtration"],
      disadvantages: ["Fundamentally requires a secondary, completely isolated retrofitted piping system mapping across the entire edifice", "Demands rigorous chemical and mechanical filter flushing to permanently prevent dangerous anaerobic bio-fouling issues"],
      advancement: "Cutting-edge integration of ultra-compact Membrane Bioreactors (MBR) and solid-state UV-LED disinfection chambers enabling greywater to reach near-potable safe reuse standards immediately.",
      image: img9
    },
    {
      title: "Modular & Prefabricated Construction",
      description: "A highly controlled industrial methodology wherein immense architectural components are fully constructed in sterile off-site factories, and subsequently assembled precisely on the designated land plot.",
      preferable: "Remote, physically hard-to-reach locations with extremely short building seasons (e.g., Arctic circles) or congested urban lots lacking material storage space.",
      realProject: { name: "Mini Sky City (China) - Built in 19 Days", link: "https://www.google.com/search?q=Mini+Sky+City+Broad+Sustainable+Building&tbm=isch" },
      advantages: ["Results in the near-total elimination of expensive arbitrary material waste typical of field sites", "Guarantees mathematically tight weather-sealing and zero atmospheric moisture trapping", "Slashes highly disruptive, noisy on-site operational logistics by several months"],
      disadvantages: ["Mandates highly expensive, sprawling heavy-crane logistics and deeply wide road access routes for transit delivery", "Physically restricts architectural layouts, harshly limiting highly curved geometric flow or organic designs"],
      advancement: "Pioneering AI algorithms now dictate fully automated robotic 3D-printing arms and volumetric laser-cutting fabrication units, achieving sub-millimeter precision in massive steel nodes.",
      image: img10
    },
    {
      title: "Xeriscaping",
      description: "An advanced topographical engineering methodology explicitly focusing on rigorous water conservation via the planting of deep-rooted native flora and the severe reduction of high-maintenance turf grass.",
      preferable: "Desert and semi-arid geographies burdened with extreme physical water scarcity and legally enforced hose-watering bans.",
      realProject: { name: "Desert Botanical Garden (Phoenix, USA)", link: "https://www.google.com/search?q=Desert+Botanical+Garden+Phoenix+Xeriscaping&tbm=isch" },
      advantages: ["Mechanically eliminates the extreme requirement for wasteful external supplemental irrigation grids", "Prevents the vast carbon footprint associated with municipal lawn mowing and chemical fertilizers", "Aggressively restores native soil microbiomes decimated by traditional suburban construction"],
      disadvantages: ["Saddled with excruciatingly high initial labor pulling vast weed incursions during the delicate early soil establishment phase", "Visually eliminates traditional soft turf grass landscapes, frequently frustrating family-oriented play mechanics"],
      advancement: "Employment of deep subterranean precision drip-line networks completely governed by algorithmic AI cross-referencing live local evapotranspiration satellite modeling.",
      image: img11
    },
    {
      title: "Permeable Paving Surfaces",
      description: "The calculated installation of robust, micro-porous infrastructure materials across driveways and communal parking grids to guarantee rapid rainwater infiltration directly into the natural sub-surface aquifer.",
      preferable: "Dense heavily paved suburban zones experiencing massive annual rainfall, facing overwhelming storm-drain capacities and flash flooding triggers.",
      realProject: { name: "Chicago Green Alleys Program", link: "https://www.google.com/search?q=Chicago+Green+Alleys+Permeable+Paving&tbm=isch" },
      advantages: ["Continuously recharges the deep planetary groundwater reserves passively and consistently", "Eliminates the expensive requirement for massive interconnected municipal storm-drain networks", "Actively bio-filters deadly motor oil and heavy smog particulates directly inside the crushed stone sub-base"],
      disadvantages: ["Vulnerable to catastrophic surface clogging from fine silts, requiring recurring industrial-grade heavy vacuum sweeping", "Inherently maintains a weaker sheer modulus matrix than entirely poured solid concrete slab systems"],
      advancement: "The commercial breakthrough of photocatalytic pervious concrete infused with titanium dioxide, uniquely capable of breaking down atmospheric nitrogen oxide smog (NO2) utilizing sunlight.",
      image: img12
    },
    {
      title: "Geothermal Heat Pumps",
      description: "A deeply buried closed-loop thermal conduit system specifically engineered to leverage the persistent, stable temperature of the Earth's subterranean mass to rapidly heat or chill building networks.",
      preferable: "High-value permanent geographies featuring deep, stable soil layers experiencing brutal structural temperature extremes (both blizzards and heatwaves).",
      realProject: { name: "The Crystal - Siemens Urban Sustainability Centre (London)", link: "https://www.google.com/search?q=The+Crystal+London+Geothermal+Heating&tbm=isch" },
      advantages: ["Clinically proven as the most staggeringly energy-efficient HVAC technology currently mankind possesses", "Exploits the planetary crust as a massive, completely free cyclical thermal heat-sink", "Furnishes completely silent, unnoticeable, emission-free severe climate control"],
      disadvantages: ["Staggeringly exorbitant upfront capital expenditure specifically concerning heavy mechanical bedrock excavation drilling", "Completely unfeasible on shallow rocky substrates or small localized heavy-urban plots lacking drilling clearance"],
      advancement: "Modern integration of highly adaptive Variable Refrigerant Flow (VRF) technology coupled closely with cutting-edge direct-exchange copper loops utilizing non-toxic supercritical CO2.",
      image: img13
    }
  ];

  return (
    <div className="edu-page animate-fade-in">
      <div className="edu-hero gradient-bg">
        <div className="container">
          <h1>Global Techniques Directory</h1>
          <p>An exhaustive, professionally balanced breakdown of the vital methodologies used in sustainable building.</p>
        </div>
      </div>

      <div className="container edu-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '3rem', paddingBottom: '6rem' }}>
        {techniques.map((tech, index) => (
          <div className="edu-card glass" key={index} style={{ padding: '2rem', borderRadius: 'var(--rounded-lg)', display: 'flex', flexDirection: 'column' }}>
            <div className="edu-image-wrapper" style={{ height: '300px', marginBottom: '1.5rem', borderRadius: 'var(--rounded-md)', overflow: 'hidden' }}>
              <img src={tech.image} alt={tech.title} className="edu-image" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div className="edu-details" style={{ flexGrow: 1 }}>
              <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>{tech.title}</h2>
              <p className="edu-description" style={{ marginBottom: '1.25rem', lineHeight: '1.7' }}>{tech.description}</p>
              
              {/* Preferable Where to use */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--rounded-md)', marginBottom: '1rem', border: '1px solid var(--color-border)' }}>
                 <MapPin color="var(--color-primary)" size={20} style={{ minWidth: '20px', marginTop: '2px' }} />
                 <p style={{ fontSize: '0.95rem', margin: 0 }}><strong>Where to use:</strong> {tech.preferable}</p>
              </div>

              {/* Real World Project */}
              <a href={tech.realProject.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(26,58,50,0.1)', padding: '0.75rem 1rem', borderRadius: 'var(--rounded-md)', marginBottom: '1.5rem', textDecoration: 'none', color: 'var(--color-primary)', fontWeight: 600, border: '1px solid rgba(26,58,50,0.3)', transition: 'all 0.3s ease' }} className="real-project-btn">
                 <ExternalLink size={18} />
                 <span>Real World Example: {tech.realProject.name}</span>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--color-primary)' }}>Advantages</h3>
                  <ul className="edu-list">
                    {tech.advantages.map((adv, i) => (
                      <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <CheckCircle2 color="var(--color-primary)" size={18} strokeWidth={2.5} style={{ minWidth: '18px', marginTop: '3px' }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: '#c53030' }}>Disadvantages</h3>
                  <ul className="edu-list">
                    {tech.disadvantages.map((dis, i) => (
                      <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <XCircle color="#fc8181" size={18} strokeWidth={2.5} style={{ minWidth: '18px', marginTop: '3px' }} />
                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {tech.advancement && (
                <div style={{ marginTop: 'auto', padding: '1.25rem', backgroundColor: 'rgba(26,58,50,0.06)', borderRadius: 'var(--rounded-md)', borderLeft: '4px solid var(--color-primary)' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.8rem' }}>Recent Advancement</strong> 
                    {tech.advancement}
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

export default Techniques;
