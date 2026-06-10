import React, { useState } from 'react';
import { 
  LayoutDashboard, 
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
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Showcase } from './Showcase';

// Interfaces
interface ServiceCardIterface {
  icon: any, 
  title: string 
  subtitle: string 
  features: string[]
  price: string
  type: string 
  dark?: boolean
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <img src="/landing/logo-h.png" alt="AutoDealer - Sistema de gestión para concesionarios de vehículos" width={170} />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Servicios</a>
            <a href="#historia" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Historia</a>
            <a href="#contacto" className="btn-primary !py-2 !px-5 text-sm">Contactar</a>
          </div>

          <div className="md:hidden">
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary">Servicios</a>
              <a href="#historia" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary">Historia</a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-primary font-bold">Contactar</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          Líderes en Gestión Automotriz
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Potenciamos tu <span className="text-primary">Concesionario</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Soluciones inteligentes para la gestión operativa, promoción de marca y asistencia al cliente. 
          Desde sistemas SaaS ágiles hasta ERPs dedicados a medida.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#servicios" className="btn-primary flex items-center justify-center gap-2">
            Ver Soluciones <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contacto" className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 px-6 rounded-xl transition-all duration-200">
            Solicitar Demo
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, subtitle, features, price, type, dark = false }: ServiceCardIterface) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-3xl border ${dark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'} shadow-xl relative overflow-hidden flex flex-col h-full`}
  >
    {type === 'SaaS' && (
      <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
        Popular
      </div>
    )}
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${dark ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className={`text-sm mb-8 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
    
    <ul className="space-y-4 mb-10">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="mt-auto pt-6 border-t border-slate-100/10">
      <div className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Inversión</div>
      <div className="text-3xl font-bold">{price}</div>
      <p className={`text-xs mt-2 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
        {type === 'SaaS' ? '* Sin contratos de permanencia' : '* Consultar por módulos a medida'}
      </p>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="section-title">Nuestros Sistemas</h2>
        <p className="section-subtitle">
          Diseñamos herramientas que se adaptan al tamaño y necesidades de tu negocio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <ServiceCard 
          icon={LayoutDashboard}
          type="SaaS"
          title="AutoDealer SaaS"
          subtitle="Herramienta ágil de catálogo digital y promoción de marca. No incluye herramientas de gestión operativa."
          features={[
            "Catálogo digital autogenerado para clientes",
            "Administración multi-concesionaria (varias agencias)",
            "Herramientas de publicación de vehículos",
            "Mayor alcance y llegada a los clientes",
            "Acceso desde cualquier lugar y dispositivo móvil",
            "Diseñado exclusivamente para promoción online"
          ]}
          price="Abono Mensual"
        />
        <ServiceCard 
          icon={Database}
          type="ERP"
          title="AutoDealer Dedicado"
          subtitle="El verdadero sistema de AutoDealer. Un ERP completo e integral para gestionar toda tu operación."
          features={[
            "Todo lo incluido en el Plan SaaS",
            "Gestión completa de vehículos y stock",
            "Manejo y control de ingresos y egresos",
            "Manejo de cajas relacionadas entre concesionarios",
            "Ventas de unidades (distintos pagos, permutas y financiación)",
            "Planes 0KM y planes de financiación integrados",
            "Gestión de contratos de consignación",
            "Generación automática de boletos de compra-venta",
            "Fichas de vehículos con historial y balance de unidad",
            "Cuentas corrientes de clientes y emisión de remitos de pagos",
            "ERP integral y robusto diseñado a medida"
          ]}
          price="Costo de Entrada + Mensual"
          dark={true}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center gap-8 shadow-sm"
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <Zap className="text-primary w-8 h-8" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-xl font-bold text-slate-900 mb-2">¿Necesitas algo más específico?</h4>
          <p className="text-slate-600">
            No nos limitamos a nuestros sistemas estándar. Desarrollamos automatizaciones y operaciones especializadas 
            para resolver tareas diarias tediosas de tu concesionario.
          </p>
        </div>
        <a href="#contacto" className="btn-primary whitespace-nowrap">Consultar Servicio Especial</a>
      </motion.div>
    </div>
  </section>
);

const AutoWorth = () => (
  <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
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
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ¡Ya disponible!
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              AutoWorth <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Precios al Instante
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Te presentamos la nueva aplicación web para consultar la cotización y precios de todos los vehículos de Argentina. Accedé de manera inmediata y simple a toda la información del mercado automotriz.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">100% Digital</h4>
                  <p className="text-sm text-slate-400">Olvidate de andar consultando en la revista de papel.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Todo en 2 Clics</h4>
                  <p className="text-sm text-slate-400">Consulta rápida y directa sin complicaciones desde cualquier dispositivo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Multiplataforma</h4>
                  <p className="text-sm text-slate-400">Diseñado para celular, tablet o computadora.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">Siempre Actualizado</h4>
                  <p className="text-sm text-slate-400">Datos reales y vigentes del mercado automotor nacional.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://autoworth.com.ar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex items-center justify-center gap-2 group text-center"
              >
                Ver más 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://wa.me/5492284530866?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20acceso%20a%20AutoWorth." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-center hover:border-primary/50"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                Solicitar acceso
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
                src="/autoworth-mockup.png" 
                alt="AutoWorth App - Consulta de precios de vehículos en Argentina" 
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

const History = () => (
  <section id="historia" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/autodealer-office/800/800" 
              alt="Oficinas de AutoDealer - Software de gestión integral para concesionarios en Argentina" 
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
              AutoDealer comenzó como un sueño ambicioso en un mercado saturado de procesos manuales y herramientas obsoletas. 
              La lucha por llevar este proyecto a cabo fue intensa, enfrentando desafíos tecnológicos y de mercado, 
              pero siempre con la visión clara de simplificar la vida del concesionario.
            </p>
            <p>
              Desde las primeras líneas de código hasta convertirnos en un aliado estratégico para decenas de agencias, 
              nuestro compromiso ha sido la innovación constante. Entendemos que un coche no es solo un producto, 
              es una inversión y un sueño para el cliente, y la gestión detrás de esa venta debe ser impecable.
            </p>
            
            <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                <img 
                  src="/img/me.jpeg" 
                  alt="Lautaro Silverii - CEO y Fundador de AutoDealer, sistema de gestión automotriz" 
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
    asunto: 'consulta',
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
          asunto: 'consulta',
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
              Estamos listos para ayudarte a optimizar tu concesionario. 
              Completa el formulario y un especialista se pondrá en contacto contigo.
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
                  <p className="text-lg">+54 2284-530866</p>
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
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Telefono de contacto *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.telefono}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Ej: 2284 000000"
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
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
                    placeholder="juan@concesionario.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nombre del Concesionario</label>
                <input 
                  type="text" 
                  value={formData.concesionario}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ej: Automotores Centro"
                  onChange={(e) => setFormData({...formData, concesionario: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Motivo de Contacto</label>
                <select 
                  value={formData.asunto}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                >
                  <option value="consulta">Consultar sobre el sistema</option>
                  <option value="contratar">Contratar servicio</option>
                  <option value="especial">Servicio especializado / Automatización</option>
                  <option value="general">Consulta general</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mensaje</label>
                <textarea 
                  rows={4}
                  value={formData.mensaje}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos un poco más sobre tu necesidad..."
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
              </div>

              {status.type && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium ${
                    status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <button 
                type="submit" 
                id='submitButton' 
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
  <footer className="py-12 border-t border-slate-100" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <img src="/landing/logo.png" width={100} alt="AutoDealer - Gestión inteligente para concesionarios" />
        
        <div className="text-slate-500 text-sm flex flex-col md:flex-row items-center gap-4">
          <span>© {new Date().getFullYear()} AutoDealer. Todos los derechos reservados.</span>
          <span className="hidden md:inline text-slate-200">|</span>
          <a href="/politicas-de-privacidad" className="text-slate-600 hover:text-primary transition-colors font-medium">Políticas de Privacidad</a>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Tendencias de AutoDealer" rel="noopener noreferrer"><TrendingUp className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Mensajes y soporte de AutoDealer" rel="noopener noreferrer"><MessageSquare className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Comunidad de usuarios de AutoDealer" rel="noopener noreferrer"><Users className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

const Benefits = () => {
  const items = [
    {
      icon: LayoutDashboard,
      title: "Adiós al Desorden",
      problem: "Planillas de Excel infinitas y papeles perdidos.",
      solution: "Centraliza todo tu stock, ventas y gastos en un solo panel intuitivo y accesible desde cualquier lugar."
    },
    {
      icon: TrendingUp,
      title: "Gestión Multi-Moneda",
      problem: "Confusión al manejar precios en Pesos y Dólares.",
      solution: "Registra movimientos en ambas monedas con conversión automática y reportes claros de rentabilidad."
    },
    {
      icon: Car,
      title: "Catálogo Online en Segundos",
      problem: "Tener que cargar fotos y datos en múltiples sitios.",
      solution: "Carga el vehículo una vez y genera automáticamente un catálogo profesional para compartir con tus clientes por WhatsApp."
    },
    {
      icon: Users,
      title: "Seguimiento de Clientes",
      problem: "No saber qué cliente compró qué o cuándo fue su última visita.",
      solution: "Historial completo de interacciones, compras y consignaciones para fidelizar a tus compradores."
    },
    {
      icon: Zap,
      title: "Contratos Sin Errores",
      problem: "Redacción manual de contratos de consignación o financiación.",
      solution: "Generación automática de documentos legales con los datos del vehículo y el cliente, listos para imprimir."
    },
    {
      icon: MessageSquare,
      title: "Asistencia al Instante",
      problem: "Clientes esperando respuestas sobre disponibilidad.",
      solution: "Toda la información de tu stock en la palma de tu mano para responder consultas en segundos con datos precisos."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Soluciones para el <span className="text-primary">Día a Día</span></h2>
          <p className="section-subtitle">
            Entendemos los desafíos reales de un concesionario. AutoDealer nace para eliminar las fricciones operativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">El Problema</p>
                  <p className="text-sm text-slate-500 italic">"{item.problem}"</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-1">La Solución</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AutoWorth />
        <Benefits />
        <Showcase />
        <History />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
