
import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Cpu, Code, Database } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Tech-inspired background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
        
        {/* Animated circuit pattern - top */}
        <div className="absolute top-0 inset-x-0 h-40 overflow-hidden -z-10">
          <div className="w-full h-full opacity-10">
            <div className="w-[80%] h-[1px] bg-blue-400 absolute top-12 left-0"></div>
            <div className="w-[60%] h-[1px] bg-blue-400 absolute top-28 right-0"></div>
            <div className="w-[2px] h-28 bg-blue-400 absolute top-12 left-[20%]"></div>
            <div className="w-[2px] h-28 bg-blue-400 absolute top-12 right-[40%]"></div>
            <div className="w-4 h-4 rounded-full border-2 border-blue-400 absolute top-12 left-[20%]"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400 absolute top-28 right-[40%]"></div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Cpu size={14} className="mr-2" /> GTM Engineer | Growth Engineer
            </span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Générez plus de <span className="text-blue-400">chiffre d'affaire</span>
            <span className="block text-xl sm:text-2xl text-slate-300 mt-3">(sans augmenter la taille de vos équipes)</span>
          </h1>
          
          <p className={`text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Expert en Automatisation, Scalabilité & Stratégies Go-to-Market
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-300 inline-flex items-center justify-center">
              Échanger 15 min avec moi
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-card p-4 text-center cyber-border">
            <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
            <p className="text-blue-100/70">experts</p>
            <p className="text-xs text-blue-100/50 mt-2">entouré d'un solide réseau d'experts aux USA et en France</p>
          </div>
          <div className="glass-card p-4 text-center cyber-border">
            <div className="text-3xl font-bold text-blue-400 mb-2">60+</div>
            <p className="text-blue-100/70">coaching</p>
            <p className="text-xs text-blue-100/50 mt-2">en stratégie</p>
          </div>
          <div className="glass-card p-4 text-center cyber-border">
            <div className="text-3xl font-bold text-blue-400 mb-2">15</div>
            <p className="text-blue-100/70">années d'expérience</p>
            <p className="text-xs text-blue-100/50 mt-2">solide expérience dans la vente et le marketing, et le développement informatique</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
