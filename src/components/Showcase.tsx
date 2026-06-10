import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Car,
  Wallet,
  Users,
  Receipt,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  CircleDollarSign
} from 'lucide-react';

const screenshots = [
  {
    id: 'stock',
    title: 'Gestión de Stock',
    description: 'Vista tabular potente para buscar por marca, modelo o patente. Exportación a PDF y control de precios en tiempo real.',
    image: '/screenshots/vehicle_list.png',
    icon: Car,
    tag: 'Inventario'
  },
  {
    id: 'detail',
    title: 'Ficha de Unidad',
    description: 'Información técnica exhaustiva, galería de fotos y balance financiero acumulado de la unidad (Inversión vs Ganancia).',
    image: '/screenshots/vehicle_detail.png',
    icon: Car,
    tag: 'Operaciones'
  },
  {
    id: 'sale',
    title: 'Venta de Unidad',
    description: 'Proceso de venta guiado: asocia clientes, gestiona múltiples formas de pago, toma permutas y calcula comisiones automáticamente.',
    image: '/screenshots/sale_detail.png',
    icon: CircleDollarSign,
    tag: 'Ventas'
  },
  {
    id: 'finance',
    title: 'Gestión de Cajas',
    description: 'Control multi-moneda de tus activos. Concilia saldos en pesos y dólares entre cajas físicas, bancos y billeteras virtuales.',
    image: '/screenshots/cash_management.png',
    icon: Wallet,
    tag: 'Tesorería'
  },
  {
    id: 'clients',
    title: 'Ficha de Cliente',
    description: 'CRM optimizado para el rubro automotriz. Historial de interacciones, compras y estado de consignaciones.',
    image: '/screenshots/client_detail.png',
    icon: Users,
    tag: 'CRM'
  },
  {
    id: 'expenses',
    title: 'Control de Gastos',
    description: 'Carga ágil de gastos operativos con adjuntos. Clasificación por concepto (Sueldos, Mecánicos, Administrativos).',
    image: '/screenshots/expenses_list.png',
    icon: Receipt,
    tag: 'Finanzas'
  }
];

export const Showcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const next = () => setActiveTab((prev) => (prev + 1) % screenshots.length);
  const prev = () => setActiveTab((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="capturas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-4">Experiencia de Usuario</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tu negocio, bajo control</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explora las herramientas que transformarán tu gestión diaria. Una interfaz limpia, rápida y diseñada específicamente para el mercado automotriz.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Menu */}
          <div className="lg:col-span-4 space-y-4">
            {screenshots.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${activeTab === idx
                  ? 'bg-white border-primary shadow-xl ring-1 ring-primary'
                  : 'bg-transparent border-transparent hover:bg-white/50 text-slate-500'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeTab === idx ? 'text-slate-900' : 'text-slate-600'}`}>{s.title}</h4>
                    <p className={`text-xs ${activeTab === idx ? 'text-slate-500' : 'text-slate-400'}`}>{s.tag}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 relative">
                  {/* Browser Header */}
                  <div className="h-10 flex items-center justify-between px-4 bg-slate-100 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                    </div>
                    <div className="flex-1 max-w-sm mx-4 h-5 bg-white rounded-md border border-slate-200 flex items-center px-3">
                      <div className="w-full h-1 bg-slate-100 rounded-full" />
                    </div>
                    <div className="w-3 h-3 bg-slate-300 rounded-sm" />
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[16/10] bg-slate-100 flex items-center justify-center group/img">
                    <img
                      src={screenshots[activeTab].image}
                      alt={screenshots[activeTab].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/1200x750/f8fafc/64748b?text=Subir+${screenshots[activeTab].id}.png`;
                      }}
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlay Info */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pt-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                        <h5 className="text-xl font-bold text-white tracking-tight">{screenshots[activeTab].title}</h5>
                      </div>
                      <p className="text-slate-200 text-sm leading-relaxed max-w-lg">
                        {screenshots[activeTab].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute -bottom-6 right-8 flex gap-2">
                  <button onClick={prev} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:text-primary transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:text-primary transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
