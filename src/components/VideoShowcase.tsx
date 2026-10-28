import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Car,
  CircleDollarSign,
  Users,
  Wallet,
  BarChart3,
  Play,
  CheckCircle2,
  Tv
} from 'lucide-react';

interface VideoModule {
  id: string;
  title: string;
  tagline: string;
  description: string;
  youtubeId: string;
  startTime?: string | number; // Exact time/minute to start the video (e.g. "1:30" or 90)
  icon: React.ComponentType<any>;
  features: string[];
}

const parseTimeToSeconds = (time: string | number | undefined): number => {
  if (time === undefined) return 0;
  if (typeof time === 'number') return time;

  const cleanTime = time.toString().trim();

  if (cleanTime.includes(':')) {
    const parts = cleanTime.split(':').map(p => parseInt(p, 10));
    if (parts.some(isNaN)) return 0;

    if (parts.length === 2) {
      // MM:SS
      const [minutes, seconds] = parts;
      return minutes * 60 + seconds;
    } else if (parts.length === 3) {
      // H:MM:SS
      const [hours, minutes, seconds] = parts;
      return hours * 3600 + minutes * 60 + seconds;
    }
  }

  const parsed = parseInt(cleanTime, 10);
  return isNaN(parsed) ? 0 : parsed;
};

const videoModules: VideoModule[] = [
  {
    id: 'usados-0km',
    title: 'Usados y Unidades 0KM',
    tagline: 'Inventario y señas anticipadas',
    description: 'Administrá tu inventario completo diferenciando vehículos usados y 0KM por estados y colores. Registrá señas y reservas para unidades 0KM antes de que ingresen físicamente a la agencia.',
    youtubeId: 'GsbbEaIvDRI',
    startTime: 0,
    icon: Car,
    features: [
      'Segmentación visual de stock por estados y colores',
      'Registro y gestión de señas para unidades 0KM en tránsito',
      'Ficha técnica detallada con trazabilidad completa de cada unidad',
      'Filtros dinámicos por disponibilidad, marca, modelo y año'
    ]
  },
  {
    id: 'ventas-financiacion',
    title: 'Ventas y Financiaciones',
    tagline: 'Operaciones comerciales y cuotas',
    description: 'Registrá ventas de usados y 0KM combinando múltiples medios de pago. Configurá planes de financiación a medida bajo el sistema francés con cálculo automático de cuotas e intereses.',
    youtubeId: 'iF5z2xhIL6w',
    startTime: 0,
    icon: CircleDollarSign,
    features: [
      'Carga ágil de operaciones de venta para usados y 0KM',
      'Combinación flexible de múltiples medios de pago',
      'Simulación y cálculo de financiación con sistema francés',
      'Generación automática de contratos y boletos de compra-venta'
    ]
  },
  {
    id: 'clientes-cuentas-corrientes',
    title: 'Clientes y Cuentas Corrientes',
    tagline: 'Historial, deudas y portal web',
    description: 'Mantené el seguimiento integral de cada cliente, su historial de operaciones y el estado de su cuenta corriente. Brindales un portal web exclusivo para consultar cuotas y notificar pagos.',
    youtubeId: 'g_1doaEnu4w',
    startTime: 0,
    icon: Users,
    features: [
      'Historial centralizado de compras y operaciones por cliente',
      'Control riguroso de cuentas corrientes y alertas de vencimiento',
      'Portal web de autogestión para consulta de cuotas online',
      'Recepción y validación de avisos de transferencias bancarias'
    ]
  },
  {
    id: 'tesoreria-comprobantes',
    title: 'Tesorería y Comprobantes',
    tagline: 'Cajas múltiples y respaldo documental',
    description: 'Gestioná cajas diarias y flujos de fondos con trazabilidad total. En AutoDealer todo movimiento queda respaldado por un comprobante oficial numerado para una administración transparente.',
    youtubeId: 'R3gz6Wyn1WA',
    startTime: 0,
    icon: Wallet,
    features: [
      'Control de ingresos y egresos de caja en pesos y dólares',
      'Emisión obligatoria de comprobante para cada movimiento',
      'Auditoría continua de gastos operativos y caja chica',
      'Arqueo de caja y cierres de turno transparentes e instantáneos'
    ]
  },
  {
    id: 'dashboard-estadisticas',
    title: 'Dashboard y Estadísticas',
    tagline: 'Métricas clave y toma de decisiones',
    description: 'Accedé a estadísticas y reportes inteligentes en tiempo real sobre tu concesionario. Analizá volumen de ventas, facturación, rentabilidad y rotación de stock para tomar decisiones informadas.',
    youtubeId: 'd72b2ku3Axw',
    startTime: 0,
    icon: BarChart3,
    features: [
      'Indicadores clave de rendimiento (KPIs) en tiempo real',
      'Gráficos comparativos de facturación y evolución de ventas',
      'Métricas de rentabilidad bruta y neta por operación',
      'Análisis de rotación de unidades y rendimiento comercial'
    ]
  }
];

export const VideoShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeModule = videoModules[activeTab];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setIsPlaying(false); // Reset playback state when switching modules
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="demos">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Tv className="w-4 h-4" /> El Sistema en Acción
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Videotutoriales del <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Sistema Dedicado</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explorá el funcionamiento interno de AutoDealer Dedicado a través de estas demostraciones paso a paso.
            Descubrí por qué somos el ERP más robusto y cómodo del mercado automotriz.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Interactive Cards Selector */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {videoModules.map((module, idx) => {
              const Icon = module.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={module.id}
                  onClick={() => handleTabChange(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 relative overflow-hidden ${isSelected
                    ? 'bg-slate-800/80 border-primary shadow-[0_0_25px_rgba(220,172,12,0.15)] ring-1 ring-primary/30'
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/35 hover:border-slate-700 text-slate-400'
                    }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeVideoTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}

                  <div className={`p-2.5 sm:p-3 rounded-xl shrink-0 transition-colors duration-300 ${isSelected ? 'bg-primary text-slate-900' : 'bg-slate-800 text-slate-400'
                    }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-bold text-lg leading-tight transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300'
                      }`}>
                      {module.title}
                    </h3>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-primary' : 'text-slate-500'
                      }`}>
                      {module.tagline}
                    </p>
                    {isSelected && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-slate-400 mt-2 leading-relaxed"
                      >
                        {module.description}
                      </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Premium Video Frame Container */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-slate-950/80 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-full">
              {/* Fake System Window Header */}
              <div className="h-12 flex items-center justify-between px-6 bg-slate-900 border-b border-slate-800 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 bg-slate-950 px-4 py-1 rounded-md border border-slate-800/80 text-[10px] text-slate-500 font-mono tracking-tight select-none">
                  <span>autodealer.com.ar/demos/{activeModule.id}</span>
                </div>
                <div className="w-3" />
              </div>

              {/* Video Body Content */}
              <div className="flex-1 bg-slate-950 relative aspect-video flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[380px]">
                <AnimatePresence mode="wait">
                  {!isPlaying ? (
                    <motion.div
                      key={`thumb-${activeModule.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center group cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      {/* Video Thumbnail Background */}
                      <img
                        src={`https://img.youtube.com/vi/${activeModule.youtubeId}/maxresdefault.jpg`}
                        alt={activeModule.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault doesn't exist
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${activeModule.youtubeId}/hqdefault.jpg`;
                        }}
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />

                      {/* Play Button - Premium styled glassmorphic button with pulse effect */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-primary/95 text-slate-950 flex items-center justify-center shadow-[0_0_50px_rgba(220,172,12,0.4)] group-hover:scale-110 active:scale-95 group-hover:bg-primary-light transition-all duration-300">
                        {/* Outer pulse animation ring */}
                        <div className="absolute inset-0 w-full h-full rounded-full bg-primary/40 animate-ping opacity-75 group-hover:opacity-100" />
                        <Play className="w-8 h-8 fill-slate-950 ml-1" />
                      </div>

                      <div className="relative z-10 mt-6 text-center px-6">
                        <span className="text-xs uppercase tracking-widest text-primary font-bold bg-slate-900/80 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
                          Reproducir Video
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`iframe-${activeModule.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${activeModule.youtubeId}?autoplay=1&rel=0&cc_load_policy=0&iv_load_policy=3${activeModule.startTime ? `&start=${parseTimeToSeconds(activeModule.startTime)}` : ''
                          }`}
                        title={activeModule.title}
                        className="w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Features Bullet List (Interactive based on selection) */}
            <div className="mt-6 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/60">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Qué vas a ver en esta demo:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {activeModule.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
