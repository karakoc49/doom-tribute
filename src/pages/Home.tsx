import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import featureCardData from '../utils/data/featureCardData.json';
import SoundButton from '../components/SoundButton';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="bg-[#1c3b33] text-[#f4f4f4] min-h-screen pb-24">
      {/* Hero Section with Video Background */}
      <header className="relative h-80 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/assets/videos/doom-gameplay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="glitch-wrapper glitch-hover">
            <h1 
              className="text-4xl font-bold uppercase text-center tracking-widest glitch" 
              data-text="Welcome to Hell"
            >
              Welcome to Hell
            </h1>
          </div>
          <span className="block text-[#b45e33] text-2xl mt-2 font-bold uppercase tracking-widest">The Doom Tribute</span>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-12 px-6">
        <p className="text-center text-xl font-light max-w-3xl mx-auto font-['VT323'] text-2xl">
          Relive the legacy of *Doom*—the game that reshaped the gaming industry. Explore nostalgic galleries, 
          immerse yourself in classic Doom, and journey through the history of this iconic series.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="py-8 px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featureCardData.map((card, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-[#716a4e] rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform border-2 border-[#4a4536]"
            >
              <h3 className="text-2xl font-bold text-[#b45e33]">{card.title}</h3>
              <p className="mt-2 font-['VT323'] text-xl">{card.desc}</p>
              <SoundButton className="mt-4">
                <Link
                  to={card.btnLink}
                  className="inline-block bg-[#b45e33] text-[#f4f4f4] px-4 py-2 rounded-lg hover:bg-[#6c4b36] transition-colors font-['Press_Start_2P'] text-xs"
                >
                  {card.btnTitle}
                </Link>
              </SoundButton>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
