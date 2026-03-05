import React, { useState } from 'react';
import { 
  Droplets, Menu, ChevronRight, PlayCircle, ShieldCheck, 
  Clock, Shield, Download, Info, Zap, Verified, 
  FileText, Settings, Award, Box, Mail, User, AirVent,
  Layers, Waves, Thermometer, Activity
} from 'lucide-react';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Droplets className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 font-display">HumiPure</h2>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        {['Products', 'Technology', 'Case Studies', 'Support'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden lg:flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark active:scale-95">
          Request Quote
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 hover:bg-slate-50 lg:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-white">
    <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />
    <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 py-12 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="w-4 h-4" />
            <span>Industrial Grade Certified</span>
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl font-display">
            HumiPure: <span className="text-primary">Precision Control.</span> Maximum Efficiency.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
            Experience the next generation of hybrid adiabatic systems. Engineered with low-pressure performance designed for maximum hygiene and minimal energy consumption in mission-critical facilities.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <button className="h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30 active:scale-95 flex gap-2">
              <span>View Specifications</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-slate-300 bg-white px-8 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95 flex gap-2">
              <PlayCircle className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            {[
              { label: 'Hygiene Focus', value: '100%' },
              { label: 'Continuous Duty', value: '24/7' },
              { label: 'VDI 6022 Certified', value: 'Class A' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-slate-900 font-display">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center lg:h-full"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative w-full overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/60 shadow-2xl">
            <div className="aspect-[4/3] w-full bg-slate-100 relative">
              <img 
                src="https://picsum.photos/seed/industrial-hvac/1200/900" 
                alt="Technical industrial HVAC unit" 
                className="h-full w-full object-cover mix-blend-overlay opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent" />
              
              <motion.div 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10"
              >
                <div className="flex items-center gap-3 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur border border-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">Efficiency</p>
                    <p className="text-sm font-bold text-slate-900">95% Rated</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 left-10"
              >
                <div className="flex items-center gap-3 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur border border-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500">Pressure</p>
                    <p className="text-sm font-bold text-slate-900">Low-Bar Hybrid</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MollierDiagram = ({ activeStep }: { activeStep: number }) => {
  // Constants for psychrometrics
  const P_TOTAL = 1013.25; // hPa
  
  const getXSat = (t: number) => {
    const p_sat = 6.112 * Math.exp((17.67 * t) / (t + 243.5));
    return 622 * p_sat / (P_TOTAL - p_sat);
  };

  const getCoords = (t: number, x: number) => {
    // x is in g/kg
    // Scale: x (0-25) -> (60-460), t (-10-50) -> (380-40)
    const x_svg = 60 + (x / 25) * 400;
    const y_svg = 380 - ((t + 10) / 60) * 340;
    return { x: x_svg, y: y_svg };
  };

  // Points based on the reference image
  const t1 = 15, x1 = 2.5;
  const t2 = 37, x2 = 2.5; // Vertical preheating
  const t3 = 22, x3 = 8.0; // Adiabatic humidification

  const p1 = getCoords(t1, x1);
  const p2 = getCoords(t2, x2);
  const p3 = getCoords(t3, x3);

  // Calculate path length based on active step
  const getPathLength = () => {
    if (activeStep === 1) return 0;
    if (activeStep === 2) return 0.5;
    return 1;
  };

  return (
    <div className="relative h-full w-full bg-white rounded-lg border border-slate-200 overflow-hidden min-h-[450px] p-4">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Psychrometric Chart (Mollier)</div>
      <svg viewBox="0 0 500 400" className="w-full h-full">
        {/* Grid Background */}
        <defs>
          <pattern id="mollier-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f8fafc" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="500" height="400" fill="url(#mollier-grid)" />

        {/* Temperature Lines (Horizontal) */}
        {[-10, 0, 10, 20, 30, 40, 50].map((t) => {
          const { y } = getCoords(t, 0);
          return (
            <React.Fragment key={`t-line-${t}`}>
              <line x1="60" y1={y} x2="460" y2={y} stroke="#f1f5f9" strokeWidth="1" />
              <text x="30" y={y + 3} className="text-[8px] fill-slate-400 font-mono">{t}°C</text>
            </React.Fragment>
          );
        })}
        
        {/* Moisture Content Lines (Vertical) */}
        {[0, 5, 10, 15, 20, 25].map((x) => {
          const { x: x_svg } = getCoords(0, x);
          return (
            <React.Fragment key={`x-line-${x}`}>
              <line x1={x_svg} y1="40" x2={x_svg} y2="380" stroke="#f1f5f9" strokeWidth="1" />
              <text x={x_svg - 5} y="395" className="text-[8px] fill-slate-400 font-mono">{x}</text>
            </React.Fragment>
          );
        })}

        {/* Constant Enthalpy Lines (Diagonal) */}
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((h, i) => (
          <line 
            key={`h-${i}`}
            x1={60 + i * 45} y1="40" x2={60 + i * 45 + 200} y2="380" 
            stroke="#cbd5e1" 
            strokeWidth="0.5" 
            strokeDasharray="2 2"
          />
        ))}

        {/* Relative Humidity Curves */}
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((rh) => {
          const points = [];
          for (let t = -10; t <= 50; t += 1) {
            const x = (rh / 100) * getXSat(t);
            const coords = getCoords(t, x);
            if (coords.x <= 480) {
              points.push(`${coords.x},${coords.y}`);
            }
          }
          return (
            <path 
              key={`rh-${rh}`}
              d={`M ${points.join(' L ')}`} 
              fill="none" 
              stroke={rh === 100 ? "#94a3b8" : "#e2e8f0"} 
              strokeWidth={rh === 100 ? "1.5" : "0.5"} 
              strokeDasharray={rh === 100 ? "4 2" : "none"}
            />
          );
        })}
        <text x="420" y="120" className="text-[8px] fill-slate-400 font-bold rotate-[-45deg]">100% RH</text>

        {/* Process Path: 1 -> 2 -> 3 */}
        <motion.path
          animate={{ pathLength: getPathLength() }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y}`}
          fill="none"
          stroke="#1f8fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Point 1 */}
        <motion.circle 
          animate={{ 
            scale: activeStep === 1 ? [1, 1.3, 1] : 1,
            fill: activeStep === 1 ? "#1f8fff" : "white"
          }}
          transition={{ duration: 0.6, repeat: activeStep === 1 ? Infinity : 0 }}
          cx={p1.x} cy={p1.y} r="4" stroke="#1f8fff" strokeWidth="2" 
        />
        <text x={p1.x - 12} y={p1.y + 5} className="text-[12px] font-black fill-primary">1</text>
        
        {/* Point 2 */}
        <motion.circle 
          animate={{ 
            scale: activeStep === 2 ? [1, 1.3, 1] : 1,
            fill: activeStep === 2 ? "#1f8fff" : "white"
          }}
          transition={{ duration: 0.6, repeat: activeStep === 2 ? Infinity : 0 }}
          cx={p2.x} cy={p2.y} r="4" stroke="#1f8fff" strokeWidth="2" 
        />
        <text x={p2.x - 13} y={p2.y + 5} className="text-[12px] font-black fill-primary">2</text>

        {/* Point 3 */}
        <motion.circle 
          animate={{ 
            scale: activeStep === 3 ? [1, 1.3, 1] : 1,
            fill: activeStep === 3 ? "#1f8fff" : "white"
          }}
          transition={{ duration: 0.6, repeat: activeStep === 3 ? Infinity : 0 }}
          cx={p3.x} cy={p3.y} r="4" stroke="#1f8fff" strokeWidth="2" 
        />
        <text x={p3.x + 8} y={p3.y + 5} className="text-[12px] font-black fill-primary">3</text>

        {/* Labels */}
        <text x="10" y="200" transform="rotate(-90, 10, 200)" className="text-[10px] fill-slate-500 font-bold uppercase tracking-tighter">Temperature t [°C]</text>
        <text x="250" y="420" className="text-[10px] fill-slate-500 font-bold uppercase tracking-tighter text-center">Moisture Content x [g/kg]</text>
      </svg>
    </div>
  );
};

const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 3) {
          setTimeout(() => setActiveStep(1), 2000);
          return 3;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    { step: '1', title: 'Conditions before preheating', desc: 'Ambient air enters the system. Initial temperature and moisture content are measured to determine the starting enthalpy.' },
    { step: '2', title: 'Conditions after preheating', desc: 'Air is heated at constant moisture content (vertical path on diagram). This increases the capacity for water absorption.' },
    { step: '3', title: 'Conditions after humidification', desc: 'Adiabatic humidification follows the constant enthalpy line (diagonal path). The air cools as it absorbs moisture to reach the setpoint.' },
  ];

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <Activity className="w-4 h-4" />
              Process Visualization
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl font-display">
              The Humidification Cycle
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Our hybrid system optimizes the thermodynamic path to ensure maximum efficiency and hygiene. Follow the 1-2-3 process on the Mollier diagram.
            </p>
          </div>
          <button className="flex h-12 w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-50">
            <Download className="w-4 h-4" />
            <span>Technical Spec Sheet</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 xl:col-span-8">
            <MollierDiagram activeStep={activeStep} />
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-4">
              {[
                { label: 'Point 1: Intake', value: '15°C / 30%' },
                { label: 'Point 2: Preheated', value: '35°C / 12%' },
                { label: 'Point 3: Setpoint', value: '22°C / 55%', primary: true },
              ].map((metric) => (
                <div key={metric.label} className="group cursor-help relative">
                  <div className="text-[10px] font-bold uppercase text-slate-500 flex items-center gap-1">
                    {metric.label}
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className={cn("text-lg font-bold", metric.primary ? "text-primary" : "text-slate-900")}>{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5 xl:col-span-4">
            {steps.map((item) => (
              <div 
                key={item.step}
                className={cn(
                  "group relative flex gap-4 overflow-hidden rounded-xl border p-5 transition-all",
                  activeStep === parseInt(item.step)
                    ? "border-l-4 border-l-primary border-y border-r border-slate-200 bg-blue-50/50 shadow-sm" 
                    : "border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg"
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "flex size-10 items-center justify-center rounded-full transition-colors font-bold",
                    activeStep === parseInt(item.step) ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-slate-100 text-slate-600 group-hover:bg-primary group-hover:text-white"
                  )}>
                    {item.step}
                  </div>
                  {activeStep !== parseInt(item.step) && <div className="h-full w-[2px] bg-slate-100 group-hover:bg-primary/20" />}
                </div>
                <div className="flex-1">
                  <h4 className={cn("mb-1 text-base font-bold", activeStep === parseInt(item.step) ? "text-primary" : "text-slate-900")}>{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                  {activeStep === parseInt(item.step) && (
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-primary">
                      <Zap className="w-4 h-4" />
                      <span>{item.step === '3' ? 'Setpoint Reached' : 'In Progress'}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HybridAdvantage = () => (
  <section className="py-24 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-slate-900 text-lg font-bold mb-1 font-display">Downloads</h3>
            <p className="text-slate-500 text-xs mb-4">Technical documentation</p>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Product Brochure', size: 'PDF, 2.4MB', icon: FileText },
                { name: 'Install Guide', size: 'PDF, 4.1MB', icon: Settings },
                { name: 'VDI 6022 Cert', size: 'PDF, 1.2MB', icon: Verified },
                { name: 'CAD Drawings', size: 'ZIP, 15MB', icon: Box },
              ].map((doc) => (
                <a key={doc.name} href="#" className="group flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <doc.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
                    <p className="text-xs text-slate-500">{doc.size}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
            <h4 className="text-primary font-bold text-sm mb-2">Need Engineering Support?</h4>
            <p className="text-slate-600 text-xs mb-4">Our team can help calculate load requirements for your specific facility.</p>
            <a href="#contact" className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
              Contact Engineering <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Hybrid Technology</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-display">
              The Hybrid Advantage:<br/>
              <span className="text-primary">Low Pressure, High Efficiency</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Combining high-pressure atomization with post-evaporation media for optimal humidity control in critical environments. Engineered for precision and hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Atomization Stage', desc: 'Dual-step atomization with color-coded nozzles for precise modulation.', icon: Waves, tags: ['2.1kg/h', '4.2kg/h'], img: 'mist' },
              { title: 'Post-Evaporation Media', desc: 'High-grade porous media ensures 100% absorption and zero water waste.', icon: Layers, img: 'grid' },
              { title: 'Hygiene Excellence', desc: 'Certified compliant design with integrated sterilization and automated flush cycles.', icon: ShieldCheck, badge: 'VDI 6022 Certified', img: 'clean' },
            ].map((card) => (
              <div key={card.title} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-slate-100 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${card.img}/600/400`} 
                    alt={card.title} 
                    className="h-full w-full object-cover mix-blend-overlay opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <card.icon className="w-12 h-12 opacity-20" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg text-slate-900">{card.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded">{tag}</span>
                    ))}
                    {card.badge && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                        <Award className="w-3 h-3" />
                        {card.badge}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SpecsTable = () => (
  <section id="specifications" className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 font-display">Technical Specifications</h2>
          <p className="text-slate-600 mt-2">Engineered for precision and hygiene in critical environments.</p>
        </div>
        <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark flex items-center gap-1">
          Download Full Datasheet <Download className="w-4 h-4" />
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Parameter</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Specification</th>
              <th className="p-4 text-xs font-bold uppercase text-slate-500 tracking-wider hidden sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { p: 'Operating Pressure', s: '14 Bar', n: 'Optimized for medium-pressure atomization' },
              { p: 'Control Interface', s: 'Modbus TCP / BACnet IP', n: 'Seamless BMS integration' },
              { p: 'Power Supply', s: '230V / 50-60Hz / 1Ph', n: 'Standard industrial voltage' },
              { p: 'Droplet Size', s: '< 20 microns', n: 'Rapid evaporation before media contact' },
              { p: 'Efficiency', s: '98.5%', n: 'Highest in class for hybrid systems', highlight: true },
            ].map((row) => (
              <tr key={row.p} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium text-slate-900">{row.p}</td>
                <td className={cn("p-4 text-slate-600", row.highlight && "text-emerald-600 font-bold")}>{row.s}</td>
                <td className="p-4 text-sm text-slate-500 hidden sm:table-cell">{row.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <section id="contact" className="py-24 bg-slate-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-16">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Ready to optimize your facility?</h2>
          <p className="text-slate-600">Request a custom layout and load calculation from our engineering team.</p>
        </div>
        <form className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <AirVent className="w-4 h-4 text-slate-400" />
              Air Volume (m³/h)
            </label>
            <input type="number" placeholder="e.g. 25000" className="w-full rounded-lg border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-slate-400" />
              Target RH (%)
            </label>
            <input type="number" placeholder="e.g. 55" className="w-full rounded-lg border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400" />
              Work Email
            </label>
            <input type="email" placeholder="engineer@company.com" className="w-full rounded-lg border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" />
              Full Name
            </label>
            <input type="text" placeholder="John Doe" className="w-full rounded-lg border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <div className="md:col-span-2 pt-4">
            <button className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              Request Custom Layout
              <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">Free consultation. Typically responds within 24 hours.</p>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Droplets className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white font-display">HumiPure</h2>
        </div>
        <nav className="flex gap-8">
          {['Products', 'Technology', 'Case Studies', 'Resources'].map(item => (
            <a key={item} href="#" className="text-sm hover:text-white transition-colors">{item}</a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 HumiPure Industrial Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProcessVisualization />
        <HybridAdvantage />
        <SpecsTable />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
