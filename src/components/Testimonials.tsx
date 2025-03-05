
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Stéphane m'a aidé a développer mon réseau de partenaires et de revendeurs. Un gros billet à l'entrée, mais il a plus que surpassé mes attentes au niveau des résultats. Allez-y les yeux fermés",
    author: "Joseph Basquin",
    position: "Fondateur- Yellow Noise Audio",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    quote: "Stéphane est un expert dans son domaine et ses conseils m'ont été très utiles ! Il a toujours 1 ou plusieurs solutions. Toujours sympa et disponible je ne peut que le recommander. 👍🏻 En plus sa newsletter est une véritable pépite !",
    author: "Mickaël Raynier",
    position: "Growth manager freelance",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    quote: "I had the opportunity to work with Stéphane on two occasions: 1. At PaletteHQ, where I enjoyed reaching out to him within the company to come up with creative outbound strategies to recruit software engineers. He assisted me with copywriting as well as the implementation of tools, which helped me achieve my recruitment goals. 2. At BuddiesHR, as a growth consultant. We had a lot of \"growth\" topics in our backlog and not enough time to implement everything ourselves. That's why we brought Stéphane on board. Thanks to his work, we successfully implemented an internal content library, eliminating the fear of the blank page. We also improved our SEO content at the \"top of the funnel,\" doubling our traffic since then. Finally, what really sets Stéphane apart when working with him is his creativity. He will always find a different way to approach topics and find solutions to your problems!",
    author: "J.Y Delmotte",
    position: "6x SaaS Founder • Co-founder @ BuddiesHR.com + KarmaLinks.io",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
  },
  {
    quote: "J'ai eu l'occasion de travailler à plusieurs reprises avec Stéphane. La première fois pour gérer le SEO de mon site (qui est passé de 0 traffic à près d1 million de visiteurs annuel). La seconde fois je voulais tester une offre B2B. Stéphane a géré toute la prospection commerciale en paiement \"à la performance\". Résultat : des dizaines de clients potentiels et 2 contrats signés avec des grands groupes en moins d'1 mois 🥳 ! Il a des approches qui sortent des sentiers battus, et je pense que ses résultats en sont grandement liés.",
    author: "Pauline",
    position: "Fondatrice @paulinediet.fr",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    quote: "30 minutes d'une extrême efficacité. Imagination, créativité et ingéniosité. Bravo, vivement recommandé!",
    author: "Florian Marzo",
    position: "Vice-Président exécutif Davidson",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    quote: "Stephane is instrumental in driving the foundation for growth. He brings a sharp mindset and executes with precision. Whether it's identifying new opportunities or optimizing existing processes, he delivers results. If you're looking for someone who can take your growth to the next level, Stephane is the person to have on your team.",
    author: "Omid Mael",
    position: "CEO & Co-founder @SecondBody",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
  },
  {
    quote: "I worked with Stephane twice and every time I was amazed by the growth ideas Stephane always had. His technical knowledge makes him able to implement all of his ideas and to put complex workflows in place. He helped us at Buddieshr with outbound, top-of-the-funnel SEO, copywriting, automations... I strongly recommend Stephane and would personally work with him again whenever we have the occasion.",
    author: "Fabien Pinel",
    position: "Entrepreneur - 6x SaaS startup founder - Co-founder @BuddiesHR & KarmaLinks.io",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

    // Auto rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      {/* Tech background patterns */}
      <div className="absolute inset-0 neural-bg opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="slide-in-section text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
            Témoignages
          </span>
          <h2 className="heading-lg mb-4">Vos (vrais) avis</h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Découvrez ce que mes clients disent de mon travail
          </p>
        </div>

        <div className="relative slide-in-section" ref={sectionRef}>
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 absolute inset-0 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="glass-card p-8 md:p-10 cyber-border">
                  {/* Tech pattern background */}
                  <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none rounded-xl overflow-hidden"></div>
                  
                  {/* Circuit elements */}
                  <div className="absolute top-4 right-4 font-mono text-xs text-blue-400/70">
                    ID: {Math.floor(Math.random() * 1000).toString().padStart(4, '0')}
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/50" 
                          loading="lazy"
                        />
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} 
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl mb-4 italic text-blue-100">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-blue-300">{testimonial.author}</p>
                        <p className="text-blue-100/70 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* For height purposes since the actual testimonials are absolutely positioned */}
            <div className="invisible">
              <div className="glass-card p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl mb-4 italic">
                      "This platform has completely transformed our workflow. The intuitive interface and powerful features have increased our productivity by 40%."
                    </blockquote>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-blue-100/70 text-sm">CTO, TechFlow Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center slide-in-section">
          <div className="glass-card p-8 cyber-border">
            <h3 className="text-2xl font-bold mb-8 text-center">Vous n'avez pas envie de me parler ?</h3>
            <p className="text-blue-100/70 mb-8">
              Rejoignez plus de 1000 entreprises sur ma newsletter
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Entrez votre email" 
                  className="flex-1 bg-slate-800/60 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
