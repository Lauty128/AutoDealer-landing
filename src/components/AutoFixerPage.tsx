import React, { useState } from 'react';
import {
  Wrench,
  Car,
  ClipboardCheck,
  Users,
  Wallet,
  QrCode,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  Smartphone,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  AlertTriangle,
  Check,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AutoFixerPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ordenes' | 'inspeccion' | 'tracking' | 'cuentas' | 'caja'>('ordenes');

  // Contact form state
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    taller: '',
    tipo_taller: 'Taller Mecánico',
    equipo: '1 a 3 personas',
    asunto: 'autofixer_demo',
    mensaje: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
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
        body: JSON.stringify({
          ...formData,
          origen: 'AutoFixer',
          concesionario: formData.taller // Para compatibilidad
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: '¡Excelente! Recibimos tu consulta sobre AutoFixer. Te contactaremos a la brevedad para coordinar una demo.'
        });
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          taller: '',
          tipo_taller: 'Taller Mecánico',
          equipo: '1 a 3 personas',
          asunto: 'autofixer_demo',
          mensaje: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error de conexión. Podés escribirnos directamente por WhatsApp al +54 2284-552868.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400/30 selection:text-amber-900">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200" aria-label="Navegación AutoFixer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-4">
              <a href="/autofixer" className="flex items-center">
                <img src="/img/autofixer/logo-h.png" alt="AutoFixer - Sistema de gestión para talleres y detailing" className="h-10 w-auto object-contain" />
              </a>
              <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-widest bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-full border border-amber-500/20">
                by AutoDealer
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-7">
              <a href="#modulos" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Funcionalidades</a>
              <a href="#mockup" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Simulador de Sistema</a>
              <a href="#rubros" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Especialidades</a>
              <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Beneficios</a>
              
              <div className="h-5 w-[1px] bg-slate-200" />

              <a href="/" className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">
                ← Volver a AutoDealer
              </a>
              <a href="#contacto" className="btn-primary !bg-amber-500 hover:!bg-amber-600 text-slate-950 font-bold !py-2.5 !px-5 text-sm shadow-amber-500/20">
                Solicitar Demo
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <a href="/" className="text-xs font-semibold text-slate-500 hover:text-slate-800 mr-1">
                AutoDealer
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-700 hover:text-amber-600"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3"
            >
              <a href="#modulos" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-amber-600">
                Funcionalidades
              </a>
              <a href="#mockup" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-amber-600">
                Simulador del Sistema
              </a>
              <a href="#rubros" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-amber-600">
                Especialidades (Mecánica & Detailing)
              </a>
              <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-amber-600">
                Beneficios
              </a>
              <a href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-500 text-sm font-semibold">
                ← Volver a AutoDealer
              </a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block text-center btn-primary !bg-amber-500 hover:!bg-amber-600 text-slate-950 font-bold py-3">
                Solicitar Demo Gratuita
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-24 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[140px]" />
          <div className="absolute bottom-12 right-1/4 w-[30rem] h-[30rem] bg-amber-600 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Nueva Solución del Ecosistema AutoDealer
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
              El control total de tu taller mecánico o de detailing,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                en una sola plataforma
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              Un sistema de gestión integral como <strong>AutoDealer Dedicado</strong>, pero diseñado para talleres mecánicos, detailing y servicios vehiculares. Generá <strong>órdenes de trabajo que progresan de estado</strong> hasta estar listas para retirar, brindale a tu cliente un <strong>link de seguimiento en vivo</strong> para que no tenga que preguntar a cada rato, y gestioná cuentas corrientes, empleados y caja.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
              <a
                href="#contacto"
                className="btn-primary !bg-amber-500 hover:!bg-amber-400 text-slate-950 font-extrabold py-4 px-8 text-base shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Solicitar Demostración <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#mockup"
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 hover:border-amber-500/40"
              >
                Ver Sistema en Acción
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-slate-400">Digital sin papeles perdidos</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">-80%</div>
                <div className="text-xs sm:text-sm text-slate-400">Llamados de "¿cómo viene mi auto?"</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">Checklist</div>
                <div className="text-xs sm:text-sm text-slate-400">Blindaje total ante reclamos de daños</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">QR en Vivo</div>
                <div className="text-xs sm:text-sm text-slate-400">Tracking online para el cliente</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CORE MODULES OVERVIEW */}
      <section id="modulos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Módulos Operativos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Todo lo que tu taller necesita para operar con precisión
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Diseñado pensando en la dinámica real de un taller o estudio de estética: velocidad de carga, orden impecable y cero ambigüedades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Órdenes de Trabajo */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Órdenes de Trabajo (OT)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Creá órdenes detalladas asociando cliente, vehículo, mano de obra tarifada y repuestos o insumos utilizados con sus costos y precios.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Estados: Presupuesto, En Taller, Esperando Repuestos, Terminado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Impresión de orden formal en PDF con membrete</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Liquidación de servicios y remito de entrega final</span>
                </li>
              </ul>
            </div>

            {/* 2. Inspección y Daños */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inspección de Ingreso & Daños</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Protegé a tu negocio registrando el estado exacto en que entra el vehículo antes de tocar una sola tuerca o pasar la pulidora.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Kilometraje y nivel de combustible (10% a 100%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Checklist: Auxilio, criquet, llave, matafuego y cédula</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Anotación de rayones, abolladuras previas y pertenencias</span>
                </li>
              </ul>
            </div>

            {/* 3. Tracking QR */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <QrCode className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seguimiento Online con QR</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Sorprendé a tus clientes con un link o código QR único para que sigan el estado de su vehículo desde el celular en tiempo real.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Línea de tiempo interactiva con avances fotográficos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Aviso instantáneo cuando el auto está listo para retiro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Portal seguro con PIN para consultar histórico de reparaciones</span>
                </li>
              </ul>
            </div>

            {/* 4. Clientes y Cuentas Corrientes */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clientes & Cuentas Corrientes</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Administrá clientes particulares, empresas con flotas y aseguradoras. Llevá el saldo al centavo sin depender de cuadernos.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Historial completo de visitas, presupuestos y órdenes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Registro de pagos parciales, señas y saldos pendientes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Múltiples vehículos vinculados a un mismo cliente</span>
                </li>
              </ul>
            </div>

            {/* 5. Cajas y Finanzas */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Wallet className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Caja Diaria & Movimientos</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Control estricto de las entradas y salidas de dinero del taller. Diferenciá cobros en efectivo, transferencias bancarias o cheques.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Cobros asociados a órdenes de trabajo y comprobantes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Carga de gastos: insumos, herramientas, proveedores y sueldos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Arqueos y cierres de caja con balance diario detallado</span>
                </li>
              </ul>
            </div>

            {/* 6. Empleados y Comisiones */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mecánicos, Detailers & Comisiones</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Si contás con personal, asigná órdenes de trabajo a cada técnico, controlá su carga laboral y calculá sus honorarios o comisiones.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Asignación de responsable técnico por vehículo y tarea</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Cálculo automático de porcentajes de comisión por mano de obra</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Reportes de rendimiento y trabajos finalizados en el mes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULADOR INTERACTIVO DEL SISTEMA / MOCKUPS */}
      <section id="mockup" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Experiencia de Usuario Real
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4">
              Conocé AutoFixer por dentro
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
              Una interfaz moderna, ágil e intuitiva pensada para usarse tanto desde una PC de escritorio en recepción como desde un celular o tablet en el taller.
            </p>
          </div>

          {/* Navigation tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            <button
              onClick={() => setActiveTab('ordenes')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'ordenes'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <ClipboardCheck className="w-4 h-4" />
              Tablero de Órdenes (OT)
            </button>

            <button
              onClick={() => setActiveTab('inspeccion')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'inspeccion'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Inspección de Ingreso
            </button>

            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'tracking'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Tracking en Vivo (QR Cliente)
            </button>

            <button
              onClick={() => setActiveTab('cuentas')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'cuentas'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Users className="w-4 h-4" />
              Cuentas Corrientes
            </button>

            <button
              onClick={() => setActiveTab('caja')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'caja'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Wallet className="w-4 h-4" />
              Caja Diaria & Balance
            </button>
          </div>

          {/* Interactive Simulated Screen Window */}
          <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-4 text-xs font-mono text-slate-400 hidden sm:inline">
                  autofixer.app/admin/taller-principal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Sistema en línea
                </span>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-4 sm:p-8">
              {/* TAB 1: ÓRDENES */}
              {activeTab === 'ordenes' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <h4 className="text-xl font-bold text-white flex items-center gap-2">
                        <Wrench className="w-5 h-5 text-amber-400" />
                        Órdenes de Trabajo Activas
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400">4 unidades en taller hoy · 1 lista para entrega</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-3 py-1.5 rounded-lg font-semibold">
                        + Nueva Orden
                      </span>
                    </div>
                  </div>

                  {/* Kanban-style cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1 */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">OT #1042</span>
                          <span className="text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                            En Taller
                          </span>
                        </div>
                        <h5 className="font-bold text-white text-base">Ford Ranger 3.2 TDCi</h5>
                        <p className="text-xs font-mono text-slate-400 mb-2">Patente: AF 482 RT</p>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                          Distribución completa, cambio de bomba de agua y service 60.000 km.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
                        <span>Mecánico: Carlos M.</span>
                        <span className="text-emerald-400 font-bold">$ 385.000</span>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/[0.04] to-transparent flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">OT #1045</span>
                          <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Listo para Retiro
                          </span>
                        </div>
                        <h5 className="font-bold text-white text-base">VW Golf GTI 2.0</h5>
                        <p className="text-xs font-mono text-slate-400 mb-2">Patente: AC 918 LK</p>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                          Corrección de laca en 3 pasos + Sellado cerámico 9H Gyeon.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
                        <span>Detailer: Lautaro S.</span>
                        <span className="text-emerald-400 font-bold">$ 420.000</span>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">OT #1048</span>
                          <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
                            Esperando Repuestos
                          </span>
                        </div>
                        <h5 className="font-bold text-white text-base">Toyota Hilux 2.8 D4D</h5>
                        <p className="text-xs font-mono text-slate-400 mb-2">Patente: AE 332 OP</p>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                          Kit de embrague y rectificación de volante. Espera de entrega de proveedor.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
                        <span>Mecánico: Matías R.</span>
                        <span className="text-emerald-400 font-bold">$ 540.000</span>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">OT #1050</span>
                          <span className="text-[10px] font-bold uppercase bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
                            Recepción & Checklist
                          </span>
                        </div>
                        <h5 className="font-bold text-white text-base">Audi A3 1.4 TFSI</h5>
                        <p className="text-xs font-mono text-slate-400 mb-2">Patente: AD 774 MN</p>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                          Diagnóstico computarizado por check engine y escaneo OBD2.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
                        <span>Recepción: Central</span>
                        <span className="text-amber-400 font-bold">Presupuesto</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: INSPECCIÓN */}
              {activeTab === 'inspeccion' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                      <div>
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-amber-400" />
                          Inspección de Ingreso y Daños Preexistentes
                        </h4>
                        <p className="text-xs text-slate-400">OT #1042 · [AF 482 RT] Ford Ranger 3.2 TDCi 4x4</p>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-bold">
                        Inspección Validada
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-xs text-slate-400 block mb-1">Kilometraje de Ingreso</span>
                            <span className="text-xl font-mono font-bold text-white">74.250 km</span>
                          </div>
                          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-xs text-slate-400 block mb-1">Nivel de Combustible</span>
                            <span className="text-xl font-bold text-amber-400">1/2 Tanque (50%)</span>
                          </div>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                          <span className="text-xs text-slate-400 block mb-2 font-semibold">
                            Checklist de Accesorios Recibidos:
                          </span>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2 text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" /> Rueda de Auxilio
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" /> Criquet / Gato
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" /> Llave de Ruedas
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" /> Matafuego Vigente
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" /> Balizas Triangulares
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" /> Cédula Verde
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                          <span className="text-xs text-slate-400 block mb-1 font-semibold flex items-center gap-1.5 text-amber-400">
                            <AlertTriangle className="w-4 h-4" /> Registro de Daños Previos (Blindaje Legal)
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                            "Raspón leve en paragolpe delantero derecho (zona baja). Llanta trasera derecha con roce de cordón superficial. Óptica delantera izquierda con microfisura de piedra en ruta."
                          </p>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                          <span className="text-xs text-slate-400 block mb-1 font-semibold">Pertenencias Declaradas</span>
                          <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                            Lentes de sol en gaveta central, cargador USB tipo C.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: TRACKING QR */}
              {activeTab === 'tracking' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
                  <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border-4 border-slate-800">
                    <div className="text-center pb-4 border-b border-slate-100">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Seguimiento en Vivo para el Cliente
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Taller Mecánico & Detailing Pro</h4>
                      <p className="text-xs text-slate-500">Orden de Trabajo #1045</p>
                    </div>

                    <div className="py-4">
                      <div className="bg-slate-50 p-3.5 rounded-2xl mb-4 border border-slate-200">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Vehículo</span>
                        <div className="font-bold text-slate-900 text-sm">Volkswagen Golf GTI 2.0 TSI</div>
                        <span className="text-xs font-mono text-slate-500">Dominio: AC 918 LK</span>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-3 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
                          <div className="text-xs font-bold text-slate-800">1. Recepción & Checklist de Ingreso</div>
                          <div className="text-[10px] text-slate-500">28 Oct - 09:30 hs</div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
                          <div className="text-xs font-bold text-slate-800">2. En Taller: Corrección y Detailing</div>
                          <div className="text-[10px] text-slate-500">28 Oct - 14:00 hs</div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</div>
                          <div className="text-xs font-bold text-slate-800">3. Control de Calidad y Curado 9H</div>
                          <div className="text-[10px] text-slate-500">29 Oct - 11:15 hs</div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">★</div>
                          <div className="text-xs font-bold text-amber-600">4. ¡Listo para Retiro!</div>
                          <div className="text-[10px] text-slate-500">Podés pasar a retirar tu unidad</div>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Trabajos</span>
                          <span className="text-base font-extrabold text-slate-900">$ 420.000</span>
                        </div>
                        <a
                          href="https://wa.me/5492284552868?text=Hola!%20Consulto%20por%20la%20OT%201045."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-xl flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5" /> Avisar Retiro
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: CUENTAS CORRIENTES */}
              {activeTab === 'cuentas' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                      <div>
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                          <Users className="w-5 h-5 text-amber-400" />
                          Cuenta Corriente de Cliente
                        </h4>
                        <p className="text-xs text-slate-400">Cliente: Transporte & Logística Los Álamos S.A.</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Saldo Pendiente de Cobro</span>
                        <span className="text-2xl font-extrabold text-red-400 font-mono">$ 320.000</span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400 uppercase">
                            <th className="py-2.5">Fecha</th>
                            <th className="py-2.5">Comprobante / Concepto</th>
                            <th className="py-2.5">Vehículo</th>
                            <th className="py-2.5 text-right">Debe</th>
                            <th className="py-2.5 text-right">Haber (Pagado)</th>
                            <th className="py-2.5 text-right">Saldo</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 font-mono">
                          <tr>
                            <td className="py-3 text-slate-400">15/10/2026</td>
                            <td className="py-3 text-white">OT #1020 - Service y frenos completos</td>
                            <td className="py-3 text-slate-300">Ranger [AF 482 RT]</td>
                            <td className="py-3 text-right text-red-400">$ 450.000</td>
                            <td className="py-3 text-right text-slate-500">-</td>
                            <td className="py-3 text-right text-white font-bold">$ 450.000</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-slate-400">20/10/2026</td>
                            <td className="py-3 text-emerald-400 font-sans font-semibold">Pago a cuenta - Transferencia Galicia</td>
                            <td className="py-3 text-slate-500">-</td>
                            <td className="py-3 text-right text-slate-500">-</td>
                            <td className="py-3 text-right text-emerald-400">$ 250.000</td>
                            <td className="py-3 text-right text-white font-bold">$ 200.000</td>
                          </tr>
                          <tr>
                            <td className="py-3 text-slate-400">28/10/2026</td>
                            <td className="py-3 text-white">OT #1049 - Cambio de aceite y filtros</td>
                            <td className="py-3 text-slate-300">Kangoo [AD 123 ZX]</td>
                            <td className="py-3 text-right text-red-400">$ 120.000</td>
                            <td className="py-3 text-right text-slate-500">-</td>
                            <td className="py-3 text-right text-amber-400 font-bold">$ 320.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 5: CAJA */}
              {activeTab === 'caja' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                      <span className="text-xs text-slate-400 block mb-1">Efectivo en Caja Diaria</span>
                      <span className="text-2xl font-bold font-mono text-emerald-400">$ 284.500</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Saldo verificado con arqueo</span>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                      <span className="text-xs text-slate-400 block mb-1">Caja Banco / Transferencias</span>
                      <span className="text-2xl font-bold font-mono text-blue-400">$ 1.450.000</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Cobros acreditados vía alias/CBU</span>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                      <span className="text-xs text-slate-400 block mb-1">Gastos de Taller (Hoy)</span>
                      <span className="text-2xl font-bold font-mono text-red-400">$ 95.000</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Compra repuesto distribuidor</span>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Últimos Asientos del Día</h4>
                      <span className="text-xs text-amber-400 font-bold cursor-pointer hover:underline">+ Cerrar Caja del Día</span>
                    </div>

                    <div className="space-y-3 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-white">Cobro OT #1045 - Golf GTI (Lautaro S.)</span>
                        </div>
                        <span className="text-emerald-400 font-bold">+$ 420.000 (Transf.)</span>
                      </div>

                      <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="text-white">Gasto: Compra sellador cerámico e insumos de pulido</span>
                        </div>
                        <span className="text-red-400 font-bold">-$ 95.000 (Efectivo)</span>
                      </div>

                      <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-white">Seña OT #1048 - Repuestos Hilux</span>
                        </div>
                        <span className="text-emerald-400 font-bold">+$ 200.000 (Efectivo)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES: MECÁNICA VS DETAILING */}
      <section id="rubros" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Versatilidad Total
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              Adaptado a la medida de tu especialidad
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Sea un taller de mecánica integral o un estudio de car care de alta gama, AutoFixer se ajusta al flujo exacto de tu actividad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Talleres Mecánicos */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Talleres Mecánicos Multimarca</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Ideal para talleres mecánicos, especialistas en tren delantero, frenos, inyección electrónica o motores.
                </p>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Control de repuestos comprados a proveedores y margen de ganancia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Asignación de órdenes por elevador o puesto de mecánico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Historial clínico del vehículo por número de patente.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600">
                Mecánica ligera y pesada
              </div>
            </div>

            {/* 2. Detailing & Estética Vehicular */}
            <div className="bg-white p-8 rounded-3xl border-2 border-amber-500 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Especial Detailing
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Estudios de Detailing & Car Care</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Diseñado para cuidar la laca y el detalle. Inspección exhaustiva de pintura para autos de alta gama.
                </p>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Checklist fotográfico de swirls, hologramas y golpes previos antes de pulir.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Seguimiento de etapas: descontaminado, corrección, sellado y curado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Control de insumos de alto costo (cerámicos, PPF, pastas de pulir).</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600">
                Estética vehicular & Tratamientos
              </div>
            </div>

            {/* 3. Chapa, Pintura & Lubricentros */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Chapa, Pintura & Lubricentros</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Para talleres de carrocería o centros de lubricación rápida con alto recambio de vehículos.
                </p>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Cotización de paños de chapa, pintura y cabina de secado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Historial de cambios de aceite y filtros con kilometraje de próximo cambio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Manejo de cuentas corrientes para aseguradoras y flotas de empresas.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600">
                Carrocería & Mantenimiento
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS: ANTES VS DESPUÉS */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Transformación Operativa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
              La diferencia entre trabajar con caos y tener el taller bajo control
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Antes */}
            <div className="p-8 rounded-3xl bg-red-50/50 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-red-950">El taller tradicional</h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Órdenes de papel con grasa que se pierden o se vuelven ilegibles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Clientes llamando 5 veces al día para preguntar si su auto está listo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Reclamos injustos de rayones o faltantes porque no había fotos de recepción.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Dudas al cobrar: "¿cuánto me debía este cliente?", "¿se pagó el repuesto?".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Caja descontrolada mezclando plata de mano de obra con gastos personales.</span>
                </li>
              </ul>
            </div>

            {/* Después con AutoFixer */}
            <div className="p-8 rounded-3xl bg-amber-50/50 border-2 border-amber-500 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Tu taller con AutoFixer</h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-800">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Órdenes 100% digitales</strong> con historial guardado por patente para siempre.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Tracking QR:</strong> el cliente ve los avances desde su celular sin interrumpirte.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Checklist firmado:</strong> blindaje ante cualquier queja de daños preexistentes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Cuenta corriente exacta:</strong> sabés cada peso que entra y cada saldo que te deben.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Imagen profesional:</strong> presupuestos y comprobantes que inspiran confianza premium.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO DEDICADO A AUTODEALER / AUTOFIXER */}
      <section id="contacto" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left information */}
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Wrench className="w-3.5 h-3.5" />
                Comenzá con AutoFixer
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                Modernizá la administración de tu <span className="text-amber-400">taller</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
                Dejanos tus datos y nos pondremos en contacto para mostrarte una demostración personalizada del sistema,
                adaptada al tamaño y especialidad de tu taller o centro de estética.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">WhatsApp / Teléfono</p>
                    <p className="text-lg font-semibold text-white">+54 2284-552868</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email de Contacto</p>
                    <p className="text-lg font-semibold text-white">administracion@autodealer.com.ar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Cobertura</p>
                    <p className="text-lg font-semibold text-white">Argentina (100% online y en la nube)</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct card */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-base">¿Preferís consultar por WhatsApp?</h4>
                  <p className="text-xs text-slate-400">Te respondemos en el momento de forma directa.</p>
                </div>
                <a
                  href="https://wa.me/5492284552868?text=Hola!%20Vengo%20desde%20la%20web%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20AutoFixer%20para%20mi%20taller."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-xs flex items-center gap-2 whitespace-nowrap transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Solicitar Demostración de AutoFixer</h3>
              <p className="text-xs text-slate-500 mb-6">Completá el formulario y coordinamos un recorrido guiado.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      placeholder="Ej: Marcos Rossi"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm"
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">WhatsApp / Teléfono *</label>
                    <input
                      type="text"
                      required
                      value={formData.telefono}
                      placeholder="Ej: 2284 123456"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm"
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email de Contacto *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="contacto@mitaller.com.ar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Nombre de tu Taller / Negocio *</label>
                    <input
                      type="text"
                      required
                      value={formData.taller}
                      placeholder="Ej: Taller Mecánico Rossi"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm"
                      onChange={(e) => setFormData({ ...formData, taller: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Especialidad</label>
                    <select
                      value={formData.tipo_taller}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm bg-white"
                      onChange={(e) => setFormData({ ...formData, tipo_taller: e.target.value })}
                    >
                      <option value="Taller Mecánico">Taller Mecánico General</option>
                      <option value="Detailing y Estética">Detailing / Estética Vehicular</option>
                      <option value="Chapa y Pintura">Chapa y Pintura</option>
                      <option value="Lubricentro">Lubricentro / Service Rápido</option>
                      <option value="Frenos y Suspensión">Frenos y Suspensión</option>
                      <option value="Otro">Otro Rubro</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Equipo de Trabajo</label>
                    <select
                      value={formData.equipo}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm bg-white"
                      onChange={(e) => setFormData({ ...formData, equipo: e.target.value })}
                    >
                      <option value="Solo yo">Trabajo solo (1 persona)</option>
                      <option value="1 a 3 personas">Taller de 2 a 3 personas</option>
                      <option value="4 a 10 personas">Taller mediano (4 a 10 personas)</option>
                      <option value="Más de 10 personas">Empresa grande (+10 personas)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Motivo</label>
                    <select
                      value={formData.asunto}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm bg-white"
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    >
                      <option value="autofixer_demo">Solicitar Demo Guiada</option>
                      <option value="autofixer_consulta">Consultar Precios y Modalidad</option>
                      <option value="autofixer_contratar">Quiero Contratar AutoFixer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Mensaje / Comentario</label>
                  <textarea
                    rows={3}
                    value={formData.mensaje}
                    placeholder="Contanos qué te gustaría organizar en tu taller o qué dudas tenés..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm resize-none"
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>

                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs font-semibold ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary !bg-amber-500 hover:!bg-amber-400 text-slate-950 font-extrabold w-full py-4 text-sm flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Enviando solicitud...' : 'Enviar Consulta sobre AutoFixer'}{' '}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white text-slate-500 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <img src="/img/autofixer/logo.png" alt="AutoFixer Logo" className="w-14 h-14 object-contain" />
              <div>
                <span className="font-extrabold text-slate-900 text-lg tracking-tight block">AutoFixer</span>
                <span className="text-xs text-slate-500">Gestión para Talleres y Detailing</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex flex-col md:flex-row items-center gap-4">
              <span>© {new Date().getFullYear()} AutoFixer · Desarrollado por AutoDealer Argentina.</span>
              <span className="hidden md:inline text-slate-200">|</span>
              <a href="/politicas-de-privacidad" className="text-slate-600 hover:text-amber-600 transition-colors font-medium">
                Políticas de Privacidad
              </a>
              <span className="hidden md:inline text-slate-200">|</span>
              <a href="/" className="text-slate-600 hover:text-amber-600 transition-colors font-medium">
                Ir a AutoDealer (Ecosistema)
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <a href="#modulos" className="text-slate-600 hover:text-slate-900 transition-colors">Módulos</a>
              <a href="#rubros" className="text-slate-600 hover:text-slate-900 transition-colors">Especialidades</a>
              <a href="#contacto" className="text-amber-600 hover:underline">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default AutoFixerPage;
