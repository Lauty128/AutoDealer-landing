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
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <img src="/landing/logo-h.png" alt="Logo AutoDealer" width={170} />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Servicios</a>
            <a href="#historia" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Historia</a>
            <a href="#contacto" className="btn-primary !py-2 !px-5 text-sm">Contactar</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
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
    className={`p-8 rounded-3xl border ${dark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'} shadow-xl relative overflow-hidden`}
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
          subtitle="Gestión ágil para concesionarios pequeños y medianos."
          features={[
            "Control de stock de vehículos",
            "Gestión de ingresos y egresos (ARS/USD)",
            "Registro de ventas con/sin permuta",
            "Historial de ventas por vendedor",
            "Catálogo online autogenerado para clientes",
            "Acceso inmediato sin costo de entrada"
          ]}
          price="Abono Mensual"
        />
        <ServiceCard 
          icon={Database}
          type="ERP"
          title="AutoDealer Dedicado"
          subtitle="ERP robusto para operaciones de gran escala."
          features={[
            "Todo lo incluido en SaaS",
            "Cartera de clientes con historial completo",
            "Múltiples cajas por sucursal",
            "Base de datos propia y dedicada",
            "Gestión de adjuntos por movimiento",
            "Contratos de financiación y consignación",
            "Módulos desarrollados a medida"
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

const History = () => (
  <section id="historia" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/autodealer-office/800/800" 
              alt="AutoDealer History" 
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
                  alt="Lautaro Silverii" 
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu interés. Nos pondremos en contacto pronto.');
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
                  <p className="text-lg">contacto@autodealer.com.ar</p>
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="juan@concesionario.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nombre del Concesionario</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ej: Automotores Centro"
                  onChange={(e) => setFormData({...formData, concesionario: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Motivo de Contacto</label>
                <select 
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos un poco más sobre tu necesidad..."
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" id='submitButton' className="btn-primary w-full flex items-center justify-center gap-2">
                Enviar Mensaje <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <img src="/landing/logo.png" width={100} alt="" />
        
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} AutoDealer. Todos los derechos reservados.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><TrendingUp className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><MessageSquare className="w-5 h-5" /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Users className="w-5 h-5" /></a>
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
        <Benefits />
        <History />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
