
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
              <Cpu size={14} className="mr-2" /> Powered by AI
            </span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Next-Generation <span className="text-blue-400">AI</span> Solutions for Modern Enterprise
          </h1>
          
          <p className={`text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Harness the power of advanced neural networks, machine learning algorithms, and natural language processing to transform your data into actionable intelligence.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-300 inline-flex items-center justify-center">
              Deploy Now
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#features" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center">
              <Code size={18} className="mr-2" /> Explore API
            </a>
          </div>
        </div>
        
        {/* Tech icons grid */}
        <div className={`mt-16 grid grid-cols-4 gap-4 max-w-xs mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-70' : 'opacity-0'}`}>
          <div className="flex items-center justify-center h-12">
            <Brain size={24} className="text-blue-400" />
          </div>
          <div className="flex items-center justify-center h-12">
            <Database size={24} className="text-purple-400" />
          </div>
          <div className="flex items-center justify-center h-12">
            <Cpu size={24} className="text-green-400" />
          </div>
          <div className="flex items-center justify-center h-12">
            <Code size={24} className="text-yellow-400" />
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Code overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 pointer-events-none z-10"></div>
            
            {/* Matrix-like code rain effect (simulated) */}
            <div className="absolute inset-0 opacity-20 z-0 overflow-hidden">
              <div className="animate-pulse-slow">
                <div className="text-xs text-blue-500 font-mono whitespace-nowrap overflow-hidden">
                  {Array(50).fill('10101001').join(' ')}
                </div>
                <div className="text-xs text-green-500 font-mono mt-2 whitespace-nowrap overflow-hidden">
                  {Array(50).fill('01010110').join(' ')}
                </div>
                <div className="text-xs text-purple-500 font-mono mt-2 whitespace-nowrap overflow-hidden">
                  {Array(50).fill('11100101').join(' ')}
                </div>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22544d2e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="AI Dashboard" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            
            {/* Terminal-like overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-4 z-20 border-t border-slate-700">
              <div className="flex items-center font-mono text-xs text-green-400">
                <span className="mr-2">$</span>
                <span className="typing-animation">initialize_ai_model --precision=high --mode=inference</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
