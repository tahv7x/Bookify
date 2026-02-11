import React, { useState, useEffect } from 'react';
import {  Stethoscope,Brush  , Hospital , Brain, PawPrint, Paintbrush , Sparkles, Scissors, Scale, Briefcase, Dumbbell, Car, Wrench, Plug ,Calendar, Shield, Star, ChevronRight, Clock, MapPin } from 'lucide-react';
import Navbar from '../../components/Dashboard/Navbar';
import TopBar from '../../components/Dashboard/TopBar';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
  { name: 'Médecin généraliste', icon: Stethoscope },
  { name: 'Dentiste', icon: Hospital },
  { name: 'Psychologue', icon: Brain },
  { name: 'Vétérinaire', icon: PawPrint },
  { name: 'Coiffeur / Barbier', icon: Scissors },
  { name: 'Maquilleur(se) professionnel(le)', icon: Brush   },
  { name: 'Prothésiste ongulaire', icon: Paintbrush  },
  { name: 'Avocat', icon: Scale },
  { name: 'Consultant', icon: Briefcase },
  { name: 'Coach (sportif, pro, vie)', icon: Dumbbell },
  { name: 'Mécanicien automobile', icon: Car },
  { name: 'Plombier', icon: Wrench },
  { name: 'Électricien', icon: Plug },
  { name: 'Nettoyage', icon: Sparkles }
];



const servicesData: { [key: string]: Array<{ title: string; img: string }> } = {
  'Médecin généraliste': [
    { title: 'Consultation Générale', img: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop' },
    { title: 'Suivi Médical', img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop' },
    { title: 'Certificat Médical', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
    { title: 'Visite à Domicile', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop' }
  ],

  Dentiste: [
    { title: 'Détartrage', img: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=600&h=400&fit=crop' },
    { title: 'Soins Dentaires', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop' },
    { title: 'Blanchiment', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop' },
    { title: 'Extraction Dentaire', img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop' }
  ],

  Psychologue: [
    { title: 'Thérapie Individuelle', img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&h=400&fit=crop' },
    { title: 'Gestion du Stress', img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop' },
    { title: 'Coaching Personnel', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop' },
    { title: 'Thérapie de Couple', img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop' }
  ],

  Vétérinaire: [
    { title: 'Consultation Animaux', img: 'https://images.unsplash.com/photo-1530041539828-114de669390e?w=600&h=400&fit=crop' },
    { title: 'Vaccination', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop' },
    { title: 'Soins Généraux', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop' },
    { title: 'Urgences Vétérinaires', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop' }
  ],

  'Coiffeur / Barbier': [
    { title: 'Coupe Homme', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop' },
    { title: 'Coupe Femme', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop' },
    { title: 'Barbe & Styling', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop' },
    { title: 'Coloration', img: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600&h=400&fit=crop' }
  ],

  'Maquilleur(se) professionnel(le)': [
    { title: 'Maquillage Mariée', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
    { title: 'Maquillage Soirée', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop' },
    { title: 'Maquillage Shooting', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop' },
    { title: 'Maquillage Naturel', img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop' }
  ],

  'Prothésiste ongulaire': [
    { title: 'Pose Ongles Gel', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop' },
    { title: 'Manucure', img: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=400&fit=crop' },
    { title: 'Nail Art', img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=400&fit=crop' },
    { title: 'Remplissage Ongles', img: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop' }
  ],

  Avocat: [
    { title: 'Conseil Juridique', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop' },
    { title: 'Droit de la Famille', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop' },
    { title: 'Droit du Travail', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop' },
    { title: 'Rédaction de Contrats', img: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?w=600&h=400&fit=crop' }
  ],

  Consultant: [
    { title: 'Consulting Business', img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop' },
    { title: 'Stratégie', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { title: 'Organisation', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop' },
    { title: 'Audit & Analyse', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' }
  ],

  'Coach (sportif, pro, vie)': [
    { title: 'Coaching Sportif', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop' },
    { title: 'Coaching de Vie', img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop' },
    { title: 'Coaching Professionnel', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop' },
    { title: 'Suivi & Motivation', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop' }
  ],

  'Mécanicien automobile': [
    { title: 'Réparation Auto', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop' },
    { title: 'Vidange', img: 'https://images.unsplash.com/photo-1625047509252-d23bfe513056?w=600&h=400&fit=crop' },
    { title: 'Diagnostic', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop' },
    { title: 'Frein & Suspension', img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop' }
  ],

  Plombier: [
    { title: 'Dépannage Plomberie', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=400&fit=crop' },
    { title: 'Installation Sanitaire', img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop' },
    { title: 'Réparation Fuite', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop' },
    { title: 'Débouchage', img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop' }
  ],

  Électricien: [
    { title: 'Installation Électrique', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop' },
    { title: 'Dépannage', img: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=600&h=400&fit=crop' },
    { title: 'Mise aux Normes', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop' },
    { title: 'Éclairage & Prises', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&h=400&fit=crop' }
  ],

  Nettoyage: [
    { title: 'Nettoyage Maison', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop' },
    { title: 'Nettoyage Tapis', img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop' },
    { title: 'Débarras', img: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&h=400&fit=crop' },
    { title: 'Nettoyage Vitres', img: 'https://images.unsplash.com/photo-1581578968446-a821e2f3f6e9?w=600&h=400&fit=crop' }
  ]
};



  const specialists = [
    {
      name: 'Dr. Youssef Alami',
      specialty: 'Dentiste',
      rating: 4.9,
      reviews: 127,
      image: 'https://i.pravatar.cc/150?img=12',
      location: 'Casablanca',
      price: '300 MAD',
      available: true
    },
    {
      name: 'Dr. Sara Bennis',
      specialty: 'Cardiologue',
      rating: 5.0,
      reviews: 89,
      image: 'https://i.pravatar.cc/150?img=45',
      location: 'Rabat',
      price: '500 MAD',
      available: true
    },
    {
      name: 'Dr. Ahmed Tazi',
      specialty: 'Psychologue',
      rating: 4.8,
      reviews: 156,
      image: 'https://i.pravatar.cc/150?img=33',
      location: 'Marrakech',
      price: '400 MAD',
      available: false
    },
    {
      name: 'Dr. Malika Fassi',
      specialty: 'Pédiatre',
      rating: 4.9,
      reviews: 203,
      image: 'https://i.pravatar.cc/150?img=47',
      location: 'Casablanca',
      price: '350 MAD',
      available: true
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Réservation Instantanée',
      description: 'Prenez rendez-vous en quelques clics, 24h/24 et 7j/7'
    },
    {
      icon: Shield,
      title: 'Professionnels Vérifiés',
      description: 'Tous nos spécialistes sont certifiés et vérifiés'
    },
    {
      icon: Clock,
      title: 'Rappels Automatiques',
      description: 'Ne manquez plus jamais un rendez-vous médical'
    },
    {
      icon: Star,
      title: 'Avis Authentiques',
      description: 'Consultez les avis réels de milliers de patients'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Patients Satisfaits' },
    { number: '500+', label: 'Spécialistes' },
    { number: '50K+', label: 'Rendez-vous' },
    { number: '4.9', label: 'Note Moyenne' }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FE]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Fraunces:wght@600;700&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .heading-font {
          font-family: 'Fraunces', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .brand-gradient {
          background: linear-gradient(135deg, #004a96 0%, #1A6FD1 100%);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .mesh-gradient {
          background: radial-gradient(at 40% 20%, hsla(230, 70%, 65%, 0.15) 0px, transparent 50%),
                      radial-gradient(at 80% 0%, hsla(280, 60%, 70%, 0.15) 0px, transparent 50%),
                      radial-gradient(at 0% 50%, hsla(195, 70%, 65%, 0.15) 0px, transparent 50%);
        }

        .text-gradient {
          background: linear-gradient(135deg, #004a96 0%, #1A6FD1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .sidebar-overlay {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 z-50 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>

        <Navbar
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
            setIsSidebarOpen(false);
          }}
        />
      </div>

      {/* Main Content */}
      <main
          className={`
            min-h-screen transition-all duration-300
            lg:${isSidebarOpen ? 'ml-64' : 'ml-0'}
          `}
        >

        {/* Top Bar */}
        <TopBar 
          userName="Aya"
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isMobileMenuOpen={isSidebarOpen}
        />

        {/* Hero Section */}
        <section className="pt-8 pb-20 px-4 sm:px-6 lg:px- overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center text-center">
              {/* Left Content */}
              <div className="space-y-8 max-w-3xl mx-auto flex flex-col items-center">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full animate-fade-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
                  <span className="text-[#0059B2] font-semibold text-sm">🎯 Réservation simplifiée</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold heading-font text-gray-900 leading-tight animate-fade-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
                  Trouvez le bon{' '}
                  <span className="text-gradient">professionnel</span>
                  {' '}en un clic
                </h1>
                <div className="relative z-10 container mx-auto px-4 py-1 md:py-2 lg:py-2">
                    {/* Image container */}
                    <div 
                      className="relative w-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]" 
                      style={{
                        borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
                        aspectRatio: '16/9'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 z-10" />
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
                        alt="Professional services team"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed animate-fade-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
                  Réservez vos rendez-vous instantanément avec les meilleurs professionnels de votre région.
                </p>
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-fade-up" style={{ opacity: 0, animationDelay: '0.5s' }}>
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-7 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat, idx) => (
                <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex flex-col items-center justify-center gap-2
                      px-3 sm:px-4 py-3 rounded-lg transition-all
                      whitespace-normal text-center
                      min-w-[80px] sm:min-w-[100px]
                      ${
                        selectedCategory === cat.name
                          ? 'text-[#0059B2]'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                      }`}
                  >
                    {/* Icon */}
                    <span className="flex items-center justify-center">
                      <cat.icon size={28} className="sm:w-7 sm:h-7" />
                    </span>



                    {/* Text */}
                    <span className="text-xs sm:text-sm font-medium leading-tight break-words">
                      {cat.name}
                    </span>

                    {selectedCategory === cat.name && (
                      <div className="w-full h-1 bg-[#0059B2] rounded-full mt-1"></div>
                    )}
                  </button>

              ))}
            </div>
          </div>
        </section>

        {/* Service Cards Section - Dynamic based on selected category */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {servicesData[selectedCategory]?.map((service, idx) => (
                <div 
                  key={idx}
                  className="card-hover group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer"
                  style={{ opacity: 0, animation: 'fadeInUp 0.2s forwards', animationDelay: `${0.1 + idx * 0.1}s` }}
                >
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <h3 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-lg sm:text-2xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists Grid */}
        <section id="specialists" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold heading-font text-gray-900 mb-4">
                Nos Spécialistes
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Choisissez parmi des centaines de professionnels qualifiés
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {specialists.map((specialist, idx) => (
                <div
                  key={idx}
                  className="card-hover bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100"
                  style={{ opacity: 0, animation: 'fadeInUp 0.6s forwards', animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto"
                    />
                    {specialist.available && (
                      <div className="absolute top-0 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 text-center mb-1 text-sm sm:text-base">{specialist.name}</h3>
                  <p className="text-[#0059B2] text-xs sm:text-sm text-center mb-3">{specialist.specialty}</p>

                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="font-semibold text-sm">{specialist.rating}</span>
                    <span className="text-gray-500 text-xs">({specialist.reviews})</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-gray-600 text-xs sm:text-sm mb-4">
                    <MapPin size={12} />
                    {specialist.location}
                  </div>

                  <div className="text-center mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">{specialist.price}</span>
                    <span className="text-gray-500 text-xs">/consultation</span>
                  </div>

                  <button className="w-full py-2 sm:py-3 bg-gradient-to-r  from-[#004a96] to-[#1A6FD1] text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm">
                    Réserver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold heading-font text-gray-900 mb-4">
                Pourquoi Choisir Bookify?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Une expérience de réservation simple et efficace
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="text-center"
                    style={{ opacity: 0, animation: 'fadeInUp 0.6s forwards', animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-[#0059B2] to-[#1A6FD1] rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 brand-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold heading-font text-white mb-4 sm:mb-6">
              Prêt à Réserver Votre Rendez-vous?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Rejoignez des milliers de patients satisfaits et trouvez votre spécialiste dès aujourd'hui
            </p>
            <button className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#0059B2] rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all hover:scale-105">
              Commencer Maintenant
              <ChevronRight className="inline ml-2" size={20} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 gradient-animate rounded-xl flex items-center justify-center">
                    <Calendar className="text-white" size={22} />
                  </div>
                  <span className="text-2xl font-bold heading-font">Bookify</span>
                </div>
                <p className="text-gray-400 text-sm">
                  La plateforme #1 de réservation de services au Maroc
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm sm:text-base">Services</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Santé</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Beauté</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Artisanat</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Nettoyage</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-sm sm:text-base">Support</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 Bookify. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;