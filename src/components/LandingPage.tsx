import React, { useState } from 'react';
import {
  Database,
  Zap,
  Users,
  Car,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Menu,
  X,
  Wrench,
  Smartphone,
  Share2,
  Play,
  ExternalLink,
  Layers,
  Bell,
  QrCode,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VideoShowcase } from './VideoShowcase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-h.png" alt="AutoDealer - Infraestructura de software para el rubro automotor" width={170} />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            <a href="#ecosistema" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Ecosistema</a>
            <a href="#concesionarios" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Concesionarios</a>
            <a href="#demos" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Demos ERP</a>
            <a href="#autoworth" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">AutoWorth</a>
            <a
              href="/autofixer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 hover:bg-amber-500 hover:text-slate-950 transition-all text-xs font-bold uppercase tracking-wider border border-amber-500/20 group"
              title="AutoFixer: Sistema de gestión para talleres mecánicos y detailing"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-500 group-hover:text-slate-950" />
              <span>AutoFixer</span>
              <span className="bg-amber-500 text-slate-950 text-[9px] px-1.5 py-0.2 rounded-full font-black group-hover:bg-slate-950 group-hover:text-white">
                TALLERES
              </span>
            </a>
            <a href="#contacto" className="btn-primary !py-2 !px-5 text-sm">Contactar</a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600" aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#ecosistema" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary">El Ecosistema (4 Soluciones)</a>
              <a href="#concesionarios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary">Catálogo & ERP Concesionarios</a>
              <a href="#demos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary">Videos AutoDealer Dedicado</a>
              <a href="#autoworth" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary">AutoWorth (Precios Gratis)</a>
              <a
                href="/autofixer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-amber-700 bg-amber-50 rounded-xl border border-amber-200"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-600" />
                  AutoFixer (Talleres & Detailing)
                </span>
                <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                  Ver Página
                </span>
              </a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-primary font-bold">Contactar</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const solutions = [
    {
      badge: '30 Días Gratis',
      badgeColor: 'bg-primary/15 text-primary-dark border-primary/30',
      icon: Share2,
      name: 'Catálogo AutoDealer',
      target: 'Para Agencias y Vendedores',
      desc: 'Creá tu espacio digital, cargá tus vehículos, generá flyers automáticos y enviá links o fichas a tus clientes.',
      link: '#concesionarios',
      linkText: 'Ver Catálogo Digital',
      externalUrl: 'https://catalogo.autodealer.com.ar/'
    },
    {
      badge: 'Sistema ERP Integral',
      badgeColor: 'bg-slate-900 text-primary border-slate-800',
      icon: Database,
      name: 'AutoDealer Dedicado',
      target: 'Para Concesionarios Usados y 0KM',
      desc: 'Administración total: flota, ventas, cajas, cuentas corrientes con portal para clientes, empleados y comisiones.',
      link: '#concesionarios',
      linkText: 'Ver ERP y Demos',
      highlight: true
    },
    {
      badge: '100% Gratis',
      badgeColor: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30',
      icon: Smartphone,
      name: 'AutoWorth',
      target: 'Cotizador para Celular y PC',
      desc: 'La revista de precios de autos llevada a digital, para que la tengas en todos lados al comprar, vender o permutar.',
      link: '#autoworth',
      linkText: 'Conocer AutoWorth',
      externalUrl: 'https://autoworth.com.ar/'
    },
    {
      badge: 'ERP para Talleres',
      badgeColor: 'bg-amber-500/15 text-amber-700 border-amber-500/30',
      icon: Wrench,
      name: 'AutoFixer',
      target: 'Talleres Mecánicos y Detailing',
      desc: 'Órdenes de trabajo con estados en vivo, link de seguimiento para que el cliente no pregunte a cada rato, cajas y cuentas.',
      link: '/autofixer',
      linkText: 'Ir a AutoFixer →'
    }
  ];

  return (
    <section id="ecosistema" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Layers className="w-3.5 h-3.5" />
              Infraestructura Digital para el Rubro Automotor
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Una solución para cada modalidad del <span className="text-primary">Mundo Automotriz</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              AutoDealer no es un único programa aislado: es un <strong>ecosistema completo de herramientas</strong> pensadas para concesionarios, agencias, talleres mecánicos, centros de detailing y profesionales del sector.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#concesionarios" className="btn-primary flex items-center justify-center gap-2">
                Explorar las 4 Soluciones <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contacto" className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                Hablar con un Asesor
              </a>
            </div>
          </motion.div>
        </div>

        {/* Ecosystem Map: 4 Pillars at a glance */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Elegí qué área de tu negocio querés potenciar hoy
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`rounded-3xl p-6 border flex flex-col justify-between transition-all shadow-sm hover:shadow-xl ${
                    item.highlight
                      ? 'bg-slate-900 text-white border-slate-800 ring-2 ring-primary/40'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-primary/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        item.highlight ? 'bg-primary text-slate-950' : 'bg-primary/10 text-primary'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${
                      item.highlight ? 'text-primary' : 'text-slate-400'
                    }`}>
                      {item.target}
                    </p>
                    <h2 className="text-xl font-extrabold mb-2">{item.name}</h2>
                    <p className={`text-sm leading-relaxed mb-6 ${
                      item.highlight ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between gap-2">
                    <a
                      href={item.link}
                      className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                        item.highlight ? 'text-primary hover:text-primary-light' : 'text-slate-900 hover:text-primary'
                      }`}
                    >
                      {item.linkText} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-slate-400 hover:text-primary inline-flex items-center gap-1"
                        title={`Abrir ${item.name}`}
                      >
                        Web <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const DealershipSolutions = () => (
  <section id="concesionarios" className="py-24 bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          Soluciones 1 y 2 · Para Concesionarios y Agencias
        </span>
        <h2 className="section-title">Dos niveles pensados para tu Agencia de Vehículos</h2>
        <p className="section-subtitle !mb-0">
          Ya sea que busques una vidriera digital económica con herramientas de difusión rápida, o un sistema ERP completo para administrar toda tu concesionaria.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16 items-stretch">
        {/* Card 1: Catálogo AutoDealer */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-8 sm:p-10 rounded-3xl border bg-white text-slate-900 border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 bg-primary text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
            30 Días Gratis Iniciales
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 text-primary shrink-0">
                <Share2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Difusión y Presencia Online</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">Catálogo AutoDealer</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
              Un servicio económico y práctico donde tu concesionario puede crear su propio espacio digital en minutos, subir su listado de vehículos y utilizar herramientas rápidas para vender más por redes y WhatsApp.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Tu propio espacio y catálogo digital autogestionable",
                "Carga sencilla de tu listado de vehículos con fotos y detalles",
                "Generador automático de flyers listos para publicar en redes",
                "Envío rápido de links y fichas técnicas de cada auto a tus clientes",
                "Acceso desde celular, tablet o computadora sin instalar nada",
                "Ideal para agencias que buscan presencia profesional sin complejidad"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Suscripción Accesible</div>
                <div className="text-3xl font-extrabold text-slate-900">~$20.000 ARS <span className="text-base font-medium text-slate-500">/ mes</span></div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">
                  ✓ Incluye 30 días gratis iniciales · Sin permanencia
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://catalogo.autodealer.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm text-center"
              >
                Probar 30 Días Gratis <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://catalogo.autodealer.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-xl transition-all text-sm text-center"
              >
                Ir al Catálogo
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2: AutoDealer Dedicado */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-8 sm:p-10 rounded-3xl border bg-slate-900 text-white border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between ring-1 ring-primary/30"
        >
          <div className="absolute top-0 right-0 bg-primary/20 border-b border-l border-primary/30 text-primary text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest">
            ERP Completo Concesionarios
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/20 text-primary shrink-0">
                <Database className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Administración Total Usados y 0KM</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">AutoDealer Dedicado</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
              El sistema integral de gestión para concesionarios de autos usados o 0KM. Administrá absolutamente toda la operación comercial, financiera y documental en una plataforma que se adapta a tu agencia.
            </p>

            <ul className="space-y-3.5 mb-10">
              {[
                "Control de flota de vehículos usados, unidades 0KM y estados en tiempo real",
                "Gestión de ventas con toma de permutas, señas y planes de financiación",
                "Movimientos de caja multi-moneda (Pesos y Dólares) y gastos por unidad",
                "Clientes y Cuentas Corrientes con Portal Web para que el cliente vea sus pagos y saldo",
                "Administración de empleados, vendedores, ventas y liquidación de comisiones",
                "Generación automática de contratos de consignación, boletos y remitos",
                "Incluye catálogo web público sincronizado automáticamente con tu stock"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Modalidad Dedicada</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Implementación + Mensual</div>
              <p className="text-xs text-slate-400 mt-1">
                * Servidor e infraestructura propia adaptable a las necesidades de tu concesionario
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm text-center !text-slate-950 font-bold"
              >
                Solicitar Demo Personalizada <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#demos"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-3 px-5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-primary fill-primary" /> Ver Videos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AutoWorth = () => (
  <section id="autoworth" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative border-t border-slate-800">
    {/* Glowing background highlights */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* Text column */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Solución 3 · 100% Gratis para Todo el Rubro
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              AutoWorth <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Precios de Vehículos al Instante
              </span>
            </h2>

            {/* Slogan box */}
            <div className="p-5 rounded-2xl bg-white/[0.04] border-l-4 border-primary">
              <p className="text-lg sm:text-xl font-bold text-white italic">
                “Es la revista de autos pero llevada digitalmente, para que la tengas en todos lados.”
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Una aplicación web pensada para celulares y computadoras donde podés consultar rápidamente los precios de vehículos del mercado para <strong>analizar una compra, venta o permuta</strong> antes de finalizar cualquier operación.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Completamente Gratis</h4>
                  <p className="text-sm text-slate-400">Solo creás tu cuenta en segundos y comenzás a usarla sin costo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Decidí con Seguridad</h4>
                  <p className="text-sm text-slate-400">Analizá tomas de usados, compras o ventas con valores de mercado en 2 clics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">En Celular y Computadora</h4>
                  <p className="text-sm text-slate-400">Llevala siempre en el bolsillo o consultala desde el escritorio de la agencia.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Adiós al Papel</h4>
                  <p className="text-sm text-slate-400">Búsqueda inmediata por marca, modelo y año siempre actualizada.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://autoworth.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group text-center !text-slate-950 font-bold"
              >
                Crear Cuenta Gratis y Usar Ahora
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://autoworth.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-center hover:border-primary/50"
              >
                Ingresar a autoworth.com.ar
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mockup Column */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[320px] aspect-[9/18.5] rounded-[48px] bg-slate-950 p-3 shadow-[0_0_50px_rgba(220,172,12,0.25)] border-4 border-slate-800 ring-1 ring-white/10 overflow-hidden flex flex-col"
          >
            {/* Camera notch / Speaker */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* Home indicator bar at bottom */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-slate-800 rounded-full z-20" />

            {/* Screen Content */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-white relative">
              <img
                src="/img/autoworth-mockup.png"
                alt="AutoWorth App - La revista de precios de autos llevada a digital"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const AutoFixerSection = () => (
  <section id="autofixer-home" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 text-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5 text-amber-600" />
              Solución 4 · Para Talleres Mecánicos, Detailing y Servicios
            </div>

            <div className="flex items-center gap-4">
              <img
                src="/img/autofixer/logo-h.png"
                alt="AutoFixer - Sistema de gestión para talleres mecánicos y detailing"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              La potencia de AutoDealer Dedicado, diseñada para <span className="text-primary">Talleres y Detailing</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Si tenés un taller mecánico, estudio de detailing, lubricentro o taller de servicios vehiculares, <strong className="text-slate-900">AutoFixer</strong> te permite administrar toda tu operación de punta a punta: generá órdenes de trabajo que progresan de estado hasta dejar el vehículo listo para retirar, mientras tu cliente consulta el avance desde su celular.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-1">
                  <QrCode className="w-4 h-4 shrink-0" />
                  Link de Estado para el Cliente
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El cliente entra a su link exclusivo y ve en todo momento en qué etapa está su vehículo, <strong className="text-slate-800">sin tener que estar preguntando a cada rato</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-1">
                  <Bell className="w-4 h-4 shrink-0" />
                  Aviso de "Listo para Retirar"
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Las órdenes avanzan por etapas (Recepción, En Taller, Repuestos, Calidad) y podés avisar al cliente apenas su auto esté terminado.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-1">
                  <Users className="w-4 h-4 shrink-0" />
                  Clientes, Cuentas y Empleados
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Administrá historiales por patente, cuentas corrientes con saldos pendientes, mecánicos asignados y comisiones.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Checklist de Ingreso y Caja
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inspección de recepción para evitar reclamos de daños previos y control diario de ingresos y gastos de caja del taller.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="/autofixer"
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-4 px-7 shadow-lg shadow-primary/20"
              >
                Ver Página Completa de AutoFixer <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/autofixer#contacto"
                className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                Consultar por AutoFixer
              </a>
            </div>
          </div>

          {/* Right visual preview card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-lg space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 font-bold block">Vista del Cliente en Vivo</span>
                  <h4 className="font-bold text-slate-900 text-base">Orden de Trabajo #1045</h4>
                </div>
                <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                  ● Listo para Retiro
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs text-slate-500">Vehículo en servicio</div>
                  <div className="font-bold text-slate-900 text-sm">VW Golf GTI 2.0 TSI</div>
                  <div className="text-xs font-mono text-amber-600 font-semibold">Dominio: AC 918 LK</div>
                </div>
                <Car className="w-8 h-8 text-slate-400" />
              </div>

              {/* Progress steps */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                  <span className="font-semibold">1. Recepción y Checklist de Daños</span>
                  <span className="font-bold text-emerald-600">Completado ✓</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                  <span className="font-semibold">2. En Taller / Mano de Obra</span>
                  <span className="font-bold text-emerald-600">Completado ✓</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                  <span className="font-semibold">3. Control de Calidad Final</span>
                  <span className="font-bold text-emerald-600">Completado ✓</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-primary text-white font-extrabold shadow-md">
                  <span>4. ¡Vehículo Listo para Retirar!</span>
                  <span>Aviso Enviado ★</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="/autofixer#mockup"
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1.5"
                >
                  Probar el simulador interactivo de AutoFixer <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SolutionComparison = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-100" id="beneficios">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          Resumen del Ecosistema
        </span>
        <h2 className="section-title">¿Cuál es la herramienta ideal para vos?</h2>
        <p className="section-subtitle !mb-0">
          Toda nuestra infraestructura comparte la misma filosofía: velocidad, simplicidad y soporte cercano para el rubro automotor argentino.
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-lg mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-900 text-white text-xs uppercase tracking-wider">
              <th className="py-5 px-6">Solución</th>
              <th className="py-5 px-6">¿Para quién es?</th>
              <th className="py-5 px-6">¿Qué resuelve principalmente?</th>
              <th className="py-5 px-6">Costo / Modalidad</th>
              <th className="py-5 px-6 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-5 px-6 font-extrabold text-slate-900">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-5 h-5 text-emerald-600 shrink-0" />
                  AutoWorth
                </div>
              </td>
              <td className="py-5 px-6 text-slate-600">Agencias, vendedores y compradores</td>
              <td className="py-5 px-6 text-slate-700">
                Consultar precios de mercado al instante para analizar compras, ventas o permutas ("la revista digital en tu bolsillo").
              </td>
              <td className="py-5 px-6">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-full">
                  100% Gratis
                </span>
              </td>
              <td className="py-5 px-6 text-right whitespace-nowrap">
                <a href="https://autoworth.com.ar" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                  Crear cuenta <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </td>
            </tr>

            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-5 px-6 font-extrabold text-slate-900">
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-5 h-5 text-primary shrink-0" />
                  Catálogo AutoDealer
                </div>
              </td>
              <td className="py-5 px-6 text-slate-600">Concesionarios y agencias de autos</td>
              <td className="py-5 px-6 text-slate-700">
                Tener página web propia con tu stock, generador automático de flyers para redes y envío de fichas por WhatsApp.
              </td>
              <td className="py-5 px-6">
                <span className="font-bold text-slate-900 block">~$20.000 ARS/mes</span>
                <span className="text-xs text-emerald-600 font-semibold">30 días gratis iniciales</span>
              </td>
              <td className="py-5 px-6 text-right whitespace-nowrap">
                <a href="https://catalogo.autodealer.com.ar" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                  Probar 30 días <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </td>
            </tr>

            <tr className="hover:bg-slate-50/80 transition-colors bg-amber-50/20">
              <td className="py-5 px-6 font-extrabold text-slate-900">
                <div className="flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-primary shrink-0" />
                  AutoDealer Dedicado
                </div>
              </td>
              <td className="py-5 px-6 text-slate-600">Concesionarios de usados y 0KM</td>
              <td className="py-5 px-6 text-slate-700">
                ERP completo: stock, unidades 0KM, ventas, cajas, cuentas corrientes con portal de clientes, empleados y comisiones.
              </td>
              <td className="py-5 px-6">
                <span className="font-bold text-slate-900 block">ERP Dedicado</span>
                <span className="text-xs text-slate-500">A medida de tu agencia</span>
              </td>
              <td className="py-5 px-6 text-right whitespace-nowrap">
                <a href="#demos" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                  Ver videos <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </td>
            </tr>

            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-5 px-6 font-extrabold text-slate-900">
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-5 h-5 text-amber-500 shrink-0" />
                  AutoFixer
                </div>
              </td>
              <td className="py-5 px-6 text-slate-600">Talleres mecánicos y de Detailing</td>
              <td className="py-5 px-6 text-slate-700">
                Órdenes de trabajo progresivas, link de seguimiento en vivo para clientes, aviso de retiro, cuentas corrientes y caja.
              </td>
              <td className="py-5 px-6">
                <span className="font-bold text-slate-900 block">ERP para Talleres</span>
                <span className="text-xs text-slate-500">Implementación ágil</span>
              </td>
              <td className="py-5 px-6 text-right whitespace-nowrap">
                <a href="/autofixer" className="text-amber-600 font-bold hover:underline inline-flex items-center gap-1">
                  Ver AutoFixer <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Custom development banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center gap-8 shadow-sm"
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <Zap className="text-primary w-8 h-8" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-xl font-bold text-slate-900 mb-2">¿Necesitás una integración o desarrollo a medida?</h4>
          <p className="text-slate-600 text-sm sm:text-base">
            Además de nuestras 4 plataformas listas para usar, desarrollamos automatizaciones y módulos personalizados para resolver operativas particulares de tu concesionario o taller.
          </p>
        </div>
        <a href="#contacto" className="btn-primary whitespace-nowrap">Consultar Servicio Especial</a>
      </motion.div>
    </div>
  </section>
);

const History = () => (
  <section id="historia" className="py-24 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/autodealer-office/800/800"
              alt="Oficinas de AutoDealer - Infraestructura de software para el rubro automotor en Argentina"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
            <p className="text-white font-bold text-lg italic">
              "Nacimos de la necesidad de modernizar un sector que se quedó en el tiempo."
            </p>
          </div>
        </div>

        <div>
          <h2 className="section-title text-left">Nuestra Historia</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              AutoDealer comenzó como un sueño ambicioso en un mercado saturado de procesos manuales, planillas dispersas y herramientas obsoletas.
              Con el tiempo, entendimos que el rubro automotor necesitaba mucho más que un solo sistema: necesitaba una <strong>infraestructura conectada</strong> capaz de acompañar desde al vendedor que busca cotizar una permuta en segundos, hasta la concesionaria o el taller que necesita controlar cada orden y cada caja.
            </p>
            <p>
              Así nacieron <strong>Catálogo AutoDealer</strong>, <strong>AutoDealer Dedicado</strong>, <strong>AutoWorth</strong> y <strong>AutoFixer</strong>: cuatro soluciones diseñadas con la misma pasión por el orden, la transparencia y la simplicidad operativa.
            </p>

            <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src="/img/me.jpg"
                  alt="Lautaro Silverii - CEO y Fundador de AutoDealer"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h5 className="text-lg font-bold text-slate-900">Lautaro Silverii</h5>
                <p className="text-sm text-primary font-semibold">CEO & Fundador de AutoDealer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    concesionario: '',
    asunto: 'dedicado',
    mensaje: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://autodealer.com.ar/api/enviar-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: result.message });
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          concesionario: '',
          asunto: 'dedicado',
          mensaje: ''
        });
      } else {
        setStatus({ type: 'error', message: result.message || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión. Por favor, verifica tu internet e intenta nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Hablemos de tu próximo <span className="text-primary">gran paso</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Elegí la solución del ecosistema AutoDealer que mejor se adapte a tu concesionario o taller.
              Completá el formulario y nos pondremos en contacto con vos.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg">administracion@autodealer.com.ar</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-lg">+54 2284-552868</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Ubicación</p>
                  <p className="text-lg">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Ej: Juan Pérez"
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Teléfono de contacto *</label>
                  <input
                    type="text"
                    required
                    value={formData.telefono}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Ej: 2284 000000"
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="juan@agencia.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nombre del Concesionario o Taller</label>
                <input
                  type="text"
                  value={formData.concesionario}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ej: Automotores Centro / Taller Rossi"
                  onChange={(e) => setFormData({ ...formData, concesionario: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Solución de Interés</label>
                <select
                  value={formData.asunto}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                >
                  <option value="dedicado">AutoDealer Dedicado (ERP Completo Concesionarios)</option>
                  <option value="catalogo">Catálogo AutoDealer (~$20.000/mes · 30 días gratis)</option>
                  <option value="autofixer_consulta">AutoFixer (Sistema para Talleres Mecánicos / Detailing)</option>
                  <option value="autoworth">AutoWorth (Cotizador Digital de Precios)</option>
                  <option value="especial">Desarrollo a Medida / Automatización</option>
                  <option value="general">Consulta General</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mensaje *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.mensaje}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Contanos un poco más sobre tu agencia o taller y qué te gustaría implementar..."
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                ></textarea>
              </div>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
                    }`}
                >
                  {status.message}
                </motion.div>
              )}

              <button
                type="submit"
                id="submitButton"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-slate-100 bg-white" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <img src="/logo.png" width={100} alt="AutoDealer - Infraestructura inteligente para el rubro automotor" />

        <div className="text-slate-500 text-sm flex flex-wrap justify-center items-center gap-4">
          <span>© {new Date().getFullYear()} AutoDealer. Todos los derechos reservados.</span>
          <span className="hidden md:inline text-slate-200">|</span>
          <a href="https://catalogo.autodealer.com.ar" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors font-medium">Catálogo Digital</a>
          <span className="hidden md:inline text-slate-200">|</span>
          <a href="https://autoworth.com.ar" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors font-medium">AutoWorth</a>
          <span className="hidden md:inline text-slate-200">|</span>
          <a href="/autofixer" className="text-amber-600 hover:text-amber-700 transition-colors font-semibold flex items-center gap-1">
            <Wrench className="w-3.5 h-3.5" /> AutoFixer (Talleres)
          </a>
          <span className="hidden md:inline text-slate-200">|</span>
          <a href="/politicas-de-privacidad" className="text-slate-600 hover:text-primary transition-colors font-medium">Políticas de Privacidad</a>
        </div>

        <div className="flex gap-6">
          <a href="#ecosistema" className="text-slate-400 hover:text-primary transition-colors" aria-label="Soluciones de AutoDealer"><TrendingUp className="w-5 h-5" /></a>
          <a href="#contacto" className="text-slate-400 hover:text-primary transition-colors" aria-label="Contacto y soporte de AutoDealer"><MessageSquare className="w-5 h-5" /></a>
          <a href="#historia" className="text-slate-400 hover:text-primary transition-colors" aria-label="Historia de AutoDealer"><Users className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <DealershipSolutions />
        <VideoShowcase />
        <AutoWorth />
        <AutoFixerSection />
        <SolutionComparison />
        <History />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
