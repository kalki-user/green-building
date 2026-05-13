// --- Data ---
const materials = [
    {
      title: "Stabilized Mud Blocks (SMB)",
      description: "A highly compact earthen material formed by mixing locally sourced mud with a fractional amount of cement or lime. The soil combination is compressed naturally without energy-intensive kiln firing.",
      preferable: "Ideal for dry, arid, and semi-arid climates where external rainfall erosion is low.",
      realProject: { name: "Auroville Earth Institute Projects (India)", link: "https://www.google.com/search?q=Auroville+Earth+Institute+SMB+architecture&tbm=isch" },
      advantages: ["Significantly lower embodied energy than conventional fired bricks", "Exceptional thermal regulation and mass storage", "Eliminates transportation emissions when manufactured on-site"],
      disadvantages: ["Susceptible to extreme lateral shear forces without added reinforcement", "Requires highly precise local soil composition testing before use"],
      advancement: "Modern hydraulic block presses and nano-polymer soil stabilizers have drastically increased the structural load-bearing capacity of SMBs to match or exceed high-fired clay bricks.",
      image: "images/materials/1-smb.png"
    },
    {
      title: "Ferro-Cement Elements",
      description: "A highly versatile thin-shell material consisting of a dense, rich cement mortar applied over layers of wire mesh reinforcement. The dispersed reinforcement allows it to behave cohesively without fracturing.",
      preferable: "Excellent for monsoon-prone regions or coastal areas requiring strict waterproofing (like water tanks or curved roofs).",
      realProject: { name: "The Menil Collection Roof (Texas, USA)", link: "https://www.google.com/search?q=Menil+Collection+Ferrocement+Roof+Renzo+Piano&tbm=isch" },
      advantages: ["Uses only 20% of the material mass of standard reinforced concrete", "Highly flexible matrix, perfect for curved or organic designs", "Completely waterproof and crack-resistant when finished correctly"],
      disadvantages: ["Extremely labor-intensive to properly tie the complex wire mesh grids", "Curing humidity must be strictly monitored to prevent micro hairline fractures"],
      advancement: "Implementation of alkali-resistant glass-fiber reinforced polymers (GFRP) instead of traditional steel mesh prevents long-term oxidation and drastically reduces weight.",
      image: "images/materials/2-fce.png"
    },
    {
      title: "Rammed Earth",
      description: "A monolithic structural wall material created by heavily compacting a damp mixture of subsoil, sand, gravel, and clay directly between temporary formwork.",
      preferable: "Most effective in environments with high diurnal temperature swings (blistering hot days, freezing nights) like deserts.",
      realProject: { name: "Nk'Mip Desert Cultural Centre (Canada)", link: "https://www.google.com/search?q=Nk%27Mip+Desert+Cultural+Centre+Rammed+Earth&tbm=isch" },
      advantages: ["Creates massive walls with incredibly high thermal resistance", "Virtually zero carbon emissions associated with production", "Extremely durable architecture, capable of lasting centuries"],
      disadvantages: ["Technically a poor insulator in freezing climates without a central insulation core", "Highly vulnerable to continuous water erosion without proper roof overhangs"],
      advancement: "The introduction of automated pneumatic tamping tools and 3D-printed formwork enables faster, highly precise construction of complex geometries.",
      image: "images/materials/3-re.png"
    },
    {
      title: "Bamboo",
      description: "One of the fastest-growing vascular plants on Earth possessing an incredibly high tensile strength, making it an exceptional natural replacement for steel reinforcement and structural pillars.",
      preferable: "Tropical and subtropical climates with high humidity where bamboo natively thrives and replaces rust-prone steel.",
      realProject: { name: "Green School (Bali, Indonesia)", link: "https://www.google.com/search?q=Green+School+Bali+Bamboo+Architecture&tbm=isch" },
      advantages: ["Rapidly renewable and capable of being re-harvested every 3 to 5 years", "Unmatched strength-to-weight ratio", "Acts as a major natural carbon sink during its growth phase"],
      disadvantages: ["Highly susceptible to beetles and fungal rot if not chemically treated immediately", "Inconsistent natural diameters make standardizing architectural joins inherently difficult"],
      advancement: "Cross-Laminated Bamboo (CLB) and advanced thermal-modification processes have been developed to eliminate pest vulnerability and standard structural warping.",
      image: "images/materials/4-bamboo.png"
    },
    {
      title: "Fly Ash Bricks",
      description: "Manufactured using fly ash (a fine particulate byproduct from coal power plants) combined with sand and water. This turns a hazardous industrial waste product into a robust building material.",
      preferable: "High moisture and heavy load-bearing zones (e.g., humid continental zones where traditional clay fails over time).",
      realProject: { name: "Infosys Eco-friendly Campuses (India)", link: "https://www.google.com/search?q=Infosys+Campuses+Fly+Ash+Bricks+Green+Building&tbm=isch" },
      advantages: ["Effectively upcycles toxic industrial waste from landfills", "Lighter and significantly stronger than standard red clay bricks", "Highly uniform shapes reduce the volume of mortar required for joints"],
      disadvantages: ["May leach trace heavy metals depending largely on the specific coal source utilized", "Experiences a significantly longer curing time compared to kiln-fired alternatives"],
      advancement: "Advanced geopolymers are now fully replacing the remaining structural cement binders, bringing the total carbon footprint of the brick to net-zero.",
      image: "images/materials/5-fab.png"
    },
    {
      title: "Hempcrete",
      description: "A bio-composite material precisely blended from the inner woody core of the hemp plant (hurd) and mixed with a lime-based binder, acting primarily as a breathable insulation layer.",
      preferable: "Temperate and cold climates requiring heavy, breathable insulation without the need for structural load-bearing capacity.",
      realProject: { name: "Flat House by Practice Architecture (UK)", link: "https://www.google.com/search?q=Flat+House+Practice+Architecture+Hempcrete&tbm=isch" },
      advantages: ["A carbon-negative material that absorbs atmospheric CO2", "Excellent natural humidity and moisture regulation", "Highly fire-retardant and completely pest-resistant"],
      disadvantages: ["Possesses absolutely zero structural load-bearing capacity", "Requires an incredibly long on-site drying timeline in humid climates"],
      advancement: "Prefabricated, interlocking, load-bearing hempcrete structural blocks and panels are now being factory-produced for rapid, zero-waste site assembly.",
      image: "images/materials/6-hempcrate.png"
    },
    {
      title: "Recycled Steel",
      description: "Scrap and recycled steel beams are repurposed or melted down. Processing recycled steel skips the virgin iron-ore mining phase entirely while retaining 100% of its critical tensile properties.",
      preferable: "Commercial high-rises and severe earthquake fault zones globally requiring immense tensile elasticity.",
      realProject: { name: "Salesforce Tower (San Francisco, USA)", link: "https://www.google.com/search?q=Salesforce+Tower+Recycled+Steel+Construction&tbm=isch" },
      advantages: ["Reduces overarching energy consumption by up to 75%", "Retains an immense load-bearing capacity standard across all major construction", "Can be infinitely recycled without chemical degradation"],
      disadvantages: ["Extremely high thermal conductivity creates massive internal thermal bridging problems", "Highly susceptible to rapid oxidation and corrosion without expensive galvanization"],
      advancement: "Next-generation Electric Arc Furnaces (EAF) are now being powered by 100% renewable energy grids, enabling the production of 'Green Steel'.",
      image: "images/materials/7-rs.png"
    },
    {
      title: "Cob",
      description: "An ancient earthen composite building material consisting of clay, sand, straw, and water, which is hand-sculpted into thick, load-bearing structural walls without formwork.",
      preferable: "Extremely arid zones or severely dry temperate climates where thick walls have ample time to cure without monsoon interference.",
      realProject: { name: "Kevin McCabe's Cob Citadel (England)", link: "https://www.google.com/search?q=Kevin+McCabe+Cob+House+Citadel&tbm=isch" },
      advantages: ["Readily accommodates beautifully curved, organic architecture", "Virtually zero raw material and processing expenses", "Straw acts as a natural, highly effective tensile reinforcement matrix"],
      disadvantages: ["A tremendously labor-intensive and slow construction speed", "Walls take several months to fully dehydrate and stabilize in non-arid climates"],
      advancement: "Automated cob 3D printing arrays and mechanized mixing centrifuges are currently revolutionizing the speed and structural consistency of large-scale cob projects.",
      image: "images/materials/8-cob.png"
    },
    {
      title: "Reclaimed Wood",
      description: "Historical wood salvaged from abandoned barns, factories, or demolished structural frames that is re-milled, treated, and repurposed for premium flooring, siding, and structural beams.",
      preferable: "High-end residential interiors and dry mountainous climates where historical natural aesthetics are highly prioritized.",
      realProject: { name: "The Kendeda Building (Georgia Tech, USA)", link: "https://www.google.com/search?q=Kendeda+Building+Reclaimed+Wood&tbm=isch" },
      advantages: ["Actively prevents the deforestation of old-growth timber", "Possesses tighter grain patterns and significantly higher density than freshly harvested wood", "Possesses a highly sought-after aesthetic and historical patina"],
      disadvantages: ["Can be exceedingly expensive due to the careful manual extraction process", "Often contains hidden hardware or toxic lead paint requiring hazardous removal protocols"],
      advancement: "Advanced thermal preservation treatment (Thermowood technology) uses heat and steam to alter the cellular structure of salvaged wood, making it permanently rot-proof.",
      image: "images/materials/9-rwood.png"
    },
    {
      title: "Cross-Laminated Timber (CLT)",
      description: "A highly engineered wood panel product manufactured by gluing multiple layers of solid-sawn lumber perpendicularly together. It provides industrial-grade structural rigidity.",
      preferable: "Mid-rise urban infill projects looking to replace concrete operations where rapid speed and low weight are critical.",
      realProject: { name: "Mjøstårnet - Tallest Timber Building (Norway)", link: "https://www.google.com/search?q=Mj%C3%B8st%C3%A5rnet+Norway+CLT+Timber&tbm=isch" },
      advantages: ["Sequesters massive amounts of carbon inside the building structure", "Allows for extremely fast prefabricated installation cycles", "Provides the same structural integrity as concrete but at a fraction of the weight"],
      disadvantages: ["Vulnerable to severe systemic moisture damage if exposed during installation", "Acoustic sound transmission can be significantly higher than heavy concrete flooring"],
      advancement: "Implementation of enhanced fire-retardant bio-resins has successfully allowed Mass-Timber high-rises reaching over 18 stories to pass strict international fire codes.",
      image: "images/materials/10-clt.png"
    },
    {
      title: "Mycelium Bricks",
      description: "An advanced organic building block grown utilizing the vegetative fungal root structure (mycelium) feeding on residual agricultural plant waste to bind it into a solid matrix.",
      preferable: "Strictly indoor, dry environments targeting specialized acoustic insulation or safe, degradable non-structural partitions.",
      realProject: { name: "Hy-Fi Tower at MoMA PS1 (New York, USA)", link: "https://www.google.com/search?q=Hy-Fi+Tower+MoMA+PS1+Mycelium&tbm=isch" },
      advantages: ["A 100% biodegradable material that can be returned to the soil", "Grown directly in molds within days without any external thermal energy input", "An exceptional acoustic dampener and thermal insulator"],
      disadvantages: ["Currently holds zero capability to bear vertical architectural structural loads", "Breaks down and decays rapidly if exposed directly to outdoor rain and humidity"],
      advancement: "Genetically selected fungal strains have been engineered to grow faster and achieve compressive strengths capable of bearing structural loads in single-story setups.",
      image: "images/materials/11-mb.png"
    },
    {
      title: "Cork",
      description: "Harvested sustainably from the thick bark of oak trees without physically harming the host tree. Because the bark naturally regenerates, it is an entirely renewable insulation resource.",
      preferable: "High-humidity indoor environments (bathrooms, kitchens) and professional acoustic engineering studios.",
      realProject: { name: "The Cork House (Berkshire, UK)", link: "https://www.google.com/search?q=The+Cork+House+Matthew+Barnett+Howland&tbm=isch" },
      advantages: ["Incredible natural acoustic dampening and vibration absorption", "Naturally hypoallergenic and completely resistant to invasive mold", "Bark represents a renewable cycle every 9 years for the life of the tree"],
      disadvantages: ["Extremely limited global geographical supply chain makes it a luxury material", "Vulnerable to severe UV degradation and bleaching if utilized externally without sealants"],
      advancement: "State-of-the-art Expanded Insulation Cork Board (ICB) exposes the bark to superheated steam, expanding the cells and binding them tightly using only the cork's natural resins.",
      image: "images/materials/12-cork.png"
    },
    {
      title: "Low-Carbon Concrete (Geopolymer)",
      description: "Specialized concrete mixtures that replace large portions, or the entirety, of energy-intensive Portland cement with industrial aluminosilicate byproducts like slag or fly ash.",
      preferable: "Massive industrial infrastructure, marine environments, and heavy residential foundations located universally.",
      realProject: { name: "Brisbane West Wellcamp Airport (Australia)", link: "https://www.google.com/search?q=Brisbane+West+Wellcamp+Airport+Geopolymer+Concrete&tbm=isch" },
      advantages: ["Reduces the massive carbon footprint typically associated with the concrete industry", "Can be chemically engineered to be stronger and more corrosion-resistant", "Cures entirely at room temperature safely"],
      disadvantages: ["Requires highly specialized chemical training for contractors to pour correctly", "The local geographical availability of essential precursor materials like raw slag wildly varies"],
      advancement: "The cutting-edge integration of Carbon Capture Injection (e.g., CarbonCure process) actively traps and permanently mineralizes waste CO2 directly inside the curing concrete.",
      image: "images/materials/13-lcc.png"
    }
];

const techniques = [
    {
      title: "Rat-Trap Bond Masonry",
      description: "An incredibly efficient structural brick masonry methodology where bricks are deliberately laid on edge (vertically), creating a hollow interlocking inner void system.",
      preferable: "Hot tropical climates where intense afternoon heat needs to be trapped within the wall cavity before radiating into the interior.",
      realProject: { name: "Centre for Development Studies (Trivandrum)", link: "https://www.google.com/search?q=Centre+for+Development+Studies+Trivandrum+Rat+Trap+Bond&tbm=isch" },
      advantages: ["Substantially reduces massive brick and cement expenditures by nearly 25%", "The trapped air acts as a superior inherent thermal and acoustic insulator", "Brings forth a highly sought-after, aesthetically pleasing exposed brick finish"],
      disadvantages: ["Mandates highly skilled masons familiar specifically with executing this complex bond geometry", "Not suitable for load-bearing walls in extreme seismic fault lines without supplemental RCC framework"],
      advancement: "Architects are now utilizing parametric computational modeling to perfectly optimize the internal wall cavity placement in response to high structural wind loads.",
      image: "images/tech/1-rat.png"
    },
    {
      title: "Filler Slab Roofing",
      description: "A specialized roofing framework designed to replace the structurally redundant lower 'tension zone' of a concrete slab with extremely lightweight, low-cost filler components like terracotta.",
      preferable: "Regions fighting massive seasonal heat waves where standard heavy concrete roof slabs otherwise radiate unbearable heat downwards.",
      realProject: { name: "COSTFORD Architectural Projects (Kerala)", link: "https://www.google.com/search?q=COSTFORD+Filler+Slab+Roofing+Laurie+Baker&tbm=isch" },
      advantages: ["Successfully reduces total cement concrete utilization by up to 20%", "Structurally decreases high-carbon steel reinforcement demands by nearly 30%", "Naturally enhances the overall thermal insulation profile of the ceiling"],
      disadvantages: ["Exceedingly difficult to drill into or permanently modify post-construction", "Requires meticulous mathematical alignment during pouring to strictly avoid structural buckling"],
      advancement: "Contractors are integrating recycled industrial plastics and massive 3D-printed hollow void-formers specifically designed alongside structural algorithms to replace standard clay pots.",
      image: "images/tech/2-fsr.png"
    },
    {
      title: "Arches and Vaults",
      description: "A time-honored geometric construction strategy completely eliminating the mechanical need for energy-intensive steel and concrete lintels by perfectly distributing compressive force vectors.",
      preferable: "Geographies historically lacking heavy lumber for thick lintels, or properties requiring immense compression strength spanned over wide communal spaces.",
      realProject: { name: "Mapungubwe Interpretation Centre (South Africa)", link: "https://www.google.com/search?q=Mapungubwe+Interpretation+Centre+Vaults&tbm=isch" },
      advantages: ["Functions securely with zero steel reinforcement or thick RCC lintel spans", "Represents an extremely high margin of long-term structural integrity", "Highly cost-effective compared to traditional flat concrete beam spans"],
      disadvantages: ["Mandates absolutely massive external buttressing walls to counteract extreme lateral outward thrust", "Executing the heavily curved formwork requires advanced mathematical carpentry skills"],
      advancement: "The integration of drone-based precise bricklaying grids and Augmented Reality (AR) headsets now allows human masons to perfectly execute highly complex vault geometries.",
      image: "images/tech/3-a&v.png"
    },
    {
      title: "Earthbag Construction",
      description: "A radically simple, resilient methodology where heavy-duty polypropylene bags are continuously filled with native subsoil, forcefully tamped solid, and secured using barbed wire tensile courses.",
      preferable: "Extreme hazard zones highly prone to severe geological earthquakes, ballistic impacts, or devastating seasonal flooding.",
      realProject: { name: "Cal-Earth Institute Domes (California, USA)", link: "https://www.google.com/search?q=Cal-Earth+Institute+Superadobe+Domes&tbm=isch" },
      advantages: ["Demonstrates phenomenal endurance against severe earthquakes, floods, and ballistic impacts", "Bypasses heavy machinery, allowing construction via unskilled human labor forces", "Easily manipulates into structural domes and fluid organic architecture"],
      disadvantages: ["Backbreaking physical labor due to the manual compaction of thousands of pounds of dense earth", "Walls are immensely thick, stripping away significant architectural square footage from the floorplan"],
      advancement: "Modern 'Superadobe' implementations employ a continuous structural tubing system rather than individual bags, layered alongside industrial geogrid stabilization mats.",
      image: "images/tech/4-ebc.png"
    },
    {
      title: "Passive Solar Design",
      description: "A holistic architectural physics approach focusing on strategic window placement, structural shade, and interior thermal mass to automatically collect and distribute solar energy passively.",
      preferable: "Temperate-to-cold climates (Northern/Southern latitudes) experiencing high structural heating demands but still receiving clear winter sunlight.",
      realProject: { name: "Zion National Park Visitor Center (Utah, USA)", link: "https://www.google.com/search?q=Zion+National+Park+Visitor+Center+Passive+Solar&tbm=isch" },
      advantages: ["Operates indefinitely with absolutely zero mechanical or electrical actuation systems", "Drastically mitigates, or completely eliminates, lifetime HVAC (heating and cooling) utility bills", "Relies entirely on architectural intelligence rather than mechanical brute force"],
      disadvantages: ["Mandates brutally strict building geometries heavily dictating exactly which directions the home must face", "Even slight miscalculations in glazing angles can guarantee severe, torturous summer overheating phenomena"],
      advancement: "Integration of smart-home automated shading tracking the sun's azimuth, combined with Phase-Changing Materials (PCM) embedded seamlessly into drywalls to store massive latent heat.",
      image: "images/tech/5-psd.png"
    },
    {
      title: "Straw Bale Construction",
      description: "Leverages highly compressed rectangular bales of agricultural plant straw (such as wheat or oat) as foundational hyper-insulating structural blocks, heavily encased in earthen lime plaster.",
      preferable: "Frigid, strictly dry climates or rural agricultural flatlands seeking maximum R-value insulation against aggressive freezing winds.",
      realProject: { name: "Maya Guesthouse (Switzerland)", link: "https://www.google.com/search?q=Maya+Guesthouse+Switzerland+Straw+Bale&tbm=isch" },
      advantages: ["Delivers extraordinary hyper-insulation (achieving thermal R-values deeply exceeding modern regulations)", "Actively sequesters and repurposes volatile agricultural waste", "Renders buildings inherently fire-resistant via oxygen deprivation when correctly plastered"],
      disadvantages: ["Disastrously vulnerable to total structural rot if severely exposed to heavy moisture during the initial building grid sequence", "Generates walls almost two feet thick, necessitating severely extended roof overhang geometry"],
      advancement: "Agri-technology plants now process Jumbo Bales using precision high-pressure hydraulic compaction, guaranteeing exact dimensions suitable for rigid multi-story commercial building codes.",
      image: "images/tech/6-sbc.png"
    },
    {
      title: "Rainwater Harvesting Systems",
      description: "The targeted, systemic collection of precipitation runoff from roofing arrays, meticulously diverted through localized filtration complexes directly into massive subsurface cisterns.",
      preferable: "Monsoon regions and highly cyclical precipitation climates lacking constant, stable municipal freshwater supply lines.",
      realProject: { name: "Pixel Building (Melbourne, Australia)", link: "https://www.google.com/search?q=Pixel+Building+Melbourne+Rainwater+Harvesting&tbm=isch" },
      advantages: ["Fosters profound independence by establishing an off-grid resilient auxiliary water supply", "Dramatically curtails severe surface topsoil erosion surrounding foundational footings", "Provides a fundamentally pure, low-mineral water source ideal for delicate indoor hydroponics"],
      disadvantages: ["Demands a highly expensive upfront installation cost for deep bedrock excavation and polymer cisterns", "Necessitates continuous, unrelenting filtration mesh maintenance to absolutely prevent deadly stagnation"],
      advancement: "Advanced telemetry units now utilize smart Internet-of-Things (IoT) sensors to automatically preemptively discharge or divert tanks based on incoming real-time storm cloud forecasts.",
      image: "images/tech/7-rwhs.png"
    },
    {
      title: "Green Roofs (Living Roofs)",
      description: "The systemic transformation of a barren structural rooftop into a fully vegetated, living micro-biome planted over highly engineered waterproofing, drainage, and dense root-barrier membranes.",
      preferable: "Dense urban metropolitan grids actively fighting the 'Urban Heat Island' effect and struggling with severe, overwhelming storm-drain runoff.",
      realProject: { name: "California Academy of Sciences (San Francisco)", link: "https://www.google.com/search?q=California+Academy+of+Sciences+Green+Roof&tbm=isch" },
      advantages: ["Aggressively absorbs and mitigates heavy municipal surface flooding caused by rapid storm runoff", "Shields the building envelope from intense UV degradation and temperature spikes", "Crucial in defeating the blistering 'Urban Heat Island' thermal effect in congested metropolitan grids"],
      disadvantages: ["Generates staggering dead-weight limits, forcing the underlying load-bearing beams to be catastrophically over-engineered", "A constant battle of horticultural maintenance to keep the plant species from overtaking deep mechanical conduits"],
      advancement: "Implementation of hybrid 'Biosolar' Roofs natively combining shallow modular living plant trays directly surrounding highly efficient thin-film photovaltaic solar panels.",
      image: "images/tech/8-gr.png"
    },
    {
      title: "Greywater Recycling Systems",
      description: "Intelligent secondary plumbing networks designed to capture slightly used surface water from residential sinks and showers, treating it mechanically and biologically for localized immediate reuse.",
      preferable: "Severe drought-prone regions (like the Sub-Saharan or global Southwest) legally commanding strict agricultural/residential water conservation.",
      realProject: { name: "Solaire Building (New York, USA)", link: "https://www.google.com/search?q=Solaire+Building+New+York+Water+Recycling&tbm=isch" },
      advantages: ["Slashes domestic fresh municipal water demands by tens of thousands of gallons annually", "Considerably mitigates the heavy chemical filtration burden placed on civic sewage infrastructures", "Integrates flawlessly into automated indoor botanical planter beds for silent bio-filtration"],
      disadvantages: ["Fundamentally requires a secondary, completely isolated retrofitted piping system mapping across the entire edifice", "Demands rigorous chemical and mechanical filter flushing to permanently prevent dangerous anaerobic bio-fouling issues"],
      advancement: "Cutting-edge integration of ultra-compact Membrane Bioreactors (MBR) and solid-state UV-LED disinfection chambers enabling greywater to reach near-potable safe reuse standards immediately.",
      image: "images/tech/9-grs.png"
    },
    {
      title: "Modular & Prefabricated Construction",
      description: "A highly controlled industrial methodology wherein immense architectural components are fully constructed in sterile off-site factories, and subsequently assembled precisely on the designated land plot.",
      preferable: "Remote, physically hard-to-reach locations with extremely short building seasons (e.g., Arctic circles) or congested urban lots lacking material storage space.",
      realProject: { name: "Mini Sky City (China) - Built in 19 Days", link: "https://www.google.com/search?q=Mini+Sky+City+Broad+Sustainable+Building&tbm=isch" },
      advantages: ["Results in the near-total elimination of expensive arbitrary material waste typical of field sites", "Guarantees mathematically tight weather-sealing and zero atmospheric moisture trapping", "Slashes highly disruptive, noisy on-site operational logistics by several months"],
      disadvantages: ["Mandates highly expensive, sprawling heavy-crane logistics and deeply wide road access routes for transit delivery", "Physically restricts architectural layouts, harshly limiting highly curved geometric flow or organic designs"],
      advancement: "Pioneering AI algorithms now dictate fully automated robotic 3D-printing arms and volumetric laser-cutting fabrication units, achieving sub-millimeter precision in massive steel nodes.",
      image: "images/tech/10-m&pc.png"
    },
    {
      title: "Xeriscaping",
      description: "An advanced topographical engineering methodology explicitly focusing on rigorous water conservation via the planting of deep-rooted native flora and the severe reduction of high-maintenance turf grass.",
      preferable: "Desert and semi-arid geographies burdened with extreme physical water scarcity and legally enforced hose-watering bans.",
      realProject: { name: "Desert Botanical Garden (Phoenix, USA)", link: "https://www.google.com/search?q=Desert+Botanical+Garden+Phoenix+Xeriscaping&tbm=isch" },
      advantages: ["Mechanically eliminates the extreme requirement for wasteful external supplemental irrigation grids", "Prevents the vast carbon footprint associated with municipal lawn mowing and chemical fertilizers", "Aggressively restores native soil microbiomes decimated by traditional suburban construction"],
      disadvantages: ["Saddled with excruciatingly high initial labor pulling vast weed incursions during the delicate early soil establishment phase", "Visually eliminates traditional soft turf grass landscapes, frequently frustrating family-oriented play mechanics"],
      advancement: "Employment of deep subterranean precision drip-line networks completely governed by algorithmic AI cross-referencing live local evapotranspiration satellite modeling.",
      image: "images/tech/11-x.png"
    },
    {
      title: "Permeable Paving Surfaces",
      description: "The calculated installation of robust, micro-porous infrastructure materials across driveways and communal parking grids to guarantee rapid rainwater infiltration directly into the natural sub-surface aquifer.",
      preferable: "Dense heavily paved suburban zones experiencing massive annual rainfall, facing overwhelming storm-drain capacities and flash flooding triggers.",
      realProject: { name: "Chicago Green Alleys Program", link: "https://www.google.com/search?q=Chicago+Green+Alleys+Permeable+Paving&tbm=isch" },
      advantages: ["Continuously recharges the deep planetary groundwater reserves passively and consistently", "Eliminates the expensive requirement for massive interconnected municipal storm-drain networks", "Actively bio-filters deadly motor oil and heavy smog particulates directly inside the crushed stone sub-base"],
      disadvantages: ["Vulnerable to catastrophic surface clogging from fine silts, requiring recurring industrial-grade heavy vacuum sweeping", "Inherently maintains a weaker sheer modulus matrix than entirely poured solid concrete slab systems"],
      advancement: "The commercial breakthrough of photocatalytic pervious concrete infused with titanium dioxide, uniquely capable of breaking down atmospheric nitrogen oxide smog (NO2) utilizing sunlight.",
      image: "images/tech/12-pps.png"
    },
    {
      title: "Geothermal Heat Pumps",
      description: "A deeply buried closed-loop thermal conduit system specifically engineered to leverage the persistent, stable temperature of the Earth's subterranean mass to rapidly heat or chill building networks.",
      preferable: "High-value permanent geographies featuring deep, stable soil layers experiencing brutal structural temperature extremes (both blizzards and heatwaves).",
      realProject: { name: "The Crystal - Siemens Urban Sustainability Centre (London)", link: "https://www.google.com/search?q=The+Crystal+London+Geothermal+Heating&tbm=isch" },
      advantages: ["Clinically proven as the most staggeringly energy-efficient HVAC technology currently mankind possesses", "Exploits the planetary crust as a massive, completely free cyclical thermal heat-sink", "Furnishes completely silent, unnoticeable, emission-free severe climate control"],
      disadvantages: ["Staggeringly exorbitant upfront capital expenditure specifically concerning heavy mechanical bedrock excavation drilling", "Completely unfeasible on shallow rocky substrates or small localized heavy-urban plots lacking drilling clearance"],
      advancement: "Modern integration of highly adaptive Variable Refrigerant Flow (VRF) technology coupled closely with cutting-edge direct-exchange copper loops utilizing non-toxic supercritical CO2.",
      image: "images/tech/13-ghp.png"
    }
];

const questions = [
    {
      text: "Stabilized Mud Blocks (SMB) are ideal for which type of climate?",
      options: ["Tropical Humid", "Arid and Semi-Arid", "Cold Alpine", "Oceanic"],
      answer: "Arid and Semi-Arid",
      explanation: "SMBs are best in dry climates where external rainfall erosion is low."
    },
    {
      text: "How much of the mass of standard reinforced concrete does Ferro-Cement typically use?",
      options: ["20%", "50%", "75%", "90%"],
      answer: "20%",
      explanation: "Ferro-cement uses only 20% of the material mass compared to standard RC."
    },
    {
      text: "What is the primary climate benefit of Rammed Earth walls?",
      options: ["Transparency", "Low Thermal Mass", "High Thermal Regulation", "Water Solubility"],
      answer: "High Thermal Regulation",
      explanation: "Rammed earth provides exceptional thermal regulation and mass storage."
    },
    {
      text: "Bamboo can be re-harvested every how many years?",
      options: ["1-2 years", "3-5 years", "10-15 years", "25-30 years"],
      answer: "3-5 years",
      explanation: "Bamboo is rapidly renewable, maturing for harvest in 3 to 5 years."
    }
];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initChatBot();
    renderMaterials();
    renderTechniques();
    initQuiz();
    initCalculator();
});

// --- Navigation ---
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    const pages = document.querySelectorAll('.edu-page');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.nav-links-mobile');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Update Active Link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update Active Page
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');

            // Close Mobile Menu
            mobileMenu.classList.remove('open');
            window.scrollTo(0, 0);
        });
    });

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

// --- Render Content ---
function renderMaterials() {
    const container = document.getElementById('materials-grid');
    if (!container) return;
    
    container.innerHTML = materials.map(mat => `
        <div class="edu-card glass">
            <div class="edu-image-wrapper">
                <img src="${mat.image}" alt="${mat.title}" class="edu-image" loading="lazy">
            </div>
            <div class="edu-details">
                <h2 style="color: var(--color-secondary); font-size: 1.8rem; margin-bottom: 1rem;">${mat.title}</h2>
                <p class="edu-description">${mat.description}</p>
                <div style="display: flex; align-items: flex-start; gap: 0.75rem; background-color: var(--color-bg); padding: 1rem; border-radius: var(--rounded-md); margin-bottom: 1rem; border: 1px solid var(--color-border);">
                   <i data-lucide="map-pin" style="color: var(--color-secondary); min-width: 20px;"></i>
                   <p style="font-size: 0.95rem; margin: 0;"><strong>Where to use:</strong> ${mat.preferable}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div>
                        <h3 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: var(--color-secondary);">Advantages</h3>
                        <ul class="edu-list">
                            ${mat.advantages.map(adv => `<li><i data-lucide="check-circle-2" style="color: var(--color-secondary); min-width: 18px;"></i><span>${adv}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderTechniques() {
    const container = document.getElementById('techniques-grid');
    if (!container) return;

    container.innerHTML = techniques.map(tech => `
        <div class="edu-card glass">
            <div class="edu-image-wrapper">
                <img src="${tech.image}" alt="${tech.title}" class="edu-image" loading="lazy">
            </div>
            <div class="edu-details">
                <h2 style="color: var(--color-primary); font-size: 1.8rem; margin-bottom: 1rem;">${tech.title}</h2>
                <p class="edu-description">${tech.description}</p>
                <div style="display: flex; align-items: flex-start; gap: 0.75rem; background-color: var(--color-bg); padding: 1rem; border-radius: var(--rounded-md); margin-bottom: 1rem; border: 1px solid var(--color-border);">
                   <i data-lucide="map-pin" style="color: var(--color-primary); min-width: 20px;"></i>
                   <p style="font-size: 0.95rem; margin: 0;"><strong>Where to use:</strong> ${tech.preferable}</p>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div>
                        <h3 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: var(--color-primary);">Advantages</h3>
                        <ul class="edu-list">
                            ${tech.advantages.map(adv => `<li><i data-lucide="check-circle-2" style="color: var(--color-primary); min-width: 18px;"></i><span>${adv}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// --- ChatBot ---
function initChatBot() {
    const fab = document.querySelector('.chatbot-fab');
    const windowEl = document.querySelector('.chatbot-window');
    const closeBtn = document.querySelector('.close-btn');
    const sendBtn = document.querySelector('.send-btn');
    const input = document.querySelector('.chat-input-area input');
    const messagesEl = document.querySelector('.chat-messages');

    fab.addEventListener('click', () => windowEl.classList.add('open'));
    closeBtn.addEventListener('click', () => windowEl.classList.remove('open'));

    function addMessage(role, text) {
        const msg = document.createElement('div');
        msg.className = `message ${role}`;
        msg.textContent = text;
        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function getBotResponse(text) {
        const input = text.toLowerCase();
        if (input.includes('hello') || input.includes('hi')) return "Greetings! I am here to help you build in harmony with nature.";
        if (input.includes('material')) return "For sustainable building, I recommend bamboo, rammed earth, or recycled steel. Which area of your project are you focusing on?";
        if (input.includes('water')) return "Water harvesting is vital. You can start with simple rain barrels or integrated greywater recycling systems.";
        return "That is an interesting perspective. Could you tell me more about how that relates to your green building goals?";
    }

    function handleSend() {
        const text = input.value.trim();
        if (!text) return;
        addMessage('user', text);
        input.value = '';
        setTimeout(() => {
            addMessage('bot', getBotResponse(text));
        }, 1000);
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}

// --- Quiz ---
let currentQuizIdx = 0;
let quizScore = 0;

function initQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuizIdx];
    const container = document.getElementById('quiz-question-container');
    if (!container) return;

    container.innerHTML = `
        <h2 style="font-size: 1.5rem; margin-bottom: 2rem;">${q.text}</h2>
        <div style="display: grid; gap: 1rem;">
            ${q.options.map(opt => `<button class="quiz-option" onclick="handleQuizAnswer('${opt}')">${opt}</button>`).join('')}
        </div>
    `;
}

window.handleQuizAnswer = (selected) => {
    const q = questions[currentQuizIdx];
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        if (opt.textContent === q.answer) opt.classList.add('correct');
        else if (opt.textContent === selected) opt.classList.add('incorrect');
        opt.disabled = true;
    });

    if (selected === q.answer) quizScore++;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.style.marginTop = '2rem';
    nextBtn.style.width = '100%';
    nextBtn.textContent = currentQuizIdx + 1 < questions.length ? "Next Question" : "Show Results";
    nextBtn.onclick = () => {
        currentQuizIdx++;
        if (currentQuizIdx < questions.length) renderQuestion();
        else showQuizResults();
    };
    document.getElementById('quiz-question-container').appendChild(nextBtn);
};

function showQuizResults() {
    const container = document.getElementById('quiz-question-container');
    const percent = Math.round((quizScore / questions.length) * 100);
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">Quiz Completed!</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Your score: ${quizScore} / ${questions.length} (${percent}%)</p>
            <button class="btn btn-primary" onclick="location.reload()">Restart Quiz</button>
        </div>
    `;
}

// --- Calculator ---
function initCalculator() {
    const areaInput = document.getElementById('calc-area');
    const areaVal = document.getElementById('calc-area-val');
    const materialSelect = document.getElementById('calc-material');
    const carbonVal = document.getElementById('calc-carbon');
    const waterVal = document.getElementById('calc-water');

    const coefficients = {
        smb: { carbon: 0.15, water: 80 },
        hempcrete: { carbon: -0.2, water: 40 },
        rammed_earth: { carbon: 0.05, water: 20 },
        clt: { carbon: -0.1, water: 120 },
        bamboo: { carbon: -0.15, water: 60 }
    };

    function update() {
        const area = parseInt(areaInput.value);
        const mat = materialSelect.value;
        const coef = coefficients[mat];
        
        areaVal.textContent = area + ' sq.ft';
        carbonVal.textContent = Math.round((1.2 - coef.carbon) * area).toLocaleString();
        waterVal.textContent = Math.round((450 - coef.water) * area).toLocaleString();
    }

    if (areaInput) {
        areaInput.addEventListener('input', update);
        materialSelect.addEventListener('change', update);
        update();
    }
}
