
import { useEffect, useRef } from 'react';
import { LineChart, BarChart, PieChart, Zap, Shield, Users, Clock, Target, Workflow } from 'lucide-react';

const features = [
  {
    icon: <LineChart size={24} className="text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics tools. Track growth and make data-driven decisions."
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security protocols to protect your data. Your business security is our priority."
  },
  {
    icon: <Zap size={24} className="text-primary" />,
    title: "Lightning Fast",
    description: "Optimized performance for seamless operations. Speed up your workflow and save valuable time."
  },
  {
    icon: <BarChart size={24} className="text-primary" />,
    title: "Growth Tracking",
    description: "Monitor your business metrics in real-time. Set goals and visualize your progress effortlessly."
  },
  {
    icon: <Clock size={24} className="text-primary" />,
    title: "Time Saving",
    description: "Automate repetitive tasks and focus on what matters. Reclaim hours of your workday with smart automation."
  },
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Team Collaboration",
    description: "Seamless communication and project management tools to keep your team synchronized and productive."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.slide-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="slide-in-section text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Features
          </span>
          <h2 className="heading-lg mb-4">Everything you need in one place</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Our comprehensive suite of tools will help you streamline operations and focus on growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in-section" ref={sectionRef}>
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 hover-scale">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 slide-in-section">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Workflow
                </span>
                <h2 className="heading-md mb-4">Streamlined process for maximum efficiency</h2>
                <p className="text-foreground/70 mb-6">
                  Our intuitive workflow system reduces complexity and boosts productivity. Experience a seamless journey from ideation to execution with our carefully designed process.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Target size={14} className="text-green-600" />
                    </div>
                    <span>Set clear objectives and targets</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Workflow size={14} className="text-green-600" />
                    </div>
                    <span>Automate repetitive workflows</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <PieChart size={14} className="text-green-600" />
                    </div>
                    <span>Analyze results with rich visualizations</span>
                  </li>
                </ul>
                <a href="#contact" className="btn-primary inline-flex self-start">Learn More</a>
              </div>
              <div className="bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Workflow Dashboard" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
